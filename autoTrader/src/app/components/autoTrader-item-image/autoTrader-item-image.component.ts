import {Component, Input} from '@angular/core';

@Component({
  selector: 'autoTrader-item-image',
  templateUrl: './autoTrader-item-image.component.html',
  styleUrls: ['./autoTrader-item-image.component.css']
})
export class autoTraderItemImageComponent {
  @Input() image?: string;
}
