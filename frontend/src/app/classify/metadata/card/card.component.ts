import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'classify-metadata-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public randomARG: Object;

  constructor(
    private dataService: DataService,
  ) {
    
   }


  ngOnInit() {
    this.randomARG = this.dataService.ARG;
  }

}
