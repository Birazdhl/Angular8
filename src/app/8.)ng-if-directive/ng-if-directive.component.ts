import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  template: `
             <h2 *ngIf="displayName; else elseBlock">
              Welcome Biraz
             </h2>

             <ng-template #elseBlock>
             <h2>
               Name is hidden
             </h2>
             </ng-template>

             <div *ngIf="displayName; then thenBlock; else elseBlock;"></div>

             <ng-template #thenBlock>
               <h2>Welcome Brutal</h2>
             </ng-template>

             <ng-template #elseBlock>
               <h2>Name is Hidden</h2>
             </ng-template>

            `,
  styles: []
})
export class NgIfDirectiveComponent implements OnInit {

  displayName = false;

  constructor() { }

  ngOnInit(): void {
  }

}
