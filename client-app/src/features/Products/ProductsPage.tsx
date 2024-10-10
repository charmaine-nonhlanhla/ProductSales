import { observer } from "mobx-react-lite";
import ProductGrid from "./ProductGrid";

export default observer(function ProductsPage() {
  return (
    <div className="productspage-background">
      <div className="productspage-container">
        <div className="productspage-content">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
});
