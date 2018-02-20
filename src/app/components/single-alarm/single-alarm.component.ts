import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Time } from '@angular/common';
import { alarm } from '../../classes/alarm';
import { AlarmService } from '../../services/alarm.service';
import { NotificationService } from '../../services/notification.service';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-single-alarm',
  templateUrl: './single-alarm.component.html',
  styleUrls: ['./single-alarm.component.css']
})
export class SingleAlarmComponent implements OnInit {

  selectedAlarm: alarm;
  alarms: alarm[];
  
  constructor(
    private AlarmService: AlarmService,
    private notificationService: NotificationService
  ) { 

  }

  ngOnInit() 
  {
    this.AlarmService.getAlarms().subscribe(alarms => this.alarms = alarms);
  }

  setAlarm()
  {
    this.AlarmService.setAlarm();
  }

  removeAlarm(id:number)
  {
    this.AlarmService.removeAlarm(id);
  }

  getAlarms(): void 
  {
    this.AlarmService.getAlarms().subscribe(alarms => this.alarms = alarms);
  }

}