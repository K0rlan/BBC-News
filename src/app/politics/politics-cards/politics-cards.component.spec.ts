import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsCardsComponent } from './politics-cards.component';

describe('PoliticsCardsComponent', () => {
  let component: PoliticsCardsComponent;
  let fixture: ComponentFixture<PoliticsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
