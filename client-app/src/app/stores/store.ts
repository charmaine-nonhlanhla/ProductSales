import { createContext, useContext } from "react";
import ProductStore from "./productStore";
import UserStore from "./userStore";
import CommonStore from "./commonStore";

interface Store {
    productStore: ProductStore 
    commonStore: CommonStore
    userStore: UserStore
}

export const store: Store = {
    productStore: new ProductStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext)
}