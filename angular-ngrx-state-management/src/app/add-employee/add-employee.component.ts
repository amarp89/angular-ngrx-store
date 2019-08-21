import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { EmployeeAdd } from '../employee.actions';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.less']
})
export class AddEmployeeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  employees: Observable<Employee[]>; 
  constructor(private store: Store<{ employees: Employee[] }>) { 
    this.employees = store.pipe(select('employees')); 
  } 
  AddEmployee(employeeName: string) { 
    const employee = new Employee(); 
    employee._empName = employeeName; 
    this.store.dispatch(new EmployeeAdd(employee)); 
  } 
}
