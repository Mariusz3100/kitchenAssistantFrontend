import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCalculationProductComponent } from './match-calculation-product.component';

describe('MatchCalculationProductComponent', () => {
  let component: MatchCalculationProductComponent;
  let fixture: ComponentFixture<MatchCalculationProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCalculationProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCalculationProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
