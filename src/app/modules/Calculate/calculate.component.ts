import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { ProductsState } from '../../store/states/product.state';
import { ProductModel } from '../../models/product.model';
import { setProductList } from '../../store/actions/product.actions';
import { GetDataService } from 'src/services/get-data-api.service';
import { CustomersState } from 'src/app/store/states/customer.state';
import { ComputationModel, CustomerModel } from 'src/app/models/customer.model';
import { Router } from '@angular/router';
import { setComputation } from 'src/app/store/actions/customer.actions';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss'],
})
export class CalculateComponent {

  formatLabel(value: number): string {
    if (value >= 1000) {
      return `$${value}`;
    }
    return `${value}`;
  }

  selectedProduct: ProductModel | null = null;
  productList: ProductModel[] = [];
  displayedColumns: string[] = ['id', 'author', 'publishedDate'];

  customer: CustomerModel | null = null;

  amountRequired: number = 5000;

  constructor(
    private store: Store<{ product: ProductsState, customer: CustomersState }>,
    private getDataService: GetDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.select(state => state.product.products).subscribe(products => {
      this.productList = products;
    });

    this.store.select(state => state.customer.customer).subscribe(customer => {
      this.customer = customer;
    });

    this.get_books_list();
  }

  get_books_list() {
    this.getDataService.getData('products')
      .then((data: ProductModel[]) => {
        this.store.dispatch(setProductList({ products: data }));
      })
      .catch(error => console.error('Error in GET request:', error));
  }

  calculateHandler() {
    var totalInterestAmount = 0;
    var interestPercent = Number(this.selectedProduct?.interestRate) * 100;
    if (interestPercent < 100) {
      var totalInterestAmount = Number(this.selectedProduct?.interestRate) * Number(this.customer?.amountRequired)
    }

    var computation: ComputationModel = {
      totalPercent: interestPercent,
      totalAmount: totalInterestAmount + Number(this.customer?.amountRequired),
      totalInterestAmount: totalInterestAmount
    }
    this.store.dispatch(setComputation({ computation: computation }));
    this.router.navigate(['/apply']);
  }
}
