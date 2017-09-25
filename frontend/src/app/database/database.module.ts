import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './database.component'



@NgModule({
  imports: [
    CommonModule,
    DatabaseRoutingModule,
  ],
  declarations: [
    DatabaseComponent
  ],
  bootstrap: [
    DatabaseComponent
  ]
})
export class DatabaseModule { }
