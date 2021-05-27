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

  constructor(private _eventService: EventServiceService) {
    this.events = this._eventService.getArchivedEvents();
  }

  ngOnInit(): void {
  }

  deleteEvent(eventId) {
    this._eventService.deleteEvents(eventId);
  }

  restoreEvent(eventId) {
    this._eventService.changeEventList(eventId);
  }

}
