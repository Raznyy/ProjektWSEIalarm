import { Component, OnInit, Input} from '@angular/core';
import { alarm } from '../../classes/alarm';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlarmService } from '../../services/alarm.service'

@Component({
  selector: 'app-alarm-detail',
  templateUrl: './alarm-detail.component.html',
  styleUrls: ['./alarm-detail.component.css']
})
export class AlarmDetailComponent implements OnInit {

  @Input() alarm: alarm;
  

  constructor(
    private route: ActivatedRoute,
    private alarmService: AlarmService,
    private location: Location) 
  { }

  ngOnInit(): void {
    this.getAlarm();
  }
  

  getAlarm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.alarmService.getAlarm(id)
      .subscribe(alarm => this.alarm = alarm);
  }
}
