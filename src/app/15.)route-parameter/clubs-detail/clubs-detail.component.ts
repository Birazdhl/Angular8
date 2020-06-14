import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clubs-detail',
  template: `
    <div>
     <h3> You Click on the Club  {{clubName}} </h3>
    </div>
  `,
  styles: [
  ]
})
export class ClubsDetailComponent implements OnInit {

  public clubName;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    let name = this.route.snapshot.paramMap.get('name')
    this.clubName = name;
  }

}
