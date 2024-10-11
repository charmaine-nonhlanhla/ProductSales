import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import LoadingComponent from "../../app/layout/LoadingComponent";
import "./ProductManagement.css";

interface Product {
  id: number;
  description: string;
  salePrice: number;
  image: string;
  category: string;
}

const ProductManagement = observer(() => {
  const { productStore } = useStore();
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    description: "",
    salePrice: 0,
    image: "",
    category: "default",
  });

  useEffect(() => {
    productStore.loadProducts();
  }, [productStore]);

  if (productStore.loadingInitial)
    return <LoadingComponent content="Loading products..." />;

  const handleAddProduct = async () => {
    const productToAdd: Product = {
      ...newProduct,
      id: 0,
    };
    await productStore.addProduct(productToAdd);
    await productStore.loadProducts();

    setNewProduct({
      id: 0,
      description: "",
      salePrice: 0,
      image: "",
      category: "default",
    });
  };

  const handleDeleteProduct = async (productId: number) => {
    productStore.deleteProduct(productId);
    productStore.loadProducts();
  };

  return (
    <div className="product-management-background">
      <div className="productmanagement-container">
        <table className="product-table">
          <thead className="management-table-header">
            <tr className="management-table-properties">
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Sale Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="add-product-tbody">
            <tr>
              <td>
                <input
                  className="add-product-inputs"
                  type="text"
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <select
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                >
                  <option value="default" disabled hidden>
                    Category
                  </option>{" "}
                  <option value="Fruit">Fruit</option>
                  <option value="Vegetable">Vegetable</option>
                </select>
              </td>
              <td>
                <input
                  className="add-product-inputs"
                  type="text"
                  placeholder="Image URL"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="add-product-inputs"
                  type="number"
                  placeholder="Sale Price"
                  value={newProduct.salePrice}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      salePrice: parseFloat(e.target.value),
                    })
                  }
                />
              </td>
              <td>
                <button
                  className="add-product-button"
                  onClick={handleAddProduct}
                >
                  Add Product
                </button>
              </td>
            </tr>
            {productStore.products.map((product: Product) => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <img
                    className="product-management-image"
                    src={product.image}
                    alt={product.description}
                    width={50}
                  />
                </td>
                <td>R{typeof product.salePrice === 'number' ? product.salePrice.toFixed(2) : 'N/A'}</td>
                <td>
                  <button
                    className="delete-product-button"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default ProductManagement;
