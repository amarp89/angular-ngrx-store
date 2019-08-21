import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeReducer } from './employee.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ShowEmployeesComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ employees: EmployeeReducer }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
