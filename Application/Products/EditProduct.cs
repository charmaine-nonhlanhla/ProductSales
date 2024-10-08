using System.Reflection.Metadata;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Products
{
  public class EditProduct
  {
    public class Command : IRequest
    {
      public Product Product { get; set; }
    }

    public class Handler : IRequestHandler<Command>
    {
      private readonly DataContext _context;
    private readonly IMapper _mapper;
      public Handler(DataContext context, IMapper mapper)
      {
      _mapper = mapper;
        _context = context;

      }
      public async Task Handle(Command request, CancellationToken cancellationToken)
      {
        var product = await _context.Products.FindAsync(request.Product.Id);

        _mapper.Map(request.Product, product);

        await _context.SaveChangesAsync();
      
      }
    }
  }
}