// import { useEffect, useState } from "react";
// import { observer } from "mobx-react-lite";
// import { useStore } from "../../app/stores/store";
// import LoadingComponent from "../../app/layout/LoadingComponent";
// import "./ProductManagement.css"; // Make sure to create this CSS file for styling

// const ProductManagement = observer(() => {
//   const { productStore } = useStore();
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [newProduct, setNewProduct] = useState({ description: "", salePrice: "", image: "" });

//   useEffect(() => {
//     productStore.loadProducts();
//   }, [productStore]);

//   if (productStore.loadingInitial) return <LoadingComponent content="Loading products..." />;

//   const handleAddProduct = () => {
//     productStore.addProduct(newProduct); // Assuming this method is defined in your store
//     setNewProduct({ description: "", salePrice: "", image: "" }); // Reset form
//   };

//   const handleEditProduct = (product) => {
//     setEditingProduct(product);
//     setNewProduct({ description: product.description, salePrice: product.salePrice, image: product.image });
//   };

//   const handleUpdateProduct = () => {
//     productStore.updateProduct({ ...editingProduct, ...newProduct }); // Assuming this method is defined in your store
//     setEditingProduct(null);
//     setNewProduct({ description: "", salePrice: "", image: "" }); // Reset form
//   };

//   const handleDeleteProduct = (productId) => {
//     productStore.deleteProduct(productId); // Assuming this method is defined in your store
//   };

//   return (
//     <div className="product-management background">
//       <div className="productmanagement-container">
//         <h2>Product Management</h2>
//         <div>
//           <input
//             type="text"
//             placeholder="Description"
//             value={newProduct.description}
//             onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
//           />
//           <input
//             type="number"
//             placeholder="Sale Price"
//             value={newProduct.salePrice}
//             onChange={(e) => setNewProduct({ ...newProduct, salePrice: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={newProduct.image}
//             onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
//           />
//           {editingProduct ? (
//             <button onClick={handleUpdateProduct}>Update Product</button>
//           ) : (
//             <button onClick={handleAddProduct}>Add Product</button>
//           )}
//         </div>
//         <table className="product-table">
//           <thead>
//             <tr>
//               <th>Description</th>
//               <th>Sale Price</th>
//               <th>Image</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {productStore.products.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.description}</td>
//                 <td>R{product.salePrice}</td>
//                 <td><img src={product.image} alt={product.description} width={50} /></td>
//                 <td>
//                   <button onClick={() => handleEditProduct(product)}>Edit</button>
//                   <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// });

// export default ProductManagement;
