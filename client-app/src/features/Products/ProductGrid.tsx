import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import "./ProductGrid.css";
import LoadingComponent from "../../app/layout/LoadingComponent";

const ProductGrid = observer(() => {
  const { productStore } = useStore();

  useEffect(() => {
    productStore.loadProducts();
  }, [productStore]);

  if (productStore.loadingInitial)
    return <LoadingComponent content="Loading products..." />;

  return (
    <div className="product-grid">
      {productStore.products.length > 0 ? (
        productStore.products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.description}
            />
            <h3 className="product-description">{product.description}</h3>
            <p className="product-price">
              Price:{" "}
              {product.salePrice
                .toLocaleString("en-ZA", { style: "currency", currency: "ZAR" })
                .replace("ZAR", "")}
            </p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
});

export default ProductGrid;
