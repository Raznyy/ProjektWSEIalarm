import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SingleAlarmComponent } from './single-alarm/single-alarm.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleAlarmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
