import { ComponentFixture, TestBed } from '@angular/core/testing';

import { autoTraderItemImageComponent } from './autoTrader-item-image.component';

describe('autoTraderItemImageComponent', () => {
  let component: autoTraderItemImageComponent;
  let fixture: ComponentFixture<autoTraderItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ autoTraderItemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(autoTraderItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
