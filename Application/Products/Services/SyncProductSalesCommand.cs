using MediatR;

namespace Application.Products.Services
{
    public class SyncAllProductSalesCommand : IRequest<string>
    {
        public class Handler : IRequestHandler<SyncAllProductSalesCommand, string>
        {
            private readonly ProductService _productService;

            public Handler(ProductService productService)
            {
                _productService = productService; 
            }

            public async Task<string> Handle(SyncAllProductSalesCommand request, CancellationToken cancellationToken)
            {
                await _productService.SyncAllProductSalesAsync(); 
                return "All product sales synced successfully.";
            }
        }
    }
}
