import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private firestore: AngularFirestore) {
  }

  getEvents(listed: boolean, order: string, orientation: any) {
    return this.firestore.collection('events', ref => ref.where('listed', '==', listed).orderBy(order, orientation)).valueChanges({idField: 'eventId'});
  }

  addEvent(event: string): Promise<any> {
    return this.firestore.collection('events').add(event);
  }

  deleteEvents(eventId) {
    this.firestore.collection('events').doc(eventId).delete();
  }
 
  changeEventList(eventId: any,listed: boolean) {
    if (listed) {
      this.firestore.collection('events').doc(eventId).update({
        listed: false,
      })
    } else {
      this.firestore.collection('events').doc(eventId).update({
        listed: true,
      })
    }
  }

  changeEventState(eventId, newState) {
    this.firestore.collection('events').doc(eventId).update({
      state: newState,
    })
  }

}
