import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  donor: any
  patient: any
  matchPair: any
  load: any = true
  table = [
    ["true", "true", "true", "true", "true", "true", "true", "true",],
    ["true", "false", "true", "false", "true", "false", "true", "false",],
    ["true", "true", "false", "false", "true", "true", "false", "false",],
    ["true", "false", "false", "false", "true", "false", "false", "false",],
    ["true", "true", "true", "true", "false", "false", "false", "false",],
    ["true", "false", "true", "false", "false", "false", "false", "false",],
    ["true", "true", "false", "false", "false", "false", "false", "false",],
    ["true", "false", "false", "false", "false", "false", "false", "false",],
  ]
  rev = ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"]
  don = ["O-", "O+", "B-", "B+", "A-", "A+", "AB-", "AB+"]

  constructor(private _serv: MainService) { }

  ngOnInit(): void {
    this.matchPair = []
    this.donor = []
    this.patient = []
    this.getData()
    this.getMatchData()


  }

  match() {
    this.patient.forEach((ele: any) => {
      if (!ele.flag) {
        this.donor.forEach((val: any) => {
          if (!val.flag) {
            let i = this.rev.indexOf(ele.Bloodgrp)
            let j = this.don.indexOf(val.Bloodgrp)
            if (this.table[i][j] == "true") {
              var temp = {
                DName: val.Name, RName: ele.Name, DEmail: val.Email, REmail: ele.Email, DType: val.Type, RType: ele.Type,
                DBloodgrp: val.Bloodgrp, RBloodgrp: ele.Bloodgrp, DGender: val.Gender, RGender: ele.Gender, DAge: val.Age,
                RAge: ele.Age, DPhone: val.Phone, RPhone: ele.Phone, flag: false
              }
              ele.flag = true
              val.flag = true


              this._serv.PostmatchAPI(temp).subscribe((res: any) => {
                this._serv.PutAPI(ele, ele._id).subscribe((res1: any) => {})
                this._serv.PutAPI(val, val._id).subscribe((res2: any) => {})
                this.getMatchData()
              })
            }
          }
        });
      }
    });
  }



  getData() {
    this._serv.GetAPI().subscribe((res: any) => {
      this.filterData(res)
      this.load = false
      this.match()
    })
  }
  getMatchData() {
    this._serv.GETmatchAPI().subscribe((res: any) => {
      this.matchPair = res
    })
  }
  filterData(data: any) {
    data.forEach((ele: any) => {
      if (ele.Type == "Donor") {
        this.donor.push(ele)
      }
      else {
        this.patient.push(ele)
      }
    });

  }

}
