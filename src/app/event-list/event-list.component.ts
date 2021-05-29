  import { Component, OnInit } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EventServiceService } from '../event-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventCreationComponent } from './event-creation/event-creation.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Observable<any[]>;
  order: string;
  orientation: string;

  constructor(firestore: AngularFirestore, private _eventService: EventServiceService, private dialog: MatDialog){
    this.order = "state";
    this.orientation = "asc";
    this.events = this._eventService.getEvents(true, this.order, this.orientation);
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
    [this.order, this.orientation] = (<HTMLInputElement>document.getElementById("order_select")).value.split('-');
    console.log(this.order);
    console.log(this.orientation);
    this.events = this._eventService.getEvents(true, this.order, this.orientation);
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
      case 'finished':
        return 'red';
    }
  }

  dialogAdd() {
    this.dialog.open(EventCreationComponent);
  }
}
