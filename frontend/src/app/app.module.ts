import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassifyComponent } from './classify/classify.component';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';
import { AboutComponent } from './about/about.component';

import { MaterialModule } from '@angular/material';

import { DataService } from '../services/data.service';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ClassifyComponent,
    HomeComponent,
    DatabaseComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
