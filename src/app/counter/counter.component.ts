import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  clockHandler: number;
  currentTime: string = "";
  milisec: number;
  seconds:number;
  minutes: number;
  hours: number;

  stepsDiffrence: number;
  steps = [];

  getTime() 
  {
    this.milisec++;
      if( this.milisec >= 1000)
      { 
        this.milisec = 0;
        this.seconds++;
          if (this.seconds >= 60) 
          {
            this.seconds = 0;
            this.minutes++;
              if (this.minutes >= 60) 
              {
                this.minutes = 0;
                this.hours++;
              }
          }
      }
      return this.format(this.hours) + " : " + this.format(this.minutes) + " : " + this.format(this.seconds) + " : " + this.format(this.milisec);
 }

  format( _number: number)
  {
    if( _number < 10 )
    {
      return "0"+_number;
    }
    else
    {
      return _number;
    }
  }


  start(): void 
  {
    
      this.clockHandler = setInterval(function (parent) {
          this.currentTime = this.getTime();
      }.bind(this), 1);
  }

  stop(): void 
  {
    clearInterval(this.clockHandler);
  }

  step()
  {
    this.steps.push(this.currentTime);
  }

  reset()
  {
    stop();
    this.milisec = this.seconds = this.minutes = this.hours = 0;
    this.steps = [];
  }

  constructor() { }

  ngOnInit() 
  {
    this.milisec = this.seconds = this.minutes = this.hours = 0;
  }

}
