import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
              <h2>
                Welcome {{name}}
              </h2>

              <input [id]="myId" type="text" value="Biraz">
              <input [disabled]=false id="{{myId}}" type="text" value="Biraz">
              <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Biraz">

            `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {

  public name = "Brutal";
  public myId = "testId"
  public isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}


// Attribute and Property
// Attribute Inititalize DOM properties andthey are done
// Attribute cannot be changed oncethey are initialize whare as protperty value may change

// Interpolation only works with string value not integer 
// Property Binding can be done with [] brackets
