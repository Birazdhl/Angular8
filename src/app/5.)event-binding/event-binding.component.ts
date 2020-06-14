import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
                  <h2>
                    Hello {{name}}
                  </h2>
                  <button (click)="onClick($event)"> Greet </button>
                  <button (click)= "greeting='Welcom Biraz'"> Greet </button>
                  {{greeting}}
                `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  public name = "Biraz"
  public greeting = "";
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event);
    this.greeting = "Welcome to Code Evolution";
  }

}
