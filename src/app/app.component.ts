import { Component } from '@angular/core';
import {CoronaService} from './services/corona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid19Tracker';
  countries :any;
  country:any;
  confirmed:number;
  recovered:number;
  deaths:number;
  constructor(private corona:CoronaService){}
  ngOnInit(){
    this.corona.getCountries().subscribe((data)=>{
    this.countries=data;
    })
   
  } 
  getCoronaData(){
      this.corona.getCoronaRealTimeData(this.country).subscribe((data)=>{
        var index=data.length-1;
        this.confirmed=data[index].Confirmed;
        this.recovered=data[index].Recovered;
        this.deaths=data[index].Deaths;

      })
    }
    getCountry(country:any){
      this.country=country;
    }
}
