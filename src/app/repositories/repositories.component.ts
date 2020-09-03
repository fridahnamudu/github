import { Component, OnInit } from '@angular/core';

import {SearchRequestService} from '../search-request.service';
import {Repositories} from '../repositories';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
    providers: [SearchRequestService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repository: Repositories;
    public searchRepo: string;
   

    searchRepos() {
      this.searchRepo = '';

    }

    constructor(public gitRepoRequest: SearchRequestService ) { }


  ngOnInit(): void {
    this.gitRepoRequest.gitRepos(this.searchRepo);

  }

}
