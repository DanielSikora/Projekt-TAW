import {Component, Input} from '@angular/core';

@Component({
  selector: 'autoTrader-item-text',
  templateUrl: './autoTrader-item-text.component.html',
  styleUrls: ['./autoTrader-item-text.component.css']
})
export class autoTraderItemTextComponent {
  @Input() title?: string;
  @Input() price?: number;
  @Input() id?: number;
}
