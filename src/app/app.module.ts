import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PositionComponent } from './components/position/position.component';
import { PortfolioStructureService } from "./services/portfolio-structure-service";

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PortfolioStructureService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
