import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranscriptsService {
  constructor(private httpClient: HttpClient) {}

  getTranscript() {
    return this.httpClient.get('http://localhost:3000/transcript');
  }
}
