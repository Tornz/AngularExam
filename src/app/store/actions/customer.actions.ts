import { createAction, props } from '@ngrx/store';
import { ComputationModel, CustomerModel } from 'src/app/models/customer.model';


export const setCustomer = createAction(
  'Customer',
  props<{ customer: CustomerModel }>()
);

export const setComputation = createAction(
  'Customer Computation',
  props<{ computation: ComputationModel }>()
);
