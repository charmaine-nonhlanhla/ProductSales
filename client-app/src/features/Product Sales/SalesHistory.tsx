import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import "./SalesHistory.css";
import React from "react";

const SalesHistory = observer(() => {
  const { productStore } = useStore();
  const [expandedProducts, setExpandedProducts] = useState<string[]>([]);

  useEffect(() => {
    productStore.loadSales();
  }, [productStore]);

  if (productStore.loadingInitial) return <div>Loading sales history...</div>;

  const groupedSales = productStore.sales.reduce((acc, sale) => {
    const productName = sale.product?.description || "Unknown Product";
    if (!acc[productName]) acc[productName] = [];
    acc[productName].push(sale);
    return acc;
  }, {} as Record<string, typeof productStore.sales>);

  const calculateTotalQuantity = (sales: typeof productStore.sales) => {
    return sales.reduce((total, sale) => total + sale.saleQty, 0);
  };

  const calculateDateRange = (sales: typeof productStore.sales) => {
    const dates = sales.map((sale) => new Date(sale.saleDate));
    const earliest = new Date(Math.min(...dates.map((d) => d.getTime())));
    const latest = new Date(Math.max(...dates.map((d) => d.getTime())));
    return `${earliest.toLocaleDateString()} - ${latest.toLocaleDateString()}`;
  };

  const calculateTotalPrice = (sales: typeof productStore.sales) => {
    return sales
      .reduce((total, sale) => total + sale.salePrice * sale.saleQty, 0)
      .toFixed(2);
  };

  const toggleProduct = (productName: string) => {
    setExpandedProducts((prev) =>
      prev.includes(productName)
        ? prev.filter((p) => p !== productName)
        : [...prev, productName]
    );
  };

  return (
    <div className="salespage-background">
      <table className="sales-table">
        <thead className="sales-table-header">
          <tr className="sale-table-properties">
            <th>Product</th>
            <th>Total Quantity Sold</th>
            <th>Sale Date Range</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedSales).map((productName) => (
            <React.Fragment key={productName}>
              <tr
                className="parent-row"
                onClick={() => toggleProduct(productName)}
                style={{ cursor: "pointer", fontWeight: "bold" }}
              >
                <td>{productName}</td>
                <td>{calculateTotalQuantity(groupedSales[productName])}</td>
                <td>{calculateDateRange(groupedSales[productName])}</td>
                <td>R{calculateTotalPrice(groupedSales[productName])}</td>
              </tr>

              {expandedProducts.includes(productName) &&
                groupedSales[productName].map((sale) => (
                  <tr key={sale.saleId} className="child-row">
                    <td>{sale.product?.description || "Unknown Product"}</td>
                    <td>{sale.saleQty}</td>
                    <td>{new Date(sale.saleDate).toLocaleDateString()}</td>
                    <td>R{sale.salePrice.toFixed(2)}</td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default SalesHistory;
