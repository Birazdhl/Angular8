import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-club-component',
  template: `
    <h2>
      Club List
    </h2>

    <ul class="items">
      <li (click)= onSelect(club) *ngFor = "let club of clubs">
        <span class="badge">{{club.id}}</span> {{club.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ClubComponentComponent implements OnInit {

  public clubs = [
    {"id": 1, "name":"Barcelona"},
    {"id": 2, "name":"Madrid"},
    {"id": 3, "name":"Man City"},
    {"id": 4, "name":"PSG"},
    {"id": 5, "name":"Juventus"}
  ]

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSelect(club) {
    this.route.navigate(['clubs',club.name])
  }

}
