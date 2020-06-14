import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail-component',
  template: `
                  <h2>Employee List</h2>
                  <h3>{{errorMsg}}</h3>
                  <ul *ngFor="let employee of employees">
                    <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
                  </ul>
                `,
  styleUrls: []
})
export class EmployeeDetailComponentComponent implements OnInit {

  public employees = [];

  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
     this._employeeService.getEmployees()
          .subscribe(data => this.employees = data,
                      error => this.errorMsg = error);
  }

}
