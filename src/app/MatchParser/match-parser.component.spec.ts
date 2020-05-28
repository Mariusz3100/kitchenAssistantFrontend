import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchParserComponent } from './match-parser.component';

describe('ParserComponent', () => {
  let component: MatchParserComponent;
  let fixture: ComponentFixture<MatchParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
