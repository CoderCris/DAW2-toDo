 import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/event-service.service';

import { error } from 'protractor';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor(private _eventService: EventServiceService,
    private router: Router,
    public dialogRef: MatDialogRef<EventCreationComponent>) {

  }

  onSubmit(form: NgForm) {
  }

  ngOnInit(): void {
  }

  addEvent() {
    
    this.event_create = {
      name: this.event_name,
      state: "queued",
      listed: true,
      date: new Date(),
    }
    this._eventService.addEvent(this.event_create);
    this.dialogRef.close();
  }

  hasError() {
    return null;
  }

  cancel() {
    this.dialogRef.close();
  }

}
