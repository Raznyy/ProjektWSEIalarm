import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { SingleAlarmComponent } from './components/single-alarm/single-alarm.component';
import { CounterComponent } from './components/counter/counter.component';
import { CurrentTimeComponent } from './components/current-time/current-time.component';
import { AlarmDetailComponent } from './components/alarm-detail/alarm-detail.component';
import { AlarmService } from './services/alarm.service';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './services/notification.service';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    SingleAlarmComponent,
    CounterComponent,
    CurrentTimeComponent,
    AlarmDetailComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AlarmService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

