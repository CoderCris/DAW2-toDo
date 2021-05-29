import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventServiceService } from 'src/app/event-service.service';
import { Observable } from 'rxjs';
import { EventListComponent } from '../event-list.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  event_name: string;

  constructor(private _eventService: EventServiceService,
    public dialogRef: MatDialogRef<EventEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventListComponent) {
  }

  onSubmit(form: NgForm) {
  }

  ngOnInit(): void {

  }

  editEvent() {
    this._eventService.changeEventName(this.data.toString(), this.event_name)
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();

  }

}
