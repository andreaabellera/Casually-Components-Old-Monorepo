import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Button, SocialButton, Box, Card } from "casually-components/@angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Button,
    SocialButton,
    Box, 
    Card
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }