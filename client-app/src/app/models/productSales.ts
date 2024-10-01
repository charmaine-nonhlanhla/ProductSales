import { Product } from "./products";

export interface ProductSale {
    saleId: number;
    product: Product;
    productId: number;
    salePrice: number;
    saleQty: number;
    saleDate: Date;
}