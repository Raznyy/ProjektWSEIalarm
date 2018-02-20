import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SingleAlarmComponent } from './components/single-alarm/single-alarm.component';
import { CounterComponent } from './components/counter/counter.component';
import { AlarmDetailComponent } from './components/alarm-detail/alarm-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/alarms', pathMatch: 'full' },
  { path: 'alarms', component: SingleAlarmComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'detail/:id', component: AlarmDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
