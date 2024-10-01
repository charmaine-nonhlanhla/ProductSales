using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Products.Any() && context.ProductSales.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Title = "Diary of a Wimpy Kid",
                    Description = "In No Brainer, book 18 of the Diary of a Wimpy Kid series from #1 international bestselling author Jeff Kinney, it's up to Greg to save his school before it's shuttered for good.",
                    SalePrice = 29.99m,
                    Category = "Childrens Books",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\BookStore\ChildrensBooks\Diary of a Wimpy Kid.jpg"
                },
                new Product
                {
                    Title = "Gabby's Dollhouse",
                    Description = "It's time for a Dollhouse Delivery! When Gabby opens the Meow Meow Mailbox she finds an invitation to MerCat's Spa Day Party in the dollhouse. With the help of her magic cat ears, Gabby and Pandy Paws shrink down and join their friends in the dollhouse to get ready. But when MerCat's colour and sparkle fade away, can the friends help her get back her glow in time for the party? Gabby and the gang get creative and whip up some super squishy face masks, special soap and a magical item all the way from Mermaidlantis that bring the sparkle back to the spa day!",
                    SalePrice = 39.99m,
                    Category = "Childrens Books",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\BookStore\ChildrensBooks\Gabby's Dollhouse.jpg"
                },
                  new Product
                {
                    Title = "In the Jungle",
                    Description = "Little ones can join in the fun In the Jungle by pulling out the sliders, pushing up the tabs and counting all the animals! How many lazy lions are yawning? How many zebras are skipping?",
                    SalePrice = 49.99m,
                    Category = "Childrens Books",
                    Image = @"C:\Users\CMogotlane.SINGULAR\PRODUCTSALES\ProductSales\client-app\src\assets\BookStore\ChildrensBooks\In the Jungle.jpg"
                }
            };

            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync(); 

            var productSales = new List<ProductSale>
            {
                new ProductSale
                {
                    ProductId = 1, 
                    SalePrice = 29.99m,
                    SaleQty = 2,
                    SaleDate = DateTime.Now.AddDays(-5) 
                },
                new ProductSale
                {
                    ProductId = 2, 
                    SalePrice = 39.99m,
                    SaleQty = 1,
                    SaleDate = DateTime.Now.AddDays(-3) 
                },
                new ProductSale
                {
                    ProductId = 3, 
                    SalePrice = 49.99m,
                    SaleQty = 5,
                    SaleDate = DateTime.Now.AddDays(-1) 
                }

            };

            await context.ProductSales.AddRangeAsync(productSales);
            await context.SaveChangesAsync(); 
        }
    }
}
