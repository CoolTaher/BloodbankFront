import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // https://bloodbankbackend.herokuapp.com/
  DB_url = 'https://bloodbankbackend.herokuapp.com/data/'
  match_DB='https://bloodbankbackend.herokuapp.com/match/'
  capCode:any="nothing"
  user:any="pranav"
  FindDonorID:any="pranav1234"
  data=[
    {name:"Pranav Patil",grp:"O+",uId:"pranav"},
    {name:"Taheer P",grp:"A+",uId:"pranav"},
    {name:" Dishank Gawas",grp:"A-",uId:"pranav"},
    {name:"Ayush Bisth",grp:"Ab-",uId:"pranav"},
    {name:"Mustafa Kagdi",grp:"B-",uId:"taheer"},
    {name:"Suraj Shelke",grp:"AB-",uId:"taheer"},
    {name:"Vishal Bhatt",grp:"O-",uId:"taheer"},
    {name:"Adam Taskin",grp:"A+",uId:"taheer"},
  ]

  UserLogin = [
    { name: "pranav", id: "pranav", pass: "1234",location:"Ghatkopar",FindDonorID:"pranav1234"},
    { name: "taheer", id: "taheer", pass: "1234",location:"Thane",FindDonorID:"taheer1234"},
    { name: "dishank", id: "dishank", pass: "1234",location:"Bhandup",FindDonorID:"dishank1234"},
    { name: "mustafa", id: "mustafa", pass: "1234",location:"Mumbra",FindDonorID:"mustafa1234"},
  ]

  FindDonor=[
    {FindDonorID:"pranav1234", RequestID:"pranav1234", Bloodgrp: "O+",Date:  "09/24/2021",Location: "Mumbai",Message: "test",Phone: 9324443237,PinCode: "400075",Reason: "Accident",Type: "AB Plasma",found:false},
    {FindDonorID:"pranav1234",RequestID:"pranav5678", Bloodgrp: "O+",Date:  "09/24/2021",Location: "Mumbai",Message: "test",Phone: 9324443237,PinCode: "400075",Reason: "Accident",Type: "AB Plasma",found:false},
    {FindDonorID:"dishank1234",RequestID:"dishank1234", Bloodgrp: "O+",Date:  "09/24/2021",Location: "Mumbai",Message: "test",Phone: 9324443237,PinCode: "400075",Reason: "Accident",Type: "AB Plasma",found:false},
  ]

  constructor(private http: HttpClient) { }

  setCap(data:any){
    this.capCode=data
  }
  getCap(){
    return this.capCode
  }
  setuser(data:any){
    this.user=data    
  }
  getuser(){
    return this.user
  }
  getFID(data:any){
    this.FindDonor=data
  }
  setFID(){
    return this.FindDonorID
  }

  GetAPI(){
    return this.http.get(this.DB_url)
  }
  GETmatchAPI(){
  return this.http.get(this.match_DB)
  }

  PostmatchAPI(data: any) {
    return this.http.post(this.match_DB, data)
  }

  PostAPI(data: any) {
    console.log("post called");
    return this.http.post(this.DB_url, data)
  }

  PutAPI(data:any,id:any){
return this.http.put(this.DB_url+id,data)
  }
}
