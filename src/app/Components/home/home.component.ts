import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count: any
  data: any
  user: any
  userName: any;
  constructor(private _serv: MainService) { }

  ngOnInit(): void {
    this.user = []
    this.data = this._serv.data
    this.userName = this._serv.getuser()

    this.userCheck()


  }
  userCheck() {
    this.data.forEach((ele: any) => {
      if (this.userName == ele.uId) {
        this.user.push(ele)
      }
    });

  }
}
