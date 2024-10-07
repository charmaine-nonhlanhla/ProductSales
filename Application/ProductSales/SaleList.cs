using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ProductSales
{
  public class SaleList
  {
    public class Query : IRequest<List<ProductSale>> { }

    public class Handler : IRequestHandler<Query, List<ProductSale>>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context;
      }
      public async Task<List<ProductSale>> Handle(Query request, CancellationToken cancellationToken)
      {
        return await _context.ProductSales.Include(ps => ps.Product).ToListAsync();
      }
    }
  }
}