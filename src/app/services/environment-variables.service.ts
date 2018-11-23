import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EnvironmentVariablesService {

  constructor( private http : HttpClient ) { }

  getEnvironmentVariables() {
    return this.http.get('http://localhost:8000/env-vars');
  }

}
