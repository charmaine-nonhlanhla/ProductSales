import { observer } from 'mobx-react-lite';
import './ProductsPage.css';
import ProductGrid from './ProductGrid';

export default observer(function ProductsPage() {
    return (
        <div className="productspage-background">
            <div className="productspage-container">
                <div className="productspage-content">
                    <h1 className="productspage-header">Products</h1>
                    <ProductGrid />
                </div>
            </div>
        </div>
    );
});
