import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }

    getEmployees(): Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url)
                      .pipe(catchError(this.errorHandler));
                      
  }

  errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "Server Errror");
  }

}

//create service and register it in AppModule in providers array

//Injecteable decorator defines it maight be depended on others

// import httpClientModule in app.module.ts  from @angular/common/http and add itin import array

// giver desired url to it

// make the interface IEmployee and assign it in get response

//assign the value to respective variable
