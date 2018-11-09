import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './database.component';
import { MdCardModule } from '@angular/material';

@NgModule({
	imports: [ CommonModule, DatabaseRoutingModule, MdCardModule ],
	declarations: [ DatabaseComponent ],
	bootstrap: [ DatabaseComponent ]
})
export class DatabaseModule {}
