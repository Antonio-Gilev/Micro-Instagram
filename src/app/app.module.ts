import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PhotoModule} from "./photos/photo.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PhotoModule,
    RouterModule.forRoot([

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
