using MediatR;

namespace Application.Products.Services
{
  public class SyncProductsCommand : IRequest<string>
  {
    public class Handler : IRequestHandler<SyncProductsCommand, string>
    {
      private readonly ProductService _productService;
      public Handler(ProductService productService)
      {
        _productService = productService;

      }
      public async Task<string> Handle(SyncProductsCommand request, CancellationToken cancellationToken)
      {
        await _productService.SyncProductsFromExternalApiAsync();
        return "Products synced successfully.";
      }
    }
  }
}