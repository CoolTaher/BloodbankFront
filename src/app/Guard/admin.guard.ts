import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MainService } from '../Service/main.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  CapCode:any
  constructor(private router: Router,private _serv:MainService) {
  }
  canActivate() {
    this.CapCode=this._serv.getCap()
    if (sessionStorage.AdminToken==`IsAdmin${this.CapCode}`) {
      console.log("admin auth");
      return true
    }
    else {
      this.router.navigate(['/login']);
      console.log("admin auth denied");
      return false

    }
  }

}
