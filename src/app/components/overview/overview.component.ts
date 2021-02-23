import { Component, OnInit } from '@angular/core';
import { Position } from '../../models/position';
import { PortfolioStructureService } from '../../services/portfolio-structure-service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  positions: Position[];

  constructor(private portfolioStructureService: PortfolioStructureService) { }

  ngOnInit(): void {

    this.positions = [
        {
          id: "99fe7419-553f-4063-b1ca-add521affbd2",
          currency: "BTC",
          balance: 0.0000000063963592,
          hold: 0.0000000000000000,
          available: 0.0000000063963592,
          profile_id: "f316c915-5160-4e65-98dc-8fbeeff95834",
          trading_enabled: true
        },
        {
          id: "b0e295da-b55c-42b1-a70e-b61298b40219",
          currency: "EUR",
          balance: 43803.8801981856303500,
          hold: 22433.6000000000000000,
          available: 21370.28019818563035,
          profile_id: "f316c915-5160-4e65-98dc-8fbeeff95834",
          trading_enabled: false
        },
      ]
      /*
    this.portfolioStructureService.getCBProAccounts().subscribe(data => {
      this.positions = data;
    });
       */
  }
}
