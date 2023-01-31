import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Button } from "casually-components/@angular/Button";
import { SocialButton } from "casually-components/@angular/SocialButton";
import { Box } from "casually-components/@angular/Box";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Button, SocialButton, Box
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }