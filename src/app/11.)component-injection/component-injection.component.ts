import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-injection',
  template: `<h2>{{"Hello " + name}}</h2>
            <h2>{{"Hello " + parentCast}}</h2>
             <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class ComponentInjectionComponent implements OnInit {

  @Input('parentData') public name;  //  use {{name}} on template
  @Input() public parentCast; //use {{parentData}} on template
  
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hey Biraz');
  }

}


// Using Input Decorator the child can inject the data from parent component
// Using Output Decoratoe the child can export the data to other component