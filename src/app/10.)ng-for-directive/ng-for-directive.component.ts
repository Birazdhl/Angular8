import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  template: `
    <div *ngFor="let color of colors; first as f; last as l; odd as o">
    <div>     <h2>{{f}} {{color}}</h2> </div>
    <div>     <h2>{{l}} {{color}}</h2> </div>
    <div> <h2>{{o}} {{color}}</h2> </div>
    </div> 


  `,
  styles: []
})
export class NgForDirectiveComponent implements OnInit {

  public colors = ["red","blue","green","yellow"]
  constructor() { }

  ngOnInit(): void {
  }

}
