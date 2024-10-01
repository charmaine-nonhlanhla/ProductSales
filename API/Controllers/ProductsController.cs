using Application.Products;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await Mediator.Send(new ProductList.Query());
        }

        [HttpGet("{id}")] 
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await Mediator.Send(new ProductDetails.Query{Id = id});
        }
    }
}