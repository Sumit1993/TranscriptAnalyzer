import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyzerRoutingModule } from './analyzer-routing.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NotSelectedComponent } from './components/not-selected/not-selected.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { RealComponent } from './components/real/real.component';
import { ExpectedComponent } from './components/expected/expected.component';
import { LandingComponent } from './pages/landing/landing.component';


@NgModule({
  declarations: [TopBarComponent, NotSelectedComponent, AnalysisComponent, RealComponent, ExpectedComponent, LandingComponent],
  imports: [
    CommonModule,
    AnalyzerRoutingModule
  ]
})
export class AnalyzerModule { }
