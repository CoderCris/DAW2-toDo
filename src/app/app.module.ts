import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event-list/event/event.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EventCreationComponent } from './event-list/event-creation/event-creation.component';
import { EventEditComponent } from './event-list/event-edit/event-edit.component';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    EventCreationComponent,
    EventEditComponent
    /*AngularFireModule,
    AngularFirestoreModule*/
  ],
  imports: [
    BrowserModule
    //AppRoutingModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
