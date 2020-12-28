import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AgentsService } from './agents/agents.service';
import { CallsService } from './calls/calls.service';
import { TranscriptsService } from './transcripts/transcripts.service';
import { FacadeService } from './facade.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [AgentsService, CallsService, TranscriptsService, FacadeService],
})
export class ServicesModule {}
