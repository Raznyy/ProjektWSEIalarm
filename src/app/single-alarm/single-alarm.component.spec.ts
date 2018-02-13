import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAlarmComponent } from './single-alarm.component';

describe('SingleAlarmComponent', () => {
  let component: SingleAlarmComponent;
  let fixture: ComponentFixture<SingleAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
