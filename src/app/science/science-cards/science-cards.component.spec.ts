import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceCardsComponent } from './science-cards.component';

describe('ScienceCardsComponent', () => {
  let component: ScienceCardsComponent;
  let fixture: ComponentFixture<ScienceCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
