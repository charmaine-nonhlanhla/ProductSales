import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SalesHistory = observer(() => {
  const { productStore } = useStore();

  useEffect(() => {
    productStore.loadSales();
  }, [productStore]);

  if (productStore.loadingInitial) return <div>Loading sales history...</div>;

  const chartData = productStore.sales.map((sale) => ({
    productName: sale.product?.description || "Unknown Product",
    quantitySold: sale.saleQty,
  }));

  return (
    <div className="salespage-background">
      <h2>Sales History</h2>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="productName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantitySold" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sale ID</th>
            <th>Product</th>
            <th>Sale Price</th>
            <th>Quantity Sold</th>
            <th>Sale Date</th>
          </tr>
        </thead>
        <tbody>
          {productStore.sales.map((sale) => (
            <tr key={sale.saleId}>
              <td>{sale.saleId}</td>
              <td>{sale.product?.description}</td>
              <td>{sale.salePrice.toFixed(2)}</td>
              <td>{sale.saleQty}</td>
              <td>{new Date(sale.saleDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default SalesHistory;
