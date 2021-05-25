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

  constructor(firestore: AngularFirestore/*private eventService: EventServiceService*/){

    //this.events = firestore.collection('events').valueChanges({ idField: 'eventId' });
    this.events = firestore.collection('events').valueChanges();

  }

  ngOnInit(): void {
  }

  addEvent() {

  }

  editEvent() {

  }

  deleteEvent() {

  }

  cleanList() {

  }

  setOrderList() {

  }

  storeEvent() {

  }

  unstoreEvent() {

  }
}
