import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseConsideringComponent } from './phrase-considering.component';

describe('PhraseConsideringComponent', () => {
  let component: PhraseConsideringComponent;
  let fixture: ComponentFixture<PhraseConsideringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseConsideringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseConsideringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
