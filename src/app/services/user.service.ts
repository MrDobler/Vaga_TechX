import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'https://api.github.com';

  constructor(private http: HttpClient) { }
 

  userList(page) {
    return this.http.get(`${this.API_URL}/users?since=${page}&per_page=10`);
  }

  userDetails(userName : string, page) {
    return this.http.get(`${this.API_URL}/users/${userName}/repos?page=${page}&per_page=10`);
  }
  
}
