import { Injectable, Injector } from '@angular/core';
import { AgentsService } from './agents/agents.service';
import { CallsService } from './calls/calls.service';
import { TranscriptsService } from './transcripts/transcripts.service';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  // tslint:disable-next-line: variable-name
  private _agentsService: AgentsService | undefined;
  public get agentsService(): AgentsService {
    if (!this._agentsService) {
      this._agentsService = this.injector.get(AgentsService);
    }
    return this._agentsService;
  }
  // tslint:disable-next-line: variable-name
  private _callsService: CallsService | undefined;
  public get callsService(): CallsService {
    if (!this._callsService) {
      this._callsService = this.injector.get(CallsService);
    }
    return this._callsService;
  }
  // tslint:disable-next-line: variable-name
  private _transcriptsService: TranscriptsService | undefined;
  public get transcriptsService(): TranscriptsService {
    if (!this._transcriptsService) {
      this._transcriptsService = this.injector.get(TranscriptsService);
    }
    return this._transcriptsService;
  }

  constructor(private injector: Injector) {}

  getAgents() {
    return this.agentsService.getAgents();
  }

  getCalls() {
    return this.callsService.getCalls();
  }

  getTranscript() {
    return this.transcriptsService.getTranscript();
  }
}
