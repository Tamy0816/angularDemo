import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export  class LoginGuard implements  CanActivate {
  constructor(public  router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userStr = sessionStorage.getItem('user');
    let user = {
      userName: '',
      passWord: ''
    };
    user = JSON.parse(userStr);
    if (user && user.userName) {
      console.log('路由守卫验证通过!');
      return true;
    } else {
      console.log('路由守卫验证失败!');
      this.router.navigateByUrl('/login');
      return false;
    }
 }
}
