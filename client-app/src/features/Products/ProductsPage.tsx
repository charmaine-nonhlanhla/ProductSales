import { useState } from "react";
import { observer } from "mobx-react-lite";
import "./ProductsPage.css";
import ProductGrid from "./ProductGrid";

export default observer(function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="productspage-background">
      <div className="productspage-container">
        <div className="productspage-content">
          <input
            className="productspage-search"
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <ProductGrid searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
});
