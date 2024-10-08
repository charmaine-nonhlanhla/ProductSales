using Microsoft.AspNetCore.Identity;

namespace Domain
{
  public class User : IdentityUser
  {
    public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
  }
}