import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
          <h2>
            Welcome {{name}}
          </h2>
          <h2 [style.color]="'orange'">Style Binding</h2>
          <h2 [style.color]=" hasError ? 'red' : 'green'">Style Binding</h2>
          <h2 [style.color]="highlightColor">Style Binding 2</h2>
          <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
        `,
  styleUrls: []
})
export class StyleBindingComponent implements OnInit {

  public name = "Biraz";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange";

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
