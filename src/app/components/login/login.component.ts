import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, private loginService: LoginService) {
  }
  public User = {
    userName: '',
    passWord: ''
  };
  ngOnInit() {
    this.loginService.getUserList();
  }
  login() {
    const userStr: string = JSON.stringify(this.User);
    if (this.loginService.userList) {
      console.log(this.loginService.userList);
      let i = 0;
      this.loginService.userList.forEach(user => {
        if (this.User.userName == user.userName && this.User.passWord == user.passWord) {
          sessionStorage.setItem('user', userStr);
          this.router.navigateByUrl('/home');
        } else {
          i++;
        }
        if (i == this.loginService.userList.length) {
          alert('用户名或密码错误！');
        }
      });
    }
    // this.http.get('assets/user.json').subscribe(data => {
    //    if (this.User.userName == data['userName'] && this.User.passWord == data['passWord']) {
    //     sessionStorage.setItem( 'user', userStr );
    //     this.router.navigateByUrl('/home');
    //   } else {
    //     alert('用户名或密码错误！');
    //   }
    // });
  }
}
