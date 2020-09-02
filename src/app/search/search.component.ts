import { Component, OnInit } from '@angular/core';
import { SearcjhRequestService } from '../searcjh-request.service';
import { Repositories } from '../repositories';
import { Search } from '../search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearcjhRequestService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 public searchMe = 'fridahnamudu';
 public githubSearch: string;

 Search: Search;
 repository:Repositories;
 public SearchRepo: string;
 public resultCount = 12;

 findUser(username) {
   this.githubSearch = '';
   this.searchMe = username;
   this.ngOnInit();
 }
  constructor(public githubUserRequest: SearcjhRequestService, public userRepos: SearcjhRequestService)  { }

  
  }
  OnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }


    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;


}
