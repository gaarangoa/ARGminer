import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../../services/data.service';


@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  public randomARG: Object;
  public alCoverage: number;
  public render: boolean;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.render = false;
    this.randomARG = this.dataService.ARG;
    this.alCoverage = 100 * this.randomARG['besthit']['alignments'][0]['algn_length'] / this.randomARG['entry']['length'];
    if(this.randomARG['besthit']) {
      this.render = true;
    }
  }

}
