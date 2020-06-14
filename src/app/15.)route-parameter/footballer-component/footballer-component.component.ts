import { Component, OnInit } from '@angular/core';
import {Router,Route,ParamMap, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-footballer-component',
  template: `
  <h2>
  Footballers List
</h2>

<ul class="items">
  <li (click)="onSelect(footballer)" [class.selected]="isSelected(footballer)" *ngFor = "let footballer of footballers">
    <span class="badge">{{footballer.id}}</span> {{footballer.name}}
  </li>
</ul>
  `,
  styles: [
  ]
})
export class FootballerComponentComponent implements OnInit {

  public selectedId;

  public footballers = [
    {"id": 1, "name":"Messi"},
    {"id": 2, "name":"Ronaldo"},
    {"id": 3, "name":"Dr Bruyne"},
    {"id": 4, "name":"Mbappe"},
    {"id": 5, "name":"Dyabala"}
  ]


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selectedId = id;
    });
  }

   onSelect(footballers){
      // this.router.navigate(['/footballers',footballers.id]); //absoulte navigation

      this.router.navigate([footballers.id],{relativeTo: this.route})
   }

   isSelected(footballer){
     return footballer.id ===this.selectedId;
   }

}


// to send param in router import router