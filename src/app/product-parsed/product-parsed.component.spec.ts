import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParsedComponent } from './product-parsed.component';

describe('ProductParsedComponent', () => {
  let component: ProductParsedComponent;
  let fixture: ComponentFixture<ProductParsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductParsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductParsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
