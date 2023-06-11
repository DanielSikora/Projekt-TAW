import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'autoTrader-home',
  templateUrl: './autoTrader-home.component.html',
  styleUrls: ['./autoTrader-home.component.css']
})
export class autoTraderHomeComponent implements OnInit {

  public filterText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getName($event: string): void {
    this.filterText = $event;
  }
}

