import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParserComponent } from './product-parser.component';

describe('ProductParserComponent', () => {
  let component: ProductParserComponent;
  let fixture: ComponentFixture<ProductParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
