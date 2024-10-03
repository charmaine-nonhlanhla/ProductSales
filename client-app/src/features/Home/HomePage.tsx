import { observer } from "mobx-react-lite";
import './HomePage.css';

export default observer(function HomePage() {
    return (
        <div className="homepage-background">
            <div className="homepage-container">
                <div className="homepage-content">
                    <h1 className="homepage-header">Fresh Fruits & Vegetables Await!</h1>
                    <p className="homepage-paragraph">Explore our vibrant selection of farm-fresh fruits and vegetables. Whether you’re looking for crisp greens, juicy berries, or seasonal produce, we have everything you need to create healthy and delicious meals!</p>
                    {/* <img src={homepageImage} alt="Home Page Image" className="homepageImage" /> */}
                </div>
            </div>
        </div>
    );
});