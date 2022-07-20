import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotoListComponent} from "./photoList/photo-list.component";
import {PhotoDetailComponent} from "./photoDetails/photo-detail.component";
import {RouterModule} from "@angular/router";
import { PhotoEditComponent } from './photoEdit/photo-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PhotoAddComponent} from "./photoAdd/photo-add.component";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {PhotoData} from "./photo-data";




@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoDetailComponent,
    PhotoEditComponent,
    PhotoAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'photos', component: PhotoListComponent},
      {path: 'photos/add', component: PhotoAddComponent},
      {path: 'photos/:id', component: PhotoDetailComponent},

      {path: 'photos/:id/edit', component: PhotoEditComponent},
      {path: '', redirectTo: 'photos', pathMatch: 'full'},
      {path: '**', redirectTo: 'photos', pathMatch: 'full'}
    ]),
    ReactiveFormsModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(PhotoData)
  ]
})
export class PhotoModule { }
