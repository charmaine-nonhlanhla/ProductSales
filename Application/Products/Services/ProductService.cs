using System.Net.Http.Json;
using Application.Dtos;
using AutoMapper;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Products.Services
{
  public class ProductService
  {
    private readonly HttpClient _httpClient;
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public ProductService(HttpClient httpClient, DataContext context, IMapper mapper)
    {
      _mapper = mapper;
      _httpClient = httpClient;
      _context = context;
    }

    public async Task<List<ProductDto>> GetProductsFromExternalApiAsync()
    {
      var response = await _httpClient.GetAsync("https://singularsystems-tech-assessment-sales-api2.azurewebsites.net/products");
      response.EnsureSuccessStatusCode();

      var products = await response.Content.ReadFromJsonAsync<List<ProductDto>>();
      return products;
    }

    public async Task SyncProductsFromExternalApiAsync()
    {
      var externalProducts = await GetProductsFromExternalApiAsync();

      foreach (var productDto in externalProducts)
      {
        var existingProduct = await _context.Products.FindAsync(productDto.Id) ?? new Product { Id = productDto.Id };

        _mapper.Map(productDto, existingProduct);

        if (existingProduct.Id == 0)
        {
          _context.Products.Add(existingProduct);
        }


        await SyncProductSalesAsync(productDto.Id);
      }


      await _context.SaveChangesAsync();
    }

    public async Task SyncProductSalesAsync(int productId)
    {
      var salesResponse = await _httpClient.GetAsync($"https://singularsystems-tech-assessment-sales-api2.azurewebsites.net/product-sales?Id={productId}");
      if (!salesResponse.IsSuccessStatusCode)
      {
        throw new Exception($"Failed to fetch sales for product {productId}. Status code: {salesResponse.StatusCode}");
      }

      var sales = await salesResponse.Content.ReadFromJsonAsync<List<ProductSaleDto>>();

      if (sales == null || !sales.Any())
      {
        Console.WriteLine($"No sales data found for product {productId}.");
        return;
      }

      foreach (var saleDto in sales)
      {
        var existingSale = await _context.ProductSales.FindAsync(saleDto.Id) ?? new ProductSale();

        _mapper.Map(saleDto, existingSale);

        existingSale.ProductId = productId;

        if (existingSale.SaleId == 0)
        {
          _context.ProductSales.Add(existingSale);
        }
      }
      await _context.SaveChangesAsync();
    }

    public async Task SyncAllProductSalesAsync()
    {
      var products = await _context.Products.ToListAsync(); 

      foreach (var product in products)
      {
        await SyncProductSalesAsync(product.Id); 
      }

    }
  }
}
