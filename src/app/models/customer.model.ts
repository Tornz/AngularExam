export interface CustomerModel {
  id: string;
  term: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  mobile: string;
  email: string;
  amountRequired: number;
  title: string;
}




export interface ComputationModel {
  totalAmount: number;
  totalInterestAmount: number;
  totalPercent: number;
}

