import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  events: Observable<any[]>;
  order: string;
  orientation: string;

  constructor(private _eventService: EventServiceService) {
    this.order = "state";
    this.orientation = "asc"
    this.events = this._eventService.getEvents(false, this.order, this.orientation);
  }

  ngOnInit(): void {
  }

  deleteEvent(eventId) {
    this._eventService.deleteEvents(eventId);
  }

  restoreEvent(eventId) {
    this._eventService.changeEventList(eventId, false);
  }

  setOrderList() {
    [this.order, this.orientation]= (<HTMLInputElement>document.getElementById("order_select")).value.split('-');
    this.events = this._eventService.getEvents(false, this.order, this.orientation);
    console.log(this.order);
    return null;
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
}
