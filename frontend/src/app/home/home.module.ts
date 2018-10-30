import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';
import { DatabaseComponent } from './database/database.component'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    NewsComponent,
    DatabaseComponent
  ]
})
export class HomeModule { }
