import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'https://api.github.com';

  constructor(private http: HttpClient) { }
 

  userList() {
    return this.http.get(`${this.API_URL}/users`);
  }

  userDetails(userName : string) {
    return this.http.get(`${this.API_URL}/users/${userName}/repos`);
  }

  nextPage(page) {
    return this.http.get(`${this.API_URL}/users?page=${page}&per_page=10`);
  }

  
}
