import { makeAutoObservable } from "mobx";
import { Product } from "../models/products";
import agent from "../api/agent";
import { ProductSale } from "../models/productSales";
import { store } from "./store";

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
            const sales = await agent.Products.salesList();
            this.sales = sales;
        } catch (error) {
            console.log(error);
        } finally {
            this.setLoadingInitial(false);
        }
    }

  //   // Method to add a new product
  //   addProduct = async (product: Product) => {
  //       this.setLoading(true);
  //       const user = store.userStore!.user;
  //       try {
  //           const response = await agent.Products.addProduct(product);
  //           this.products.push(response); // Assuming response contains the added product
  //       } catch (error) {
  //           console.log(error);
  //       } finally {
  //           this.setLoading(false);
  //       }
  //   }

  //   createActivity = async (activity: ActivityFormValues) => {
  //     const user = store.userStore!.user;
  //     const profile = new Profile(user!);
  //     try {
  //         await agent.Activities.create(activity);
  //         const newActivity = new Activity(activity);
  //         newActivity.hostUsername = user!.username;
  //         newActivity.attendees = [profile];
  //         this.setActivity(newActivity);
  //         runInAction(() => this.selectedActivity = newActivity);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  // updateActivity = async (activity: ActivityFormValues) => {
  //     try {
  //         await agent.Activities.update(activity);
  //         runInAction(() => {
  //             if (activity.id) {
  //                 let updatedActivity = { ...this.getActivity(activity.id), ...activity };
  //                 this.activityRegistry.set(activity.id, updatedActivity as Activity);
  //                 this.selectedActivity = updatedActivity as Activity;
  //             }
  //         })
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  // deleteActivity = async (id: string) => {
  //     this.loading = true;
  //     try {
  //         await agent.Activities.delete(id);
  //         runInAction(() => {
  //             this.activityRegistry.delete(id);
  //             this.loading = false;
  //         })
  //     } catch (error) {
  //         console.log(error);
  //         runInAction(() => {
  //             this.loading = false;
  //         })
  //     }
  // }

    // // Method to edit an existing product
    // editProduct = async (id: number, product: Product) => {
    //     this.setLoading(true);
    //     try {
    //         await agent.Products.updateProduct(id, product);
    //         const index = this.products.findIndex(p => p.id === id);
    //         if (index !== -1) {
    //             this.products[index] = { ...this.products[index], ...product }; // Update the existing product
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         this.setLoading(false);
    //     }
    // }

    // // Method to delete a product
    // deleteProduct = async (id: number) => {
    //     this.setLoading(true);
    //     try {
    //         await agent.Products.deleteProduct(id);
    //         this.products = this.products.filter(p => p.id !== id); // Remove deleted product from the list
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         this.setLoading(false);
    //     }
    // }

    setLoading = (state: boolean) => {
        this.loading = state;
    }
}
