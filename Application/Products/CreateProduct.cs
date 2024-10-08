using Domain;
using MediatR;
using Persistence;

namespace Application.Products
{
  public class CreateProduct
  {
    public class Command : IRequest
    {
      public Product Product { get; set; }
    }

    public class Handler : IRequestHandler<Command>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context;

      }

      public async Task Handle(Command request, CancellationToken cancellationToken)
      {
        _context.Products.Add(request.Product);

        await _context.SaveChangesAsync();
      }
    }
  }
}