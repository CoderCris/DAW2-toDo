import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/event-service.service';
import { error } from 'protractor';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.scss']
})

@Input('ngModel')

export class EventCreationComponent {
  @ViewChild('f') eventForm: NgForm;

  event_create: any;
  event_name: string;
  date: string;
  hour: string;
  minutes: string;

  submited: false;

  constructor(/*private _eventService: EventServiceService*/ private router: Router) {

    this.event_create = 'testo';

  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.eventForm);
  }

  ngOnInit(): void {
  }

  addEvent() {


   /* this._eventService.addEvent('test').then(() => {
      console.log('good');
    }).catch(error => {
      console.log('error');
    })*/
    console.log(this.event_name);
    console.log(this.minutes);
    console.log(this.hour);
  }

  hasError() {
    return null;
  }

  cancel() {
    this.router.navigate(['']); 
  }

}
