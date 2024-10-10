using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<User> userManager)
        {

          if (!userManager.Users.Any())
          {
            var users = new List<User>
            {
              new User{UserName = "Ruth", Email = "ruth@test.com"},
              new User{UserName = "Seth", Email = "seth@test.com"},
              new User{UserName = "Astrid", Email = "astrid@test.com"},
            };

            foreach (var user in users)
            {
              await userManager.CreateAsync(user, "Pa$$w0rd");
            }
          }


            if (context.Products.Any() && context.ProductSales.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Description = "Apples",
                    SalePrice = 15.33m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/10256309/pexels-photo-10256309.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Oranges",
                    SalePrice = 11.57m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Potatoes",
                    SalePrice = 9.99m,
                    Category = "Vegetable",
                    Image = "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Spinach",
                    SalePrice = 12.00m,
                    Category = "Vegetable",
                    Image = "https://images.pexels.com/photos/3298064/pexels-photo-3298064.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Grapes",
                    SalePrice = 19.99m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Strawberries",
                    SalePrice = 9.99m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Plums",
                    SalePrice = 25.00m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/248440/pexels-photo-248440.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Beans",
                    SalePrice = 16.00m,
                    Category = "Vegetable",
                    Image = "https://images.pexels.com/photos/4815956/pexels-photo-4815956.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Leeks",
                    SalePrice = 5.50m,
                    Category = "Vegetable",
                    Image = "https://images.pexels.com/photos/4935722/pexels-photo-4935722.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Onions",
                    SalePrice = 10.50m,
                    Category = "Vegetable",
                    Image = "https://images.pexels.com/photos/2920402/pexels-photo-2920402.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Peppers",
                    SalePrice = 25.99m,
                    Category = "Vegetable",
                    Image = "https://images.pexels.com/photos/48840/pexels-photo-48840.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Bananas",
                    SalePrice = 14.50m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Pears",
                    SalePrice = 11.00m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/2067574/pexels-photo-2067574.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Mangos",
                    SalePrice = 25.00m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/2363345/pexels-photo-2363345.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Broccoli",
                    SalePrice = 16.20m,
                    Category = "Vegetable",
                    Image = "https://images.pexels.com/photos/3722583/pexels-photo-3722583.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Cabbage",
                    SalePrice = 11.00m,
                    Category = "Vegetable",
                    Image = "https://images.pexels.com/photos/3283450/pexels-photo-3283450.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Beetroot",
                    SalePrice = 25.00m,
                    Category = "Vegetable",
                    Image = "https://images.pexels.com/photos/7511800/pexels-photo-7511800.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Apricot",
                    SalePrice = 16.20m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/4058752/pexels-photo-4058752.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Figs",
                    SalePrice = 25.00m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/33791/fig-sliced-plate-wooden-table.jpg?auto=compress&cs=tinysrgb&h=350"
                },
                new Product
                {
                    Description = "Cherries",
                    SalePrice = 16.20m,
                    Category = "Fruit",
                    Image = "https://images.pexels.com/photos/966416/pexels-photo-966416.jpeg"
                }
            };

            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();

            var apples = await context.Products.FirstOrDefaultAsync(p => p.Description == "Apples");
            var oranges = await context.Products.FirstOrDefaultAsync(p => p.Description == "Oranges");


            var productSales = new List<ProductSale>
    {
        new ProductSale
        {
            ProductId = apples.Id,
            SalePrice = apples.SalePrice,
            SaleQty = 5,
            SaleDate = DateTime.Now.AddDays(-10)
        },
        new ProductSale
        {
            ProductId = oranges.Id,
            SalePrice = oranges.SalePrice,
            SaleQty = 3,
            SaleDate = DateTime.Now.AddDays(-8)
        }

    };

            await context.ProductSales.AddRangeAsync(productSales);
            await context.SaveChangesAsync();
        }
    }
}
