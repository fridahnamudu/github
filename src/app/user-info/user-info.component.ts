import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {Repositories} from '../repositories';
import {User} from '../user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  providers: [SearchRequestService],
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public searchMe = '';
  public githubUser: string;


  users: User ;
  repositories: Repositories;


  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }


constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { }




  ngOnInit(): void {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
  }

}


  
