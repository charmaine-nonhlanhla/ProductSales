using Application.Core;
using Application.Products;
using Application.Products.Services;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
  public static class ApplicationServiceExtensions
  {
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
      services.AddEndpointsApiExplorer();
      services.AddSwaggerGen();
      services.AddDbContext<DataContext>(opt =>
      {
        opt.UseSqlServer(config.GetConnectionString("DefaultConnection"));
      });
      services.AddCors(opt =>
      {
        opt.AddPolicy("CorsPolicy", policy =>
              {
                policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000").WithExposedHeaders("WWW-Authenticate");
              });
      });
      services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(ProductList.Handler).Assembly));
      services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(SyncProductsCommand.Handler).Assembly));
      services.AddScoped<Application.Products.Services.ProductService>();
      services.AddHttpClient();
      services.AddAutoMapper(typeof(MappingProfiles).Assembly);

      return services;
    }
  }
}