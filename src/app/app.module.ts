import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event-list/event/event.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { EventCreationComponent } from './event-list/event-creation/event-creation.component';
import { EventEditComponent } from './event-list/event-edit/event-edit.component';



var firebaseConfig = {
  apiKey: "AIzaSyDtJ2JSLYxyZfyPdY5w10eSLsY5194yz1M",
  authDomain: "daw2-todo.firebaseapp.com",
  projectId: "daw2-todo",
  storageBucket: "daw2-todo.appspot.com",
  messagingSenderId: "228102906335",
  appId: "1:228102906335:web:8eaba5c2099332012d646a"
};


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    EventCreationComponent,
    EventEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
