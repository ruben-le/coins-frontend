import { Component, OnInit } from '@angular/core';
import { Position } from '../../models/position';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  positions: Position[];

  constructor() { }

  ngOnInit(): void {
    this.positions = [
      {
        id: "fc54223b-bd0a-42ac-9e83-28855f7225bb",
        currency: "BAT",
        balance: 0.0000000000000000,
        hold: 0.0000000000000000,
        available: 0,
        profile_id: "f316c915-5160-4e65-98dc-8fbeeff95834",
        trading_enabled: false
      },
      {
        id: "99fe7419-553f-4063-b1ca-add521affbd2",
        currency: "BTC",
        balance: 0.6420545256495155,
        hold: 0.0000000000000000,
        available: 0.6420545256495155,
        profile_id: "f316c915-5160-4e65-98dc-8fbeeff95834",
        trading_enabled: true
      }
    ];
  }
}
