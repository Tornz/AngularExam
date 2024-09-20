import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { ProductsState } from '../../store/states/product.state';
import { ProductModel } from '../../models/product.model';
import { setProductList } from '../../store/actions/product.actions';
import { MatTableDataSource } from '@angular/material/table';
import { GetDataService } from 'src/services/get-data-api.service';
import { PostDataService } from 'src/services/post-data-api.service';
import { CustomerModel } from 'src/app/models/customer.model';
import { setCustomer } from 'src/app/store/actions/customer.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],

})
export class CustomersComponent {

  formatLabel(value: number): string {
    if (value >= 1000) {
      return `$${value}`;
    }
    return `${value}`;
  }

  numbersArray: string[] = ["1", "2", "3", "4", "5"];

  customer: CustomerModel = {
    id: "",
    firstName: "",
    lastName: "",
    mobile: "",
    dateOfBirth: new Date(),
    amountRequired: 0,
    email: "",
    term: "",
    title: ""
  };

  selectTitle: string = '';





  constructor(
    private store: Store<{ product: ProductsState }>,
    private postDataService: PostDataService,
    private router: Router
  ) { }

  ngOnInit() {

  }


  addCustomer() {
    this.postDataService.postData("customer", this.customer).then((response: CustomerModel) => {
      this.store.dispatch(setCustomer({ customer: response }));
      this.router.navigate(['/calculate']);
    });
  }
}
