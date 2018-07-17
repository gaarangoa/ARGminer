import { ExploreModule } from './classify/explore/explore.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { DatabaseComponent } from './database/database.component';
import { AboutComponent } from './about/about.component';

// APP modules
import { ClassifyModule } from './classify/classify.module';
import { HomeModule } from './home/home.module';
import { DatabaseModule } from './database/database.module';

// import {NgCytoscapeModule} from "ng2-cytoscape/dist";

// Visualization
import {NgxChartsModule} from '@swimlane/ngx-charts';

// Services
import { DataService } from '../services/data.service';
import { NcbiService } from '../services/ncbi.service';
import { AdminService } from '../services/admin.service';


import 'hammerjs';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    // jqxChartComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClassifyModule,
    ExploreModule,
    DatabaseModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    NgxChartsModule,
    ReactiveFormsModule,
    MdInputModule,
    // NgCytoscapeModule
  ],
  providers: [
    DataService,
    NcbiService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
