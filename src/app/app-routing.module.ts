import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './modules/Customer/customer.component';
import { CalculateComponent } from './modules/Calculate/calculate.component';
import { ApplyComponent } from './modules/Apply/apply.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },  // Default route
  { path: 'customer', component: CustomersComponent },  // Default route
  { path: 'calculate', component: CalculateComponent },
  { path: 'apply', component: ApplyComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
