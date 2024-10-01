using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductSale> ProductSales { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .Property(p => p.SalePrice)
                .HasColumnType("decimal(18, 2)") 
                .HasPrecision(18, 2); 

             modelBuilder.Entity<ProductSale>()
            .HasKey(ps => ps.SaleId);   

            modelBuilder.Entity<ProductSale>()
                .Property(ps => ps.SalePrice)
                .HasColumnType("decimal(18, 2)") 
                .HasPrecision(18, 2);

            modelBuilder.Entity<ProductSale>()
                .HasOne(ps => ps.Product)
                .WithMany()
                .HasForeignKey(ps => ps.ProductId);
        }
    }
}