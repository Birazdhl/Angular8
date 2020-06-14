import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { TestComponent } from './1.) Interpolation/test.component';
import { PropertyBindingComponent } from './2.) property-binding/property-binding.component';
import { ClassBindingComponent } from './3.)class-binding/class-binding.component';
import { StyleBindingComponent } from './4.)style-binding/style-binding.component';
import { EventBindingComponent } from './5.)event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './6.)template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './7.)two-way-binding/two-way-binding.component';
import { NgIfDirectiveComponent } from './8.)ng-if-directive/ng-if-directive.component';
import { NgSwitchComponent } from './9.)ng-switch/ng-switch.component';
import { NgForDirectiveComponent } from './10.)ng-for-directive/ng-for-directive.component';
import { ComponentInjectionComponent } from './11.)component-injection/component-injection.component';
import { PipesComponent } from './12.)pipes/pipes.component';
import { EmployeeListComponentsComponent } from './13.)Services/employee-list-components/employee-list-components.component';
import { EmployeeDetailComponentComponent } from './13.)Services/employee-detail-component/employee-detail-component.component';
import { EmployeeService } from './13.)Services/employee.service';
import { HttpClientModule } from  '@angular/common/http';
import { RoutingAndNavigationComponent } from './14.)routing-and-navigation/routing-and-navigation.component';
import { PageNotFoundComponent } from './14.)routing-and-navigation/page-not-found/page-not-found.component';
import { RouteParameterComponent } from './15.)route-parameter/route-parameter.component';
import { FootballerDetailComponent } from './15.)route-parameter/footballer-detail/footballer-detail.component';
import { ClubsDetailComponent } from './15.)route-parameter/clubs-detail/clubs-detail.component';
import { FootballersCountryComponent } from './15.)route-parameter/footballers-country/footballers-country.component';
import { FootballersPositionComponent } from './15.)route-parameter/footballers-position/footballers-position.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent,
    NgIfDirectiveComponent,
    NgSwitchComponent,
    NgForDirectiveComponent,
    ComponentInjectionComponent,
    PipesComponent,
    EmployeeListComponentsComponent,
    EmployeeDetailComponentComponent,
    RoutingAndNavigationComponent,
    routingComponents,
    PageNotFoundComponent,
    RouteParameterComponent,
    FootballerDetailComponent,
    ClubsDetailComponent,
    FootballersCountryComponent,
    FootballersPositionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
