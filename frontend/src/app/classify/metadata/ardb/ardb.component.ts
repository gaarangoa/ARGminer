import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'classify-metadata-ardb',
  templateUrl: './ardb.component.html',
  styleUrls: ['./ardb.component.css']
})
export class ArdbComponent implements OnInit {

  public randomARG: Object;
  public render: boolean = false;

  constructor(
    private dataService: DataService,
  ) {
    
   }


  ngOnInit() {
    this.randomARG = this.dataService.ARG;
    if(this.randomARG['metadata'].status==true){ 
      this.render = true;
    }
  }

}
