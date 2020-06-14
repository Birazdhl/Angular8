import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'

@Component({
  selector: 'app-footballer-detail',
  template: `
    <div>
      <h2>You Selected department with id = {{footballerId}}</h2>

      <p>
        <button (click) = "showCountry()">Country</button>
        <button (click) = "showPosition()">Position</button>
      </p>
      <router-outlet></router-outlet>

    </div>
    <p>
        <button (click)="goPrevious()">Pervious  </button>

        <button (click) = "goNext()">Next</button>
    </p>
    <div>
     <button (click)="goToFootballers()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class FootballerDetailComponent implements OnInit {

  public footballerId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.footballerId = id;
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.footballerId = id;
    });
  }
  
  goPrevious() {
    let previoudId = this.footballerId - 1;
    this.router.navigate(['/footballers',previoudId])
  }

  goNext() {
    let nextId = this.footballerId + 1;
    this.router.navigate(['/footballers',nextId])

  }

  goToFootballers() {
    let selectedId = this.footballerId ? this.footballerId : null
    // this.router.navigate(['/footballers',{id: selectedId}]);

    this.router.navigate(['../',{id: selectedId}], {relativeTo: this.route});

  }

  showCountry() {
    this.router.navigate(['country'], {relativeTo: this.route});
  }

  showPosition() {
    this.router.navigate(['position'], {relativeTo: this.route});
  }

}


// to accept the router parameter import route and use it