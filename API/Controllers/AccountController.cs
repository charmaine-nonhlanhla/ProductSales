using System.Security.Claims;
using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class AccountController : ControllerBase
  {
    private readonly UserManager<User> _userManager;
    private readonly TokenService _tokenService;
    public AccountController(UserManager<User> userManager, TokenService tokenService)
    {
      _tokenService = tokenService;
      _userManager = userManager;

    }

    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
      var user = await _userManager.FindByEmailAsync(loginDto.Email);

      if (user == null) return Unauthorized();

      var result = await _userManager.CheckPasswordAsync(user, loginDto.Password);

      if (result)
      {
        await SetRefreshToken(user);
        return CreateUserObject(user);
      }

      return Unauthorized();
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
      if (await _userManager.Users.AnyAsync(x => x.UserName == registerDto.UserName))
      {
        ModelState.AddModelError("username", "Username taken");
        return ValidationProblem();
      }

      if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
      {
        ModelState.AddModelError("email", "Email taken");
        return ValidationProblem();
      }

      var user = new User
      {
        Email = registerDto.Email,
        UserName = registerDto.UserName
      };

      var result = await _userManager.CreateAsync(user, registerDto.Password);

      if (result.Succeeded)
      {
        await SetRefreshToken(user);
        return CreateUserObject(user);
      }

      return BadRequest(result.Errors);
    }


    [Authorize]
    [HttpGet]
    public async Task<ActionResult<UserDto>> GetCurrentUser()
    {
      var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

      await SetRefreshToken(user);
      return CreateUserObject(user);
    }

    [Authorize]
    [HttpPost("refreshToken")]
    public async Task<ActionResult<UserDto>> RefreshToken()
    {
      var refreshToken = Request.Cookies["refreshToken"];
      var user = await _userManager.Users.Include(r => r.RefreshTokens)
        .FirstOrDefaultAsync(x => x.UserName == User.FindFirstValue(ClaimTypes.Name));

      if (user == null) return Unauthorized();

      var oldToken = user.RefreshTokens.SingleOrDefault(x => x.Token == refreshToken);

      if (oldToken != null && !oldToken.IsActive) return Unauthorized();

      if (oldToken != null) oldToken.Revoked = DateTime.UtcNow;

      return CreateUserObject(user);
    }

    private async Task SetRefreshToken(User user)
    {
      var refreshToken = _tokenService.GenerateRefreshToken();

      user.RefreshTokens.Add(refreshToken);
      await _userManager.UpdateAsync(user);

      var cookieOptions = new CookieOptions
      {
        HttpOnly = true,
        Expires = DateTime.UtcNow.AddDays(7)
      };

      Response.Cookies.Append("refreshToken", refreshToken.Token, cookieOptions);
    }
    private UserDto CreateUserObject(User user)
    {
      return new UserDto
      {
        Token = _tokenService.CreateToken(user),
        UserName = user.UserName
      };
    }
  }
}