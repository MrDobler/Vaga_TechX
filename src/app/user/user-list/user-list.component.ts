import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<Object> = [];
  login: string = "";
  showLoader: boolean = true;
  headElements = ['ID', 'Username', 'Ação'];
  firstUserIdList: Array<any> = [0]; //Pilha para o controle do primeiro usuário da paginação.
  startUserId: number = 0;
  lastUserId: number = 0;
  showTableLoader: boolean = false;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.getUsers(this.startUserId);
  }
  

  /**
   * Usando o primeiro e último id do usuário devido
   * ao github apenas me disponibilizar 
   * o parametro "since" para a paginação.
   */
  getUsers(userId) {
    this.userService.userList(userId).subscribe(githubUsers => {
      this.users = (githubUsers as Array<Object>);
      this.showLoader = false;
      this.lastUserId = this.getLastUserId(this.users);
      this.showTableLoader = false;
    });
  }

  toNextPage() {
    this.showTableLoader = true;
    this.getUsers(this.lastUserId);
    this.firstUserIdList.push(this.lastUserId);
  }

  toPrevPage() {  
    let previous;
    this.showTableLoader = true;
    this.firstUserIdList.length > 1 ? previous = this.firstUserIdList.pop() : previous = 0;
    this.getUsers(previous);
  }

  private getLastUserId(users: Array<Object>) {
    let lastUserPos = this.users.length - 1;
    let lastUser:any = this.users[lastUserPos];
    return lastUser.id;
  }
}
