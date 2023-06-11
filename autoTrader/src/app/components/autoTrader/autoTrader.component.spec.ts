import { ComponentFixture, TestBed } from '@angular/core/testing';

import { autoTraderComponent } from './autoTrader.component';

describe('autoTraderComponent', () => {
  let component: autoTraderComponent;
  let fixture: ComponentFixture<autoTraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ autoTraderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(autoTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
