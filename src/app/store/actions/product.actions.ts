import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/models/product.model';


// export const selectBook = createAction(
//   '[Book List Component] Select Book',
//   props<{ book: ProductModel }>()
// );

// export const addBook = createAction(
//   'Add a book',
//   props<{ book: BookModel }>()
// );

export const setProductList = createAction(
  'Product List',
  props<{ products: ProductModel[] }>()
);
