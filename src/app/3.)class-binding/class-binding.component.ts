import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
              <h2>
                Welcome {{name}}
              </h2>
              <h2 class="text-success">CodeEvolution</h2>
              <h2 [class]="successClass">Code Evolution</h2>
              <h2 [class.text-danger]="hasError">Code Evolution</h2>
              <h2 [ngClass]="messageClasses">Code Evolution</h2>
            `,
  styles: [`
      .text-success {
        color:green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
  `]
})
export class ClassBindingComponent implements OnInit {


  public name = "CodeEvoulution"
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}


// [class]="successClass"
// regulr class will be dunny in front of class binding
// conditional render Property in class binding
// multiple classes using ng
