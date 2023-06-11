import { ComponentFixture, TestBed } from '@angular/core/testing';

import { autoTraderHomeComponent } from './autoTrader-home.component';

describe('autoTraderHomeComponent', () => {
  let component: autoTraderHomeComponent;
  let fixture: ComponentFixture<autoTraderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ autoTraderHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(autoTraderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
