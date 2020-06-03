import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParsedListComponent } from './product-parsed-list.component';

describe('ProductParsedListComponent', () => {
  let component: ProductParsedListComponent;
  let fixture: ComponentFixture<ProductParsedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductParsedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductParsedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
