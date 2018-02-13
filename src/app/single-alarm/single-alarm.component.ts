import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Time } from '@angular/common';

@Component({
  selector: 'app-single-alarm',
  templateUrl: './single-alarm.component.html',
  styleUrls: ['./single-alarm.component.css']
})
export class SingleAlarmComponent implements OnInit {

  alarmTime: string;
  alarmDate: string;
  alarmData: Date;
  alarms = [];
  message: string;

  constructor() { 

  }

  setAlarm()
  {
    var now = Date.now();
    this.alarmData = new Date(this.alarmDate + " " + this.alarmTime);
    var intervalTime = +this.alarmData - now;
    var minutes = Math.floor(intervalTime / (1000*60)) % 60;
    var hours = Math.floor(intervalTime / (1000*60*60)) % 60;
    console.log("Alarm zadzwoni za " + hours + "h i " + minutes + "min");

    setTimeout(function() 
    {
      console.log("Mamy to dziwko");
    }, intervalTime);
  }

  ngOnInit() 
  {
    this.alarmData = new Date();
    this.alarmDate = this.alarmData.getDate.toString();
    this.alarmTime = this.alarmData.getTime.toString();
  }
}