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
    return this.firestore.collection('events', ref => ref.where('listed', '==', listed)
      .orderBy(order, orientation))
      .valueChanges({ idField: 'eventId' });
  }

  getEvent(eventId) {
    return this.firestore.collection('events')
      .doc(eventId)
      .valueChanges();
  }

  addEvent(event: any){
    this.firestore.collection('events').add({
      name: "tuputamadre"
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    console.log('h');
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

  changeEventName(eventId, newName) {
    this.firestore.collection('events').doc(eventId).update({
      name: newName,
    })

  }

  TEST() {
    this.firestore.collection('test').add({
      name: "name",
    });
    console.log("aguacate");
  }

}
