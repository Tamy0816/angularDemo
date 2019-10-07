import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userList: any;
  constructor(private http: HttpClient) {
  }
  getUserList() {
    this.http.get('assets/user.json').subscribe(data => {
    this.userList = data;
    console.log(this.userList);
   });
  }
}
