import { observer } from "mobx-react-lite";
import './ProductsPage.css'

export default observer(function ProductsPage() {


    // if (productStore.loadingInitial) return <LoadingComponent content='Loading app...' />

    return (
        <div className="productspage-background">
            <div className="productspage-container">
                <div className="productspage-content">
                    <h1 className="productspage-header">Products </h1>
                    <p className="productspage-paragraph">Products</p>
                </div>
            </div>
        </div>
    )
})