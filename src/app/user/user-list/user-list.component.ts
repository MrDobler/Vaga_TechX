import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: Array<Object> = [];
  private login: string = "";
  private showLoader: boolean = true;
  headElements = ['ID', 'Username', 'Ação'];
  firstUserId: number;


  constructor(public userService: UserService) {
    this.firstUserId = 1;
  }

  ngOnInit() {
    this.getUsers();
  }
  

  /**
   * Usando o último id do usuário devido
   * ao github apenas me disponibilizar 
   * o parametro "since" para a paginação.
   */
  getUsers() {
    this.userService.userList().subscribe(githubUsers => {
      this.users = (githubUsers as Array<Object>);
      this.showLoader = false;
      let lastUserPos = this.users.length - 1;
      let lastUser:any = this.users[lastUserPos];
      let firstUser:any = this.users[0];
      this.firstUserId = firstUser.id;
      console.log(lastUser.id);
      // console.log(this.lastUserId);
    },
    error => {
      console.log(error);
    });
  }

  // changePage(page) {
  //   this.showLoader = true;
  //   this.userService.nextPage(page).subscribe(githubUsers => {
  //     this.users = (githubUsers as Array<Object>);
  //     this.showLoader = false;
  //   });
  // }

  // showDetails(login: string) {
  //   console.log(login);
  //   // this.emitter.emit(login);
  // }

}
