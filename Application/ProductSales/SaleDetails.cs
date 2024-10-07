using Domain;
using MediatR;
using Persistence;

namespace Application.ProductSales
{
  public class SaleDetails
  {
    public class Query : IRequest<ProductSale>
    {
      public int SaleId { get; set; }
    }

    public class Handler : IRequestHandler<Query, ProductSale>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context;

      }
      public async Task<ProductSale> Handle(Query request, CancellationToken cancellationToken)
      {
        return await _context.ProductSales.FindAsync(request.SaleId);
      }
    }

  }
}