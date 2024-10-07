using Domain;
using MediatR;
using Persistence;

namespace Application.Products
{
  public class ProductDetails
  {
    public class Query : IRequest<Product>
    {
      public int Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Product>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context;

      }
      public async Task<Product> Handle(Query request, CancellationToken cancellationToken)
      {
        return await _context.Products.FindAsync(request.Id);
      }
    }
  }
}