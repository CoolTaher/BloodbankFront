import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  donor:any
  patient:any
  load:any=true

  constructor(private _serv:MainService) { }

  ngOnInit(): void {
    this.donor=[]
    this.patient=[]
    this.getData()
  }
  getData(){
    this._serv.GetAPI().subscribe((res:any)=>{console.log(res);
      this.filterData(res)
      this.load=false
    })
  }
  filterData(data:any){
   data.forEach((ele:any) => {
     if(ele.Type=="Donor"){
       this.donor.push(ele)
     }
     else{
       this.patient.push(ele)
     }
   });
   
  }
}
