import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballersCountryComponent } from './footballers-country.component';

describe('FootballersCountryComponent', () => {
  let component: FootballersCountryComponent;
  let fixture: ComponentFixture<FootballersCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballersCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballersCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
