import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Button, SocialButton, Box } from "casually-components/@angular/all";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Button,
    SocialButton,
    Box
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }