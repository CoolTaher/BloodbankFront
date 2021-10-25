import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  DetailsForm: any
  Talert: any = false
  val: any;

  constructor(private _serv: MainService) { }

  ngOnInit(): void {
    this.getData()






    this.DetailsForm = new FormGroup({
      'Name': new FormControl(null, [Validators.required]),
      'Type': new FormControl(null, [Validators.required]),
      'Email': new FormControl(null, [Validators.required]),
      'Age': new FormControl(null, [Validators.required]),
      'Gender': new FormControl(null, [Validators.required]),
      'Bloodgrp': new FormControl(null, [Validators.required]),
      'Phone': new FormControl(null, [Validators.required, Validators.min(999999999), Validators.max(9999999999)])
    })
  }

  submit() {
    let name = this.DetailsForm.get('Name').value
    let type = this.DetailsForm.get('Type').value
    let email = this.DetailsForm.get('Email').value
    let age = this.DetailsForm.get('Age').value
    let gender = this.DetailsForm.get('Gender').value
    let bldgrp = this.DetailsForm.get('Bloodgrp').value
    let phn = this.DetailsForm.get('Phone').value

    var temp = { Name: name, Type: type, Email: email, Age: age, Gender: gender, Bloodgrp: bldgrp, Phone: phn, flag: false }
    this.nullEntry()
    this.Talert = true
    this._serv.PostAPI(temp).subscribe((res: any) => {
      console.log(res);
      this.val=res
      this.Talert =this.val.flag
      console.log(this.val.flag);
      this.getData()
    })
  }

  getData() {
    this._serv.GetAPI().subscribe((res: any) => {
      console.log(res);
    })
  }
  nullEntry() {
    // console.log(this.DetailsForm.valid);
    this.DetailsForm.get('Name').setValue('')
    this.DetailsForm.get('Type').setValue('')
    this.DetailsForm.get('Email').setValue('')
    this.DetailsForm.get('Age').setValue('')
    this.DetailsForm.get('Gender').setValue('')
    this.DetailsForm.get('Bloodgrp').setValue('')
    this.DetailsForm.get('Phone').setValue('')
  }

}
