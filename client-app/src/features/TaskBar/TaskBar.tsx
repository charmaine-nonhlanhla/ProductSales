import { Container } from "semantic-ui-react";
import { GoHome } from "react-icons/go";
import { VscSettingsGear } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import { IoBarChartSharp } from "react-icons/io5";
import { GiFruitBowl } from "react-icons/gi";
import { useStore } from "../../app/stores/store";
import { Link } from "react-router-dom";
import "../TaskBar/TaskBar.css"

export const Taskbar = () => {
  const {
    userStore: { logout },
  } = useStore();

  const handleLogoutClick = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <div className="left-column">
      <Container>
        <div className="logo-container"></div>
        <Link to="/">
          <div className="home-element">
            <GoHome className="home-icon" />
            <span className="home-text">Home</span>
          </div>
        </Link>
        <Link to="/products">
          <div className="products-element">
            <GiFruitBowl className="products-icon" />
            <span className="products-text">Products</span>
          </div>
        </Link>
        <Link to="/sales">
          <div className="sales-element">
            <IoBarChartSharp className="sales-icon" />
            <span className="sales-text">Product Sales History</span>
          </div>
        </Link>
        <Link to="/management">
          <div className="management-element">
            <VscSettingsGear className="management-icon" />
            <span className="management-text">Product Management</span>
          </div>
        </Link>
        <div className="logout-element" onClick={handleLogoutClick}>
          <FiLogOut className="logout-icon" />
          <span className="logout-text">Logout</span>
        </div>
      </Container>
    </div>
  );
};
