import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'besthit-metadata-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class BestHitCardComponent implements OnInit {

  public randomARG: Object;
  public alCoverage: any;

  constructor(
    private dataService: DataService,
  ) {
    
   }


  ngOnInit() {
    this.randomARG = this.dataService.ARG;
    // console.log(this.randomARG)
  }

}
