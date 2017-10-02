import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

// modal reference
import { ClassifyComponent } from '../classify.component'

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})

export class InstructionsComponent {

  constructor(
    public dialogRef: MdDialogRef<ClassifyComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
