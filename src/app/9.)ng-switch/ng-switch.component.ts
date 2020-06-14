import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
                <div [ngSwitch]="color">
                   <div *ngSwitchCase="'red'">You picked red colour</div>
                   <div *ngSwitchCase="'blue'">You picked blue colour</div>
                   <div *ngSwitchCase="'green'">You picked green colour</div>
                   <div *ngSwitchDefault>Pick Again</div>
                </div>
              `,
  styles: []
})
export class NgSwitchComponent implements OnInit {

 public color = "orange"

  constructor() { }

  ngOnInit(): void {
  }

}
