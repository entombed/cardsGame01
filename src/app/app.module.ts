import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Area01Component } from './area01/area01.component';
import { Area02Component } from './area02/area02.component';
//import {AccordionModule} from 'primeng/primeng';
//import {AccordionModule} from 'primeng/components/accordion/accordion';

@NgModule({
  declarations: [
    AppComponent,
    Area01Component,
    Area02Component
  ],
  imports: [
    BrowserModule
//    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
