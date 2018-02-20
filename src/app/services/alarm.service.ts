import { Injectable } from '@angular/core';
import { alarm } from './../classes/alarm';
import { Alarms } from './../mock-alarms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { NotificationService } from './notification.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AlarmService {

  alarmId: number;
  alarmTime: string;
  alarmDate: string;
  alarmData: Date;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) { }

  getAlarms(): Observable<alarm[]> 
  {
    var currentAlarms = JSON.parse(localStorage.getItem('added-alarms'));
    if (currentAlarms != null)
    {
      for(var id in currentAlarms.alarms) 
      {
        var _id = Number(id);
        Alarms.push({ 'alarmId': _id, 'alarmTime': '17:55' , 'alarmDate': '2018-11-02'});
      }
    }
    console.log(Alarms);
    return of(Alarms);
  }

  getAlarm(id: number): Observable<alarm> 
  {
    this.notificationService.add(" COS COS ");
    return of(Alarms.find(alarm => alarm.alarmId === id));
  }

  alarmEnd(id: number)
  {
    this.notificationService.add('Koniec alarmu no.' + id);
    var currentAlarms = JSON.parse(localStorage.getItem('added-alarms'));
    delete currentAlarms.alarms[id];
    delete Alarms[id];
    localStorage.setItem(  'added-alarms' ,  JSON.stringify(currentAlarms) );
  }

  private log(notification: string) {
    this.notificationService.add('Alarms : ' + notification);
  }

  removeAlarm(id:number)
  {
    var currentAlarms = JSON.parse(localStorage.getItem('added-alarms'));
    console.log(currentAlarms);
    delete currentAlarms.alarms[id];
    delete Alarms[id];
    localStorage.setItem(  'added-alarms' ,  JSON.stringify(currentAlarms) );
    console.log(currentAlarms);
  }


  setAlarm()
  {
    var storageId: number;
    var currentAlarms = JSON.parse(localStorage.getItem('added-alarms'));
    if (currentAlarms != null)
    {
      storageId = currentAlarms.alarms.length;
      this.alarmId = storageId;
    }
    else
    {
      currentAlarms = JSON.parse('{ "alarms": []}');
      storageId = 0;
      this.alarmId = 1;
    }

    Alarms.push( { 'alarmId': storageId, 'alarmTime': '17:55' , 'alarmDate' : '2018-11-02'} );

    currentAlarms.alarms.push("{alarmId:"+storageId.toString()+",alarmTime:12:22,alarmDate:2018-11-05}");

    localStorage.setItem(  'added-alarms' ,  JSON.stringify(currentAlarms) );

    var now = Date.now();
    this.alarmData = new Date(this.alarmDate + " " + this.alarmTime);
    var intervalTime = +this.alarmData - now;
    var minutes = Math.floor(intervalTime / (1000*60)) % 60;
    var hours = Math.floor(intervalTime / (1000*60*60)) % 60;
    console.log("Alarm zadzwoni za " + hours + "h i " + minutes + "min");
    setTimeout(()=>{  
        this.alarmEnd(this.alarmId);
    },3000);
  }
  

}
