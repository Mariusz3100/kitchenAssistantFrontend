import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesMatchComponent } from './phrases-match.component';

describe('PhrasesMatchComponent', () => {
  let component: PhrasesMatchComponent;
  let fixture: ComponentFixture<PhrasesMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
