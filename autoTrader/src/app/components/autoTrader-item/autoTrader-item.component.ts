import {Component, Input } from '@angular/core';

@Component({
  selector: 'autoTrader-item',
  templateUrl: './autoTrader-item.component.html',
  styleUrls: ['./autoTrader-item.component.css']
})
export class autoTraderItemComponent {
  @Input() image?: string;
  @Input() title?: string;
  @Input() id?: number;
  @Input() price?: number;
}
