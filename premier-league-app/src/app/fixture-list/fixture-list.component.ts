import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from '../../../node_modules/rxjs';
import {Team} from '../team';

@Component({
  selector: 'app-fixture-list',
  templateUrl: './fixture-list.component.html',
  styleUrls: ['./fixture-list.component.css']
})
export class FixtureListComponent implements OnInit {

  teams$ : Observable<Team[]>;
  constructor(private data : DataService) { 
    this.teams$ = this.data.getTeams();
  }

  ngOnInit() {}

}
