import { makeAutoObservable, runInAction } from "mobx";
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
      const products = await agent.Products.productList();
      this.products = products;
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoadingInitial(false);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  selectProduct = (id: number) => {
    this.selectedProduct = this.products.find((p) => p.id === id);
  };

  cancelSelectedProduct = () => {
    this.selectedProduct = undefined;
  };

  loadSales = async () => {
    this.setLoadingInitial(true);
    try {
      const sales = await agent.ProductSales.salesList();
      this.sales = sales;
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoadingInitial(false);
    }
  };

  addProduct = async (product: Product) => {
    this.setLoading(true);
    try {
      const response = await agent.Products.addProduct(product);
      runInAction(() => {
        this.products.push(response);
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  };

  editProduct = async (id: number, product: Product) => {
    this.setLoading(true);
    try {
      await agent.Products.updateProduct(id.toString(), product);
      runInAction(() => {
        const index = this.products.findIndex((p) => p.id === id);
        if (index !== -1) {
          this.products[index] = { ...this.products[index], ...product };
          this.selectedProduct = this.products[index];
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  };

  deleteProduct = async (id: number) => {
    this.setLoading(true);
    try {
      await agent.Products.deleteProduct(id.toString()); // Convert number to string
      runInAction(() => {
        this.products = this.products.filter((p) => p.id !== id);
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  };

  syncProducts = async () => {
    this.setLoading(true);
    try {
      await agent.Products.syncProducts();
      await this.loadProducts();
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };
}
