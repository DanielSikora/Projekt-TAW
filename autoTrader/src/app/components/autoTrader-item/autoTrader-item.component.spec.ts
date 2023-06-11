import { ComponentFixture, TestBed } from '@angular/core/testing';

import { autoTraderItemComponent } from './autoTrader-item.component';

describe('autoTraderItemComponent', () => {
  let component: autoTraderItemComponent;
  let fixture: ComponentFixture<autoTraderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ autoTraderItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(autoTraderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
