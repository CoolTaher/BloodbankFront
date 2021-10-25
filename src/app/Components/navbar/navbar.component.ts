import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
login:any=false
Name:any="Blood Care"
capCode:any
user:any=true
  userName: any;
  constructor(private router: Router,private _serv:MainService) { }

  ngOnInit(): void {
    this.capCode=this._serv.getCap()
    this.userName=this._serv.getuser()
    this.checkLogin()
    
  }
  logout(){
    this.router.navigate(['/']);
    // localStorage.token=null
    sessionStorage.removeItem("guestToken")
    sessionStorage.removeItem("AdminToken")
    sessionStorage.removeItem("user")
  }

  checkLogin(){
    if (sessionStorage.guestToken==`IsGuest${this.capCode}` ||  sessionStorage.AdminToken==`IsAdmin${this.capCode}`) {
      // console.log("Navbar logged in");
      
      this.login=true
      this.user=false
    }
    else if(sessionStorage.user==`${this.userName}${this.capCode}`){
this.user=true
    }
    else {
      // console.log("Navbar not logged ");
      this.user=false
      this.login=false
    }
  }
}
