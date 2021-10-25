import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  DetailsForm: any
  Talert: any
  UserName: any;
  userLogin: any
  FindDonor: any
  reqMade: any
  FindDonorID: any;
  date:any
  today:any
  constructor(private _serv: MainService) { }

  ngOnInit(): void {
    
    this.date=moment().format('L');
    let month=this.date.slice(0, 2)
    let day=this.date.slice(3, 5)
    let year=this.date.slice(6,10)
this.today=`${day}/${month}/${year}`

    console.log();
    this.getdata()
    this.userLogin = []
    

    this.DetailsForm = new FormGroup({
      'Type': new FormControl(null, [Validators.required]),
      'Bloodgrp': new FormControl(null, [Validators.required]),
      'Reason': new FormControl(null, [Validators.required]),
      'Location': new FormControl(null, [Validators.required]),
      'PinCode': new FormControl(null, [Validators.required]),
      'Message': new FormControl(null, [Validators.required]),
      'Phone': new FormControl(null, [Validators.required, Validators.min(999999999), Validators.max(9999999999)])
    })
  }

  submit() {
    let token=`${this.UserName}${Math.floor(Math.random()*100000000)}`

    let Type = this.DetailsForm.get('Type').value
    let Bloodgrp = this.DetailsForm.get('Bloodgrp').value
    let Reason = this.DetailsForm.get('Reason').value
    let Location = this.DetailsForm.get('Location').value
    let PinCode = this.DetailsForm.get('PinCode').value
    let Message = this.DetailsForm.get('Message').value
    let Phone = this.DetailsForm.get('Phone').value
    let temp = {FindDonorID:this.FindDonorID,RequestID:token, Type: Type, Bloodgrp: Bloodgrp, Reason: Reason,Date:this.today, Location: Location, PinCode: PinCode, Message: Message, Phone: Phone,found:false }
    console.log(temp);
   this._serv.FindDonor.push(temp)
    this.getdata()
  }

  getdata() {
    this.FindDonor = []
    this.reqMade = []
    this.UserName = this._serv.getuser()
    this.userLogin = this._serv.UserLogin
    this.FindDonor = this._serv.FindDonor
    this.Reqmade()
  }
  Reqmade() {
    this.userLogin.forEach((ele: any) => {
      if (this.UserName == ele.name) {
          this.FindDonor.forEach((val: any) => {
            if (ele.FindDonorID == val.FindDonorID) {
              this.FindDonorID=val.FindDonorID
              this.reqMade.push(val)
            }
          });
      }
    });
    console.log(this.reqMade);
    
  }
}
