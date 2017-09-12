import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../../services/data.service';


@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  public randomARG: Object;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.randomARG = this.dataService.ARG;
  }

}
