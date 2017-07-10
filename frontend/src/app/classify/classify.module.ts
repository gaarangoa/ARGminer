import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ClassifyComponent } from './classify.component';
import { ClassifyRoutingModule } from './classify-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClassifyRoutingModule
  ],
  declarations: [
    ClassifyComponent,
  ],
  providers: [
  ]
})
export class ClassifyModule { }
