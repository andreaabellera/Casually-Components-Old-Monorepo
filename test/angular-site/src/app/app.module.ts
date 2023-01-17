import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { CasuallyButton } from './button';
import { CasuallyButton } from "casually-components/@angular/button";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CasuallyButton
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
