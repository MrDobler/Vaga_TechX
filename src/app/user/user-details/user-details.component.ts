import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../user.model';
import { $ } from 'protractor';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  showLoader: boolean = true;
  private user: User = new User();

  constructor(private route: ActivatedRoute, private userService: UserService) { 
    this.user.name = this.route.snapshot.paramMap.get('login'); 
  }

  ngOnInit() {
    
    this.userService.userDetails(this.user.name).subscribe(githubUser => {
      this.user.repos = (githubUser as Array<any>);
      this.user.photo = this.user.repos[0].owner.avatar_url;
      this.showLoader = false;
    },
    error => {
      console.log(error);
    });
    
  }


}
