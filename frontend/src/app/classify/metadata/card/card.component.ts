import { Component, OnInit } from '@angular/core';

import { ClassifyComponent } from '../../classify.component';

@Component({
  selector: 'classify-metadata-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public randomARG: Object;

  constructor(
    private classifyComponent: ClassifyComponent
  ) {
    
   }


  ngOnInit() {
    this.randomARG = this.classifyComponent.randomARG;
    
  }

}
