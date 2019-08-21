import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.less']
})
export class ShowEmployeesComponent implements OnInit {

  employees: Observable<Employee[]>;

  
  constructor(private store: Store<{ employees: Employee[] }>) {
    this.employees = store.pipe(select('employees'));
  }

  ngOnInit() {
  }

}
