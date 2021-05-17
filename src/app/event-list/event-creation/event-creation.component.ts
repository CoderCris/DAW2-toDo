import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/event-service.service';
import { error } from 'protractor';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.scss']
})

@Input('ngModel')

export class EventCreationComponent implements OnInit {

  event_create: any;
  event_name: string;
  date: string;
  hour: string;
  minutes: string;

  submited: false;

  constructor(/*private _eventService: EventServiceService*/ private router: Router) {

    this.event_create = 'testo';

  }

  ngOnInit(): void {
  }

  addEvent() {


   /* this._eventService.addEvent('test').then(() => {
      console.log('good');
    }).catch(error => {
      console.log('error');
    })*/
    console.log('Aguacate');
  }

  cancel() {
    this.router.navigate(['']); 
  }

}
