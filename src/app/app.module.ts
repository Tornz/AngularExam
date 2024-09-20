import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/reducers/product.reducer';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomersComponent } from './modules/Customer/customer.component';
import { MatNativeDateModule } from '@angular/material/core';
import { customerReducer } from './store/reducers/customer.reducer';
import { CalculateComponent } from './modules/Calculate/calculate.component';
import { ApplyComponent } from './modules/Apply/apply.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CalculateComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ product: productReducer, customer: customerReducer }),
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CalculateComponent]
})
export class AppModule { }
