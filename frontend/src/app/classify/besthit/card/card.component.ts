import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'besthit-metadata-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class BestHitCardComponent implements OnInit {

  public randomARG: Object;
  public alCoverage: number;
  public render: boolean = false;

  constructor(
    private dataService: DataService,
  ) {
    
   }


  ngOnInit() {
    this.randomARG = this.dataService.ARG;
    this.alCoverage = 100*this.randomARG['besthit']['alignments'][0]['algn_len']/this.randomARG['entry']['length'].toFixed(0)
    // console.log(this.alCoverage)
    if(this.randomARG['besthit'].status == true){
      this.render = true;
    }
  }

}
