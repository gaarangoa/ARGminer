import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';
import { AboutComponent } from './about/about.component';

// APP modules
import { ClassifyModule } from './classify/classify.module'

// Visualization
import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

// Services
import { DataService } from '../services/data.service';
import { NcbiService } from '../services/ncbi.service';


import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabaseComponent,
    AboutComponent,
    jqxChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClassifyModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [
    DataService,
    NcbiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
