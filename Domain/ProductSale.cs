namespace Domain
{
    public class ProductSale
    {
        public int SaleId { get; set; }  
        public Product Product { get; set; }
        public int ProductId { get; set; } 
        public decimal SalePrice { get; set; }
        public int SaleQty { get; set; }
        public DateTime SaleDate { get; set; }
    }
}