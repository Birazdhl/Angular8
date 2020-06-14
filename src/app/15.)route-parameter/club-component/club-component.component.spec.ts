import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubComponentComponent } from './club-component.component';

describe('ClubComponentComponent', () => {
  let component: ClubComponentComponent;
  let fixture: ComponentFixture<ClubComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
