
import { ProductModel } from "src/app/models/product.model";

export interface ProductsState {
  products: ProductModel[];
}

export const initialState: ProductsState = {
  products: []

};
