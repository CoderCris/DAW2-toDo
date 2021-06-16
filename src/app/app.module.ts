import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event-list/event/event.component';

import { FormsModule } from '@angular/forms'; 
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ArchiveComponent } from './archive/archive.component';



//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EventCreationComponent } from './event-list/event-creation/event-creation.component';
import { EventEditComponent } from './event-list/event-edit/event-edit.component';
import { environment } from '../environments/environment';
//import { environment } from '../environments/environment.prod';
import { EventServiceService } from './event-service.service';
import { NgModel } from '@angular/forms';


//Angular Materials
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    EventCreationComponent,
    EventEditComponent,
    NavbarComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    
  ],
  providers: [EventServiceService],
  bootstrap: [AppComponent],
  entryComponents: [
    EventCreationComponent,
    EventEditComponent]
})
export class AppModule { }
