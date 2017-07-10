import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';


@Component({
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})


export class ClassifyComponent implements OnInit {

  public randomARG: Object;
  public render: Boolean;

  constructor(
    private dataService: DataService,
    private router: Router,

  ){
    
    this.dataService.getRandomKnownARG()
      .subscribe(response =>{
        this.randomARG = this.dataService.ARG;
        this.render=true;
        console.log(this.randomARG)
    });

  }


  ngOnInit() {
    
  }

  nextGene(){
    this.randomARG['entry']['database'] = '--------';
    this.randomARG['entry']['gene_id'] = '--------';
    this.randomARG['entry']['subtype'] = '----';
    this.randomARG['entry']['type'] = '----';
    this.randomARG['entry']['inspected'] = '----';
    this.randomARG['entry']['score'] = '----';
    
    this.dataService.getRandomKnownARG()
      .subscribe(response =>{
        this.randomARG = this.dataService.ARG
        console.log(this.randomARG)
    });
  }

  getARG(argID: string){
    this.randomARG['entry']['database'] = '--------';
    this.randomARG['entry']['gene_id'] = '--------';
    this.randomARG['entry']['subtype'] = '----';
    this.randomARG['entry']['type'] = '----';
    this.randomARG['entry']['inspected'] = '----';
    this.randomARG['entry']['score'] = '----';

    this.dataService.getKnownARGInfo(argID)
      .subscribe(response =>{
        this.randomARG = this.dataService.ARG
        console.log(this.randomARG)
        
    });
  }

}
