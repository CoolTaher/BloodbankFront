import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Name: any = "Blood Care"
  donor: any
  patient: any
  dlen: any;
  plen: any;
  load: any = true
  feedback = [
    { name: "Dishank Gawas",img:"https://www.save.life/site/themes/savelife/assets/images/testimonials/hamza.svg", add: "Bhandup,Mumbai", line: "We don't have to worry anymore for our emergencies. We simply request blood immediately get contacted by donors." },
  { name: "Ayush Bisth",img:"https://www.save.life/site/themes/savelife/assets/images/testimonials/ahsen.svg", add: "Dombivali,Mumbai", line: " Our hospital often uses Savelife Connect to handle blood transfusion emergencies. It is truly a great service. "},
  
]
feedback_2=[
  { name: "Mustafa Kagdi",img:"https://www.save.life/site/themes/savelife/assets/images/testimonials/mohammad.svg", add: "Mumbra,Dubai", line: "I regularly donate my blood to answer Savelife Connect blood requests. Very proud to contribute saving lives ! " },
  {name:"Suraj Shelke",img:"https://www.save.life/site/themes/savelife/assets/images/testimonials/ayesha.svg",add:"Dharavi,Gaon",line:"A member of my family needed blood but his blood type is quite hard to find. Savelife helped use figure it out in no time ! "}
]
constructor(private _serv: MainService) { }

ngOnInit(): void {
  this.donor = []
    this.patient = []
    this.getData()
    console.log("this.load", this.load);
}

getData(){
  this._serv.GetAPI().subscribe((res: any) => {
    console.log(res);
    this.filterData(res)
    this.load = false
  })
}
filterData(data: any){
  data.forEach((ele: any) => {
    if (ele.Type == "Donor") {
      this.donor.push(ele)
    }
    else {
      this.patient.push(ele)
    }
  });
  this.dlen = this.donor.length
  this.plen = this.patient.length
}
}
