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
                    <img src={product.image} alt={product.description} />
                    <h3>{product.description}</h3>
                    <p>Price: ${product.salePrice}</p>
                </div>
            ))}
        </div>
    );
});

export default ProductGrid;
