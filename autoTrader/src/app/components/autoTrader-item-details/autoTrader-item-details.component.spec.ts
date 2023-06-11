import { ComponentFixture, TestBed } from '@angular/core/testing';

import { autoTraderItemDetailsComponent } from './autoTrader-item-details.component';

describe('autoTraderItemDetailsComponent', () => {
  let component: autoTraderItemDetailsComponent;
  let fixture: ComponentFixture<autoTraderItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ autoTraderItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(autoTraderItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
