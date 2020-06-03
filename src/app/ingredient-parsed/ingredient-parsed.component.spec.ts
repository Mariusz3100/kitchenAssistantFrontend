import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientParsedComponent } from './ingredient-parsed.component';

describe('IngredientParsedComponent', () => {
  let component: IngredientParsedComponent;
  let fixture: ComponentFixture<IngredientParsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientParsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientParsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
