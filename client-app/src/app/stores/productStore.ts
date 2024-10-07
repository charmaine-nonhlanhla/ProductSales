import { makeAutoObservable } from "mobx";
import { Product } from "../models/products";
import agent from "../api/agent";
import { ProductSale } from "../models/productSales";

export default class ProductStore {
    products: Product[] = [];
    sales: ProductSale[] = [];
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
            this.products = products;
        } catch (error) {
            console.log(error);
        } finally {
          this.setLoadingInitial(false);
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

    loadSales = async () => {
      this.setLoadingInitial(true);
      try {
          const sales = await agent.Products.SalesList();
          this.sales = sales;
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoadingInitial(false);
      }
    }

}