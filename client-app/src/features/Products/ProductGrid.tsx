import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';
import './ProductGrid.css'; 
import LoadingComponent from '../../app/layout/LoadingComponent';

const ProductGrid = observer(() => {
    const { productStore } = useStore();

    useEffect(() => {
        productStore.loadProducts();
    }, [productStore]);

    if (productStore.loadingInitial) return <LoadingComponent content="Loading products..." />;

    return (
        <div className="product-grid">
            {productStore.products.map((product) => (
                <div className="product-card" key={product.id}>
                    <h3 className="product-description">{product.description}</h3>
                    <img className="product-image" width={300} src={product.image} alt={product.description} />
                    <p className="product-price">Price: R{product.salePrice}</p>
                </div>
            ))}
        </div>
    );
});

export default ProductGrid;
