import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Fixture } from '../fixture';
import { Team } from './team';

@Injectable({providedIn: 'root'})
export class DataService {

  constructor(private http: HttpClient) { }
    fixtures = this.http.get<Fixture[]>('/api/fixtures');

    getTeams(){
      return this.http.get<Team[]>('/api/teams');
    }


}
