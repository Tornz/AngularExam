
import { ComputationModel, CustomerModel } from "src/app/models/customer.model";

export interface CustomersState {
  customer: CustomerModel | null;
  computation: ComputationModel | null;
}

export const initialState: CustomersState = {
  customer: null,
  computation: null
};
