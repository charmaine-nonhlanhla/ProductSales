using Application.ProductSales;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class ProductSalesController : BaseApiController
  {
    [HttpGet]
    public async Task<ActionResult<List<ProductSale>>> GetProductSales()
    {
      return await Mediator.Send(new SaleList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProductSale>> GetProductSale(int id)
    {
      return await Mediator.Send(new SaleDetails.Query { SaleId = id });
    }
  }
}