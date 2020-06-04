import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCalculationComponent } from './match-calculation.component';

describe('MatchCalculationComponent', () => {
  let component: MatchCalculationComponent;
  let fixture: ComponentFixture<MatchCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
