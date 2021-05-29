  import { Component, OnInit } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Observable<any[]>;
  order: string;

  constructor(firestore: AngularFirestore, private _eventService: EventServiceService){
    this.order = "name";
    this.events = this._eventService.getEvents(this.order, true);
  }

  ngOnInit(): void {
  }

  editEvent() {

  }

  deleteEvent(eventId) {
    this._eventService.deleteEvents(eventId);
  }

  setEventState(eventId, state) {
    //console.log((<HTMLInputElement>document.getElementById("state_select")).value);
    //this._eventService.changeEventState(eventId, (<HTMLInputElement>document.getElementById("state_select")).value);
    this._eventService.changeEventState(eventId, state); 
  }


  setOrderList() {
    this.order = (<HTMLInputElement>document.getElementById("order_select")).value;
    this.events = this._eventService.getEvents(this.order, true);
  }

  archiveEvent(eventId) {
    this._eventService.changeEventList(eventId, true);
  }

  getColor(state) {
    switch (state) {
      case 'queued':
        return '#e6e307';
      case 'working':
        return 'green';
      case 'terminated':
        return 'red';
    }
  }
}
