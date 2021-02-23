import { Component, OnInit, Input } from '@angular/core';
import { Position } from '../../models/position';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  @Input() position: Position;

  constructor() { }

  ngOnInit(): void {
  }

  //set Dynamic Classes
  setClasses() {
    return {
      position: true,
      tradingEnabled: this.position.trading_enabled
    }
  }
}
