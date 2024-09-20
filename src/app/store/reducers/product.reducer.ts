import { createReducer, on } from '@ngrx/store';

import { ProductsState, initialState } from '../states/product.state';
import { setProductList } from '../actions/product.actions';


const _productReducer = createReducer(
  initialState,
  on(setProductList, (state, { products }) => ({
    ...state,
    products: [...products]
  })),


  // on(selectBook, (state, { book }) => ({ ...state, selectedProduct: book })),
  // on(addBook, (state, { book }) => ({
  //   ...state,
  //   books: [...state.books, book]
  // })),
  // on(selectBook, (state, { product }) => {
  //   // Conditional logic: Only add the item if it doesn't already exist in the state
  //   if (!state.products.includes(product)) {
  //     return {
  //       ...state,
  //       selectedProduct: product
  //     };
  //   } else {
  //     // If the condition is not met, return the existing state without changes
  //     return state;
  //   }
  // })
);

export function productReducer(state: ProductsState | undefined, action: any) {
  return _productReducer(state, action);
}
