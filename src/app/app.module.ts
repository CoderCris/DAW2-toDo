import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event-list/event/event.component';

import { FormsModule } from '@angular/forms'; 
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';



//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EventCreationComponent } from './event-list/event-creation/event-creation.component';
import { EventEditComponent } from './event-list/event-edit/event-edit.component';
import { environment } from '../environments/environment';
import { EventServiceService } from './event-service.service';
import { NgModel } from '@angular/forms';


//Angular Materials
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { MatFormFieldModule } from '@angular/material/form-field';
/*

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';


import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
*/



@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    EventCreationComponent,
    EventEditComponent,
    //NgModel,
    /*AngularFireModule,
    AngularFirestoreModule*/
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
    //MatFormFieldModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFirestoreModule
  ],
  providers: [EventServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
