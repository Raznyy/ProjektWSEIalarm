import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  notifications: String[] = [];

  constructor() { }

  add(notification: string) {
    this.notifications.push(notification);
  }

  clear() {
    this.notifications = [];
  }
}
