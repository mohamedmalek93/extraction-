import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { Scenario } from './model/scenario';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  getEmployees():Observable<Scenario[]>
  {const requestOptions: Object = {
    /* other options here */
    responseType: 'text'
  }
    console.log("test callserviiiiiiiiiiiiiiiiiiiice");
    return this.http.get<Scenario[]>('http://localhost:8085/scenarios' );
  }

}
