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
    this.portfolioStructureService.getCBProAccounts().subscribe(data => {
      this.positions = data;
    });
  }
}
