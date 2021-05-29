import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private firestore: AngularFirestore) {
  }

  getEvents(order: string, listed: boolean) {
    return this.firestore.collection('events', ref => ref.where('listed', '==', listed).orderBy(order, 'asc')).valueChanges({idField: 'eventId'});
  }

  addEvent(event: string): Promise<any> {
    return this.firestore.collection('events').add(event);
  }

  deleteEvents(eventId) {
    this.firestore.collection('events').doc(eventId).delete();
  }
 
  changeEventList(eventId) {
    this.firestore.collection('events').doc(eventId).update({
      listed: !this.firestore.collection('events').doc(eventId).valueChanges({idField: 'listed'}), 
    })
  }

}
