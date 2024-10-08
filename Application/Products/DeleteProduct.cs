using MediatR;
using Persistence;

namespace Application.Products
{
  public class DeleteProduct
  {
    public class Command : IRequest
    {
      public int Id { get; set; }
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
        var product = await _context.Products.FindAsync(request.Id);

        _context.Remove(product);

        await _context.SaveChangesAsync();
      }
    }
  }
}