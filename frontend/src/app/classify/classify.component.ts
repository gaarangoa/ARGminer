import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})


export class ClassifyComponent implements OnInit {

  public randomARG: Object;

  constructor(
    private dataService: DataService,
  ){
    
    this.dataService.getRandomKnownARG()
      .subscribe(response =>{
        this.randomARG = this.dataService.ARG
        console.log(this.randomARG)
    });

  }


  ngOnInit() {
    
  }


}
