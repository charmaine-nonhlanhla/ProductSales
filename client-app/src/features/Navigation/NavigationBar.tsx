import "./NavigationBar.css";
import { IoIosArrowDown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-content">
        <div className="navigation-menu">
          <div className="navigation-menu-item">
            <h1 className="navigation-title">
              Fresh Harvest Market
            </h1>
          </div>
          <div className="navigation-link">
            <Link to="/home" className="home-navigation-link">
              Home
            </Link>

            <Link to="/products" className="books-navigation-link">
              Shop <IoIosArrowDown className="dropdown-icon" />
            </Link>

            <Link to="/about" className="about-navigation-link">
              About
            </Link>

            <Link to="/contact" className="contact-navigation-link">
              Contact
            </Link>
          </div>
        </div>
        <div className="shopping-cart">
          <FiShoppingCart className="cart-icon" />
        </div>
      </div>
    </div>
  );
};
