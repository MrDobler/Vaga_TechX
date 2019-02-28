import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  showLoader: boolean = true;
  private user: User = new User();
  startPage: number = 1;
  nextPage: number;
  previousPage: number;
  noDataWarning: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService) { 
    this.user.name = this.route.snapshot.paramMap.get('login'); 
  }

  ngOnInit() {
    this.nextPage = this.startPage;
    this.previousPage = this.startPage;
    this.getUserData(this.startPage);
  }

  getUserData(page) {
    this.userService.userDetails(this.user.name, page).subscribe(githubUser => {
      this.user.repos = (githubUser as Array<any>);

      if (this.user.repos.length > 0) {
        this.user.photo = this.user.repos[0].owner.avatar_url;
        this.showLoader = false;
      } else {
        
        this.previousPage = this.nextPage - 1;
      }
    });
  }

  toNextPage() {
    this.getUserData(++this.nextPage);
    this.previousPage = (this.nextPage - 1);
  }

  toPrevPage() {
    if (this.previousPage >= this.startPage && this.nextPage != this.startPage) {
      --this.nextPage;
      this.getUserData(this.previousPage);
      --this.previousPage;
    }
  }
}
