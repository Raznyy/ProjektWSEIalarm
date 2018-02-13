import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SingleAlarmComponent } from './single-alarm/single-alarm.component';
import { CounterComponent } from './counter/counter.component';
import { CurrentTimeComponent } from './current-time/current-time.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleAlarmComponent,
    CounterComponent,
    CurrentTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

