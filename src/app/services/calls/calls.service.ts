import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  constructor(private httpClient: HttpClient) {}

  getCalls() {
    return this.httpClient.get('http://localhost:3000/calls');
  }
}
