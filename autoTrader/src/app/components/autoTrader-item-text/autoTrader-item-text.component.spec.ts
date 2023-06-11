import { ComponentFixture, TestBed } from '@angular/core/testing';

import { autoTraderItemTextComponent } from './autoTrader-item-text.component';

describe('autoTraderItemTextComponent', () => {
  let component: autoTraderItemTextComponent;
  let fixture: ComponentFixture<autoTraderItemTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ autoTraderItemTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(autoTraderItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
