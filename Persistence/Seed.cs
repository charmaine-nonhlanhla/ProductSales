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
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Apples.jpg"
                },
                new Product
                {
                    Description = "Oranges",
                    SalePrice = 11.57m,
                    Category = "Fruit",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Oranges.jpg"
                },
                new Product
                {
                    Description = "Potatoes",
                    SalePrice = 9.99m,
                    Category = "Vegetable",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Vegetables\Potatoes.jpg"
                },
                new Product
                {
                    Description = "Spinach",
                    SalePrice = 12.00m,
                    Category = "Vegetable",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Vegetables\Spinach.jpg"
                },
                new Product
                {
                    Description = "Grapes",
                    SalePrice = 19.99m,
                    Category = "Fruit",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Grapes.jpg"
                },
                new Product
                {
                    Description = "Strawberries",
                    SalePrice = 9.99m,
                    Category = "Fruit",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Strawberries.jpg"
                },
                new Product
                {
                    Description = "Plums",
                    SalePrice = 25.00m,
                    Category = "Fruit",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Plums.jpg"
                },
                new Product
                {
                    Description = "Beans",
                    SalePrice = 16.00m,
                    Category = "Vegetable",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Vegetables\Beans.jpg"
                },
                new Product
                {
                    Description = "Leeks",
                    SalePrice = 5.50m,
                    Category = "Vegetable",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Vegetables\Leeks.jpg"
                },
                new Product
                {
                    Description = "Onions",
                    SalePrice = 10.50m,
                    Category = "Vegetable",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Vegetables\Onions.jpg"
                },
                new Product
                {
                    Description = "Peppers",
                    SalePrice = 25.99m,
                    Category = "Vegetable",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Vegetables\Peppers.jpg"
                },
                new Product
                {
                    Description = "Bananas",
                    SalePrice = 14.50m,
                    Category = "Fruit",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Bananas.jpg"
                },
                new Product
                {
                    Description = "Pears",
                    SalePrice = 11.00m,
                    Category = "Fruit",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Pears.jpg"
                },
                new Product
                {
                    Description = "Mangos",
                    SalePrice = 25.00m,
                    Category = "Fruit",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Mangos.jpg"
                },
                new Product
                {
                    Description = "Broccoli",
                    SalePrice = 16.20m,
                    Category = "Vegetable",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Vegetables\Broccoli.jpg"
                },
                new Product
                {
                    Description = "Cabbage",
                    SalePrice = 11.00m,
                    Category = "Vegetable",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Vegetables\Cabbage.jpg"
                },
                new Product
                {
                    Description = "Beetroot",
                    SalePrice = 25.00m,
                    Category = "Vegetable",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Vegetables\Beetroot.jpg"
                },
                new Product
                {
                    Description = "Apricot",
                    SalePrice = 16.20m,
                    Category = "Fruit",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Apricot.jpg"
                },
                new Product
                {
                    Description = "Figs",
                    SalePrice = 25.00m,
                    Category = "Fruit",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Figs.jpg"
                },
                new Product
                {
                    Description = "Cherries",
                    SalePrice = 16.20m,
                    Category = "Fruit",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\ProductStore\Fruits\Cherries.jpg"
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
