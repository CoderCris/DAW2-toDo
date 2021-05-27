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

  constructor(firestore: AngularFirestore, private _eventService: EventServiceService){
    this.events = this._eventService.getListedEvents();
  }

  ngOnInit(): void {
  }

  editEvent() {

  }

  deleteEvent(eventId) {
    this._eventService.deleteEvents(eventId);
  }


  setOrderList() {

  }

  archiveEvent(eventId) {
    this._eventService.changeEventList(eventId);
  }
}
