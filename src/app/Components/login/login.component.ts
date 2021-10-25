import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Invalid: any = false
  Name: any = "Connect Life"
  cap: any
  user:any
  userID: any;
  userPass: any;
  USerData: any;
  userName: any;
  constructor(private router: Router, private _serv: MainService) { }

  ngOnInit(): void {
   this.user=this._serv.UserLogin
  }
  createCode() {
    this.cap = Math.floor(Math.random() * 1000000000)
    this._serv.setCap(this.cap)
  }


  Login(id: any, pass: any) {
    console.log("entered", id, pass);
    this.user.forEach((ele: any) => {
      if (id == ele.id && pass == ele.pass) {
        this.userPass = ele.pass
        this.userID = ele.id
        this.userName = ele.name
      }
    });
    if (id == "test" && pass == "1234") {
      this.createCode()
      sessionStorage.setItem("guestToken", `IsGuest${this.cap}`)
      this.router.navigate(['/details']);
    }
    else if (id == "admin" && pass == "admin123") {
      this.createCode()
      this.router.navigate(['/inventory']);
      sessionStorage.setItem("AdminToken", `IsAdmin${this.cap}`)
      sessionStorage.setItem("guestToken", `guest${this.cap}`)
      sessionStorage.setItem("user", this.userName)
    }
    else {
        this.createCode()
        if (id == this.userID && pass == this.userPass) {
          this.router.navigate(["/home"])
          this._serv.setuser(this.userName)
          sessionStorage.setItem("user", `${this.userName}${this.cap}`)
        } else {
          this.Invalid = true
        }
      }
  }
}
