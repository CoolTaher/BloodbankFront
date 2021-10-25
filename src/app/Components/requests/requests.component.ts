import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
Bloodreq:any
  constructor(private _serv:MainService) { }

  ngOnInit(): void {
    this.Bloodreq=[]
this.getdata()
  }
  getdata(){
    this.Bloodreq=this._serv.FindDonor
  }

}
