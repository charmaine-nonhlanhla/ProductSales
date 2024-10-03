using Application.Dtos;
using AutoMapper;
using Domain;

namespace Application.Core
{
  public class MappingProfiles : Profile
  {
    public MappingProfiles()
    {
      CreateMap<ProductDto, Product>();
      CreateMap<Product, ProductDto>();

      CreateMap<ProductSaleDto, ProductSale>();
      CreateMap<ProductSale, ProductSaleDto>();
    }
  }
}