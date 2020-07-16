import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchInputsComponent } from './match-inputs.component';

describe('MatchInputsComponent', () => {
  let component: MatchInputsComponent;
  let fixture: ComponentFixture<MatchInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
