import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballersPositionComponent } from './footballers-position.component';

describe('FootballersPositionComponent', () => {
  let component: FootballersPositionComponent;
  let fixture: ComponentFixture<FootballersPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballersPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballersPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
