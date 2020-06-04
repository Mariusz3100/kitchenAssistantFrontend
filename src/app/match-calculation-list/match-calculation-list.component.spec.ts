import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCalculationListComponent } from './match-calculation-list.component';

describe('MatchCalculationListComponent', () => {
  let component: MatchCalculationListComponent;
  let fixture: ComponentFixture<MatchCalculationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCalculationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCalculationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
