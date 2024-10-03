using Application.Products;
using Application.Products.Services;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class ProductsController : BaseApiController
  {
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
      _productService = productService;
    }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
      return await Mediator.Send(new ProductList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
      return await Mediator.Send(new ProductDetails.Query { Id = id });
    }

    [HttpGet("sync-products")]
    public async Task<IActionResult> SyncProducts()
    {
      await Mediator.Send(new SyncProductsCommand());
      return Ok();
    }

    [HttpPost("sync-product-sales")]
    public async Task<IActionResult> SyncAllProductSales()
    {
      var result = await Mediator.Send(new SyncAllProductSalesCommand());
      return Ok(result);
    }
  }
}
