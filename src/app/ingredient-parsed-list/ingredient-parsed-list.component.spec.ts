import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientParsedListComponent } from './ingredient-parsed-list.component';

describe('IngredientParsedListComponent', () => {
  let component: IngredientParsedListComponent;
  let fixture: ComponentFixture<IngredientParsedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientParsedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientParsedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
