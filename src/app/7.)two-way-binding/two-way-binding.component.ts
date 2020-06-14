import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template:`
     <input [(ngModel)]="name" type="text">
     {{name}}
  ` ,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {


  public name = "";

  constructor() { }

  ngOnInit(): void {
  }

}


//ng-model direction
// add forms modlue to use ngModel

// add below code in app.module.ts

// import { FormsModule } from '@angular/forms';

// and ad it to imports in FormsModule
