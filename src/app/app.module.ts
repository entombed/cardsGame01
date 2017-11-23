import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; //нужен для работы InputSwitchModule
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


import { AppComponent } from './app.component';
import { Area01Component } from './area01/area01.component';
import { Area02Component } from './area02/area02.component';
import {PanelModule} from 'primeng/primeng'; // акардион панель
import {DragDropModule} from 'primeng/primeng'; // перемещение объектов
import {ButtonModule} from 'primeng/primeng'; // кнопки
import {InputSwitchModule} from 'primeng/primeng'; // переключатель
import {InputTextareaModule} from 'primeng/primeng'; // text area
import {SidebarModule} from 'primeng/primeng'; // выпадающая панель

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
    InputSwitchModule,
    InputTextareaModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
