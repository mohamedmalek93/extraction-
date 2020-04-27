import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
@Input() name:string="machine a laver";
@Input() status:string="eteint";
  constructor() { }

  ngOnInit() {
  }
getstatus(){
  return this.status;
}

}
