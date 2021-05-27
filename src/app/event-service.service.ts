import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private firestore: AngularFirestore) {
  }

  getListedEvents() {
    return this.firestore.collection('events', ref => ref.where('listed', '==', true)).valueChanges({idField: 'eventId'});
  }

  getArchivedEvents() {
    return this.firestore.collection('events').valueChanges({ idField: 'eventId' });
  }


  addEvent(event: string): Promise<any> {
    return this.firestore.collection('events').add(event);
  }

  deleteEvents(eventId) {
    this.firestore.collection('events').doc(eventId).delete();
  }

  changeEventState(eventId) {

  }

  changeEventList(eventId) {
    this.firestore.collection('events').doc(eventId).update({
      listed: !this.firestore.collection('events').doc(eventId).valueChanges({idField: 'listed'}), 
    })
  }

}
