import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PositionComponent } from './components/position/position.component';
import { PortfolioStructureService } from "./services/portfolio-structure-service";
import { ConfigService } from "./services/config-service";
import { IgxDoughnutChartModule, IgxRingSeriesModule } from 'igniteui-angular-charts';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PositionComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PortfolioStructureService,
    ConfigService,
    IgxDoughnutChartModule,
    IgxRingSeriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
