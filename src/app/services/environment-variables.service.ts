import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class EnvironmentVariablesService {

  constructor( private http : HttpClient ) { }

  getEnvironmentVariables() {
    console.log(environment.server_api);
    return this.http.get(environment.server_api+'/env-vars');
  }

}
