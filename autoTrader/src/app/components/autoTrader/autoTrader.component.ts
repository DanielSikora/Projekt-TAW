import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'autoTrader',
  templateUrl: './autoTrader.component.html',
  styleUrls: ['./autoTrader.component.css']
})
export class autoTraderComponent implements OnInit {
  @Input() filterText: string = '';
  public items$: any;

  constructor(private service: DataService) {
  }
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }
}
