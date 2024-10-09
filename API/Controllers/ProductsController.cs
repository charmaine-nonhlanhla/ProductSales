using System.Diagnostics;
using Application.Products;
using Application.Products.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
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

    [HttpPost]
    public async Task<IActionResult> CreateProduct(Product product)
    {
      await Mediator.Send(new CreateProduct.Command { Product = product });

      return Ok();
    }

    [HttpPut("id")]
    public async Task<IActionResult> EditProduct(int id, Product product)
    {
      product.Id = id;

      await Mediator.Send(new EditProduct.Command { Product = product });

      return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
      await Mediator.Send(new DeleteProduct.Command { Id = id });
      return Ok();
    }
  }
}
