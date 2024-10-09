import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import "./ProductGrid.css";
import LoadingComponent from "../../app/layout/LoadingComponent";

const ProductGrid = observer(({ searchTerm }: { searchTerm: string }) => {
  const { productStore } = useStore();

  useEffect(() => {
    productStore.loadProducts();
  }, [productStore]);

  if (productStore.loadingInitial)
    return <LoadingComponent content="Loading products..." />;

  const filteredProducts = productStore.products.filter((product) =>
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-description">{product.description}</h3>
            <img
              className="product-image"
              width={300}
              src={product.image}
              alt={product.description}
            />
            <p className="product-price">Price: R{product.salePrice}</p>
          </div>
        ))
      ) : (
        <p>No products found matching your search.</p>
      )}
    </div>
  );
});

export default ProductGrid;
