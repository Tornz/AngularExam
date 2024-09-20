import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostDataService } from 'src/services/post-data-api.service';
import { CustomersState } from 'src/app/store/states/customer.state';
import { ComputationModel, CustomerModel } from 'src/app/models/customer.model';
import { PutDataService } from 'src/services/put-data-api.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
})
export class ApplyComponent {

  customer: CustomerModel | null = null;

  computation: ComputationModel | null = null;
  amountRequired: number = 5000;
  isSuccess: boolean = false;
  isError: boolean = false;

  constructor(
    private store: Store<{ customer: CustomersState }>,
    private putDataService: PutDataService
  ) { }

  ngOnInit() {
    this.store.select(state => state.customer.customer).subscribe(customer => {
      this.customer = customer;
    });

    this.store.select(state => state.customer.computation).subscribe(computation => {
      this.computation = computation;
    });
  }
  applyHandler() {
    this.putDataService.putData(`customer/${this.customer?.id}`, null).then((response: any) => {
      debugger
      if (response?.response) {
        this.isError = true;
      }
      else {
        this.isSuccess = true;
      }
    });
  }

}
