import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventCreationComponent } from './event-list/event-creation/event-creation.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  { path: '', redirectTo: 'event-list', pathMatch: 'full'},
  { path: 'event-list', component: EventListComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'event-creation', component: EventCreationComponent }
  //{ path: '**', redirectTo: 'list-empleados', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
