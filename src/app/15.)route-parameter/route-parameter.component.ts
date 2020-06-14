import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-parameter',
  template: `
  <div style="text-align:center">
  <h1>
    Routing Parameter and Navigation
  </h1>
</div>
      <nav>
      <a routerLink="/footballers" routerLinkActive="active">Footballers</a>
      <a routerLink="/clubs"  routerLinkActive="active">Clubs</a>
      </nav>
  `,
  styles: [
  ]
})
export class RouteParameterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
