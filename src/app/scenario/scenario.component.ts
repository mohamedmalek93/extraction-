import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Scenario } from '../model/scenario';
import { Observable } from 'rxjs/internal/Observable';
import { Step } from '../model/Step';
@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {
  scenarios :Scenario[];
  steps:Step[];
  constructor(private service:ServicesService) { }

  ngOnInit() {
    
      this.service.getEmployees()
        .subscribe( data => {
          this.scenarios= data;
        });
        console.log(JSON.stringify(this.service.getEmployees()));

}
getColor(i:number){
if(this.scenarios[i].result==="ERROR")
return "red";
else 
return "green" ;
}
getsteps(i:number){
  return this.scenarios[i].steps;
}
setsteps(i:number){
  this.steps= this.scenarios[i].steps;
}
getbut(i:number){
  if(this.scenarios[i].visible==="hidden")
  return "show less";
  else return "show more"
}
show(i:number){
  if(this.scenarios[i].visible==="visible")
  this.scenarios[i].visible="hidden";
  else 
  this.scenarios[i].visible="visible";
}
getvis(i:number){
  if(this.scenarios[i].visible==="hidden")
  return "";
  else return "none";
}
}