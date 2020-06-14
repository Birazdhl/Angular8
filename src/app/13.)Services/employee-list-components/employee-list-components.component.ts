import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-components',
  template: `
              <h2>Employee List</h2>
              <h3>{{errorMsg}}</h3>
              <ul *ngFor="let employee of employees">
                <li>{{employee.name}}</li>
              </ul>
            `,
  styles: []
})
export class EmployeeListComponentsComponent implements OnInit {


  public employees =   [];

  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
               error => this.errorMsg = error);
  }

}

//DI is a coding pattern in which a class recieves its dependencies from external sources rather than creating them iteslf
