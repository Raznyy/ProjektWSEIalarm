import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {

  clockHandler:number;
  time: number;

  getTime()
  {
    var date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map(current => current >= 10 ? current : "0" + current).join(":");
  }

  constructor() { }

  ngOnInit() 
  {
    this.clockHandler = setInterval(function (parent) {
      this.time = this.getTime();
    }.bind(this), 1);
  }

}
