import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private firestore: AngularFirestore) {
  }

  addEvent(event: any) {
    return this.firestore.collection('events').add(event);
  }

}
