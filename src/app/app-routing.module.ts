import {  NgModule } from '@angular/core'
import { Routes, RouterModule} from '@angular/router';
import { DepartmentListComponent } from './14.)routing-and-navigation/department-list/department-list.component';
import { EmployeeListComponent } from './14.)routing-and-navigation/employee-list/employee-list.component';
import { PageNotFoundComponent } from './14.)routing-and-navigation/page-not-found/page-not-found.component';
import { FootballerComponentComponent } from './15.)route-parameter/footballer-component/footballer-component.component';
import { ClubComponentComponent } from './15.)route-parameter/club-component/club-component.component';
import { FootballerDetailComponent } from './15.)route-parameter/footballer-detail/footballer-detail.component';
import { ClubsDetailComponent } from './15.)route-parameter/clubs-detail/clubs-detail.component';
import { FootballersCountryComponent } from './15.)route-parameter/footballers-country/footballers-country.component';
import { FootballersPositionComponent } from './15.)route-parameter/footballers-position/footballers-position.component';

const routes: Routes = [
    {path: '', redirectTo: '/footballers-list', pathMatch: 'full'},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'departments', component: DepartmentListComponent},
    {path: 'footballers-list', component: FootballerComponentComponent},
    {path: 'footballers-list/:id', 
            component: FootballerDetailComponent,
            children: [
                {path: 'country', component: FootballersCountryComponent },
                {path: 'position', component: FootballersPositionComponent },
            ]},
    {path: 'clubs', component: ClubComponentComponent},
    {path: 'clubs/:name', component: ClubsDetailComponent},
    {path : "**", component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [DepartmentListComponent, EmployeeListComponent,
                                    FootballerComponentComponent, FootballerDetailComponent,
                                    ClubComponentComponent,  ClubsDetailComponent,
                                    PageNotFoundComponent]