namespace Application.Dtos
{
  public class ProductSaleDto
  {
    public int Id { get; set; }
    public decimal SalePrice { get; set; }
    public int SaleQty { get; set; }
    public DateTime SaleDate { get; set; }
  }
}