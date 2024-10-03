import { makeAutoObservable } from "mobx";
import { Product } from "../models/products";
import agent from "../api/agent";

export default class ProductStore {
    products: Product[] = [];
    selectedProduct: Product | undefined = undefined;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
        this.loadProducts();
    }

    loadProducts = async () => {
        this.setLoadingInitial(true);
        try {
            const products = await agent.Products.Productlist();
        } catch (error) {
            console.log(error)
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectProduct = (id: number) => {
        this.selectedProduct = this.products.find(p => p.id === id);
    }

    cancelSelectedProduct = () => {
        this.selectedProduct = undefined;
    }

}