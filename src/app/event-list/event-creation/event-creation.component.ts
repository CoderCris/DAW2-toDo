import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/event-service.service';
import { error } from 'protractor';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.scss']
})
export class EventCreationComponent implements OnInit {

  constructor(private _eventService: EventServiceService) {


  }

  ngOnInit(): void {
  }

  addEvent() {
    this._eventService.addEvent('test').then(() => {
      console.log('good');
    }).catch(error => {
      console.log('error');
    })
  }

}
