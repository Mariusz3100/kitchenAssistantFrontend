import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdaDataComponent } from './usda-data.component';

describe('UsdaDataComponent', () => {
  let component: UsdaDataComponent;
  let fixture: ComponentFixture<UsdaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
