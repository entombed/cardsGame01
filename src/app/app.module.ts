import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { Area01Component } from './area01/area01.component';
import { Area02Component } from './area02/area02.component';
import {PanelModule} from 'primeng/primeng';
import {DragDropModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    Area01Component,
    Area02Component
  ],
  imports: [
    BrowserModule,
    PanelModule,
    AngularFontAwesomeModule,
    DragDropModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
