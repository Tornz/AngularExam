import { createReducer, on } from '@ngrx/store';
import { setComputation, setCustomer } from '../actions/customer.actions';
import { CustomersState, initialState } from '../states/customer.state';

const _customerReducer = createReducer(
  initialState,
  on(setCustomer, (state, { customer }) => ({
    ...state,
    customer: customer
  })),
  on(setComputation, (state, { computation }) => ({
    ...state,
    computation: computation
  }))
);

export function customerReducer(state: CustomersState | undefined, action: any) {
  return _customerReducer(state, action);
}
