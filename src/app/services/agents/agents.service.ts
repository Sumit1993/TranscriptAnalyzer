import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  constructor(private httpClient: HttpClient) {}

  getAgents() {
    return this.httpClient.get('http://localhost:3000/agents');
  }
}
