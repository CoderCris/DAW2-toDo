import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private firestore: AngularFirestore) {
  }

  getEvents() {
    return this.firestore.collection('events').valueChanges({idField: 'eventId'});
  }

  addEvent(event: string): Promise<any> {
    return this.firestore.collection('events').add(event);
  }

  deleteEvents(eventId) {
    this.firestore.collection('events').doc(eventId).delete();
  }

}
