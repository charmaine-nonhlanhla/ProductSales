import { observer } from "mobx-react-lite";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export default observer(function HomePage() {
  const navigate = useNavigate();

  const viewProducts = () => {
    navigate("/products");
  };

  const viewProductSales = () => {
    navigate("/sales");
  };

  return (
    <div className="homepage-background">
      <div className="homepage-container">
        <div className="homepage-content">
          <h1 className="homepage-header">
            Freshly packed fruits and vegetables await!
          </h1>
          <p className="homepage-paragraph">
            Explore our vibrant selection of farm-fresh fruits and vegetables.
            Whether you are looking for crisp greens, juicy berries, or seasonal
            produce, we have everything you need to create healthy and delicious
            meals!
          </p>
          <button className="product-view-button" onClick={viewProducts}>
            View Products
          </button>
          <button className="sales-view-button" onClick={viewProductSales}>
            View Sales Figures
          </button>
        </div>
      </div>
    </div>
  );
});
