import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'besthit-metadata-ardb',
  templateUrl: './ardb.component.html',
  styleUrls: ['./ardb.component.css']
})
export class BestHitArdbComponent implements OnInit {

  public randomARG: Object;

  constructor(
    private dataService: DataService,
  ) {
    
   }


  ngOnInit() {
    this.randomARG = this.dataService.ARG;
  }

}
