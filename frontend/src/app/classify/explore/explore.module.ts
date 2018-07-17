import { ExploreComponent } from './explore.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';

import { MaterialModule } from '@angular/material';
import { CompatibilityModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// primeng
import { PanelModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng';
import { StepsModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/components/progressbar/progressbar';
import { DataTableModule } from 'primeng/components/datatable/datatable';

import { ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import { DialogModule, ButtonModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';

import { ExploreRoutingModule } from './explore-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExploreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    BrowserModule,
    CompatibilityModule,
    MaterialModule,
    BrowserAnimationsModule,
    PanelModule,
    AutoCompleteModule,
    StepsModule,
    ConfirmDialogModule,
    DialogModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    GrowlModule,
    ProgressBarModule,
    DataTableModule
  ],
  declarations: [
    // ExploreComponent
  ],
  bootstrap: [
    ExploreComponent
  ],
  providers: [
    ConfirmationService
  ],
})
export class ExploreModule { }
