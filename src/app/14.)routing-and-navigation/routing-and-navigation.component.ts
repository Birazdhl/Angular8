import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-and-navigation',
  template: `
  <div style="text-align:center">
    <h1>
      Routing and Navigation
    </h1>
  </div>
        <nav>
        <a routerLink="/departments" routerLinkActive="active">Departments</a>
        <a routerLink="/employees"  routerLinkActive="active">Employees</a>
        </nav>
  `,
  styles: []
})
export class RoutingAndNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


// Generate departmentLsit and employeeList Components
// configure the routes
// Add buttons and use directives to navigate


// For adding routing in existing Module

// add   <base href="/"> below title
// add app-routing.module.ts in src folder
// and add AppRoutingModule in app.module.ts in import array

// add path for routing in app-routing.module.ts

// export it by making array of routing component and import in it app.module.ts

//router link in rotung navigation


// add component page not found similarly as previous

// page-not-found must be at last for whilecard route