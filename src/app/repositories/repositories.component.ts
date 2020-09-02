import { Component, OnInit } from '@angular/core';
import {SearcjhRequestService} from '../searcjh-request.service';
import {Repositories} from '../repositories'
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  providers:[SearcjhRequestService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repository: Repositories;
  public searchRepo: string;
  public resultCount = 12;

  searchRepos() {
      this.searchRepo = '';
      this.resultCount = 10;
      this.getDataFunction();

  }
  constructor(public gitRepoRequest: SearcjhRequestService ) { }

  ngOnInit(): void {
    this.resultCount = 5;
    this.gitRepoRequest.gitRepos(this.searchRepo);

  }
  getDataFunction() {
    this.gitRepoRequest.gitRepos(this.searchRepo);

}
}
