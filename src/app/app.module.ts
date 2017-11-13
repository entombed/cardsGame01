import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; //нужен для работы InputSwitchModule
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { Area01Component } from './area01/area01.component';
import { Area02Component } from './area02/area02.component';
import {PanelModule} from 'primeng/primeng';
import {DragDropModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng'; // переключатель

@NgModule({
  declarations: [
    AppComponent,
    Area01Component,
    Area02Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    PanelModule,
    AngularFontAwesomeModule,
    DragDropModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
