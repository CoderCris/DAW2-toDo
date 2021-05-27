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
  //event_state: string;

  constructor(private _eventService: EventServiceService, private router: Router) {

  }

  onSubmit(form: NgForm) {
  }

  ngOnInit(): void {
  }

  addEvent() {


    this.event_create = {
      name: this.event_name,
      state: "Queued",
      listed: true,
    }
    this._eventService.addEvent(this.event_create);
    this.router.navigate(['']); 
  }

  hasError() {
    return null;
  }

  cancel() {
    this.router.navigate(['']); 
  }

}
