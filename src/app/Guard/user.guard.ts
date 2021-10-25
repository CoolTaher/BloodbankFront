import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from '../Service/main.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  CapCode:any
  user:any
  constructor(private router: Router,private _serv:MainService) {
  }
  canActivate() {
    this.CapCode=this._serv.getCap()
    this.user=this._serv.getuser()
    if (sessionStorage.user==`${this.user}${this.CapCode}`) {
      console.log("user auth");
      return true
    }
    else {
      this.router.navigate(['/login']);
      console.log("user auth denied");
      return false

    }
  }

}
