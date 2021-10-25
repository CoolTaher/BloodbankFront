import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { MainService } from '../Service/main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
capCode:any
  constructor(private serv:MainService ,private router: Router) {
    
  }
  canActivate() {
    this.capCode=this.serv.getCap()
    if (sessionStorage.guestToken==`IsGuest${this.capCode}`) {
        console.log("test auth");
        return true
    }
    else {
        this.router.navigate(['/login']);
        console.log("test auth denied");
      return false

    }
  }

}
