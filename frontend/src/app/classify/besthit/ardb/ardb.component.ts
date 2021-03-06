import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'besthit-metadata-ardb',
  templateUrl: './ardb.component.html',
  styleUrls: ['./ardb.component.css']
})
export class BestHitArdbComponent implements OnInit {

  public randomARG: any;
  public alCoverage: number;
  public render: boolean;

  constructor(
    private dataService: DataService,
  ) {

   }


  ngOnInit() {
    this.render = false;
    this.randomARG = this.dataService.ARG;
    this.alCoverage = 100 * this.randomARG['besthit']['alignments'][0]['algn_length'] / this.randomARG['entry']['length'].toFixed(0)
    if(this.randomARG['besthit']){
      this.render = true;
    }

  }

}
