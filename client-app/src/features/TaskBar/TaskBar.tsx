import { Container } from 'semantic-ui-react';
import { GoHome } from "react-icons/go";
import { VscSettingsGear } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import { IoBarChartSharp } from "react-icons/io5";
import { useStore } from '../../app/stores/store';
import './Taskbar.css';
import { Link, useNavigate } from 'react-router-dom';  

export const Taskbar = () => {
  const { userStore: { logout } } = useStore();
  const navigate = useNavigate();  

  const handleLogoutClick = () => {
    logout();
    navigate('/logout');  
  };

  return (
    <div className="left-column">
      <Container>
        <div className="logo-container">
        </div>
        <Link to='/'>
          <div className="home-element">
            <GoHome className="home-icon"/>
            <span className="home-text">Home</span>
          </div>
        </Link>
        <Link to='/sales'>
          <div className="imageupload-element">
            <IoBarChartSharp className="image-icon"/>
            <span className="image-text">Product Sales History</span>
          </div>
        </Link>
        <Link to='/library'>
          <div className="library-element">
            <VscSettingsGear className="library-icon"/>
            <span className="library-text">Product Management</span>
          </div>
        </Link>
        <div 
          className="logout-element"
          onClick={handleLogoutClick} 
        >
          <FiLogOut className="logout-icon" />
          <span className="logout-text">Logout</span>
        </div>
      </Container>
    </div>        
  );
};
