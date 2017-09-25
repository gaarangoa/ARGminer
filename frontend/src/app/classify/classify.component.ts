import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

import {Message} from 'primeng/components/common/api';

@Component({
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})


export class ClassifyComponent implements OnInit {

  public randomARG: Object;
  public conflictingARGSubtype: Object;
  public render: Boolean;
  public loading: Boolean = false;
  public drawGenomes: Boolean = false;
  public searchIndex: number = 0;
  public conflictedArgSubtypeFlag: Boolean = false;
  public conflictedArgSubtypeGeneListCounter: number = 1;
  public conflictedArgSubtypeClassListCounter: number = 0;
  public inspectedGenes: Array<string>;
  public trainingGenes: Array<string>;
  public trainingARGFlag: Boolean = false;
  public trainingARGCount: number = 0;

  public notification: Message[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,

  ){
    
    this.trainingGenes = [
      "YP_490697.1",
      "AAM15533.1",
      "AAR84672.1",
      "P52067",
      "YP_042788",
      "YP_416138",
      "AAB53445.1",
      "F0JWD5",
      "A0A0D0NPG2",
      "A0A0E9C576"
    ]
    
    this.dataService.getRandomKnownARG()
      .subscribe(response =>{
        this.randomARG = this.dataService.ARG;
        this.render=true;
    });

  }


  ngOnInit() {
  }

  selectConflictedArgEvent($event){
    this.conflictedArgSubtypeFlag = $event.checked;
    this.trainingARGFlag = false;
    this.nextGene();
    if(this.conflictedArgSubtypeFlag){
      this.notification = [];
      this.notification.push({severity:'info', summary:'Message', detail:'Enabled Conflicted ARGs'});
    }
  }

  trainingARGEvent($event){
    // the conflicting ARGs cannot be enabled.
    this.conflictedArgSubtypeFlag = false;
    this.trainingARGCount = 0;
    this.trainingARGFlag = $event.checked;
    this.search(this.trainingGenes[this.trainingARGCount]);
    this.trainingARGCount+=1;

    if(this.trainingARGFlag){
      this.notification = [];
      this.notification.push({severity:'info', summary:'Message', detail:'Enabled Training Mode'});
    }
  }

  trainingARGNextGene(){
    if(this.trainingARGCount < this.trainingGenes.length){
      this.search(this.trainingGenes[this.trainingARGCount]);
      this.trainingARGCount+=1;
    }else{
      this.notification = [];
      this.notification.push({severity:'success', summary:'Message', detail:'End of Training'});
      this.trainingARGFlag = false;
    }
  }

  nextGeneConflictList(){
    this.randomARG['entry']['database'] = '-------------';
    this.randomARG['entry']['gene_id'] = '-------------';
    this.randomARG['entry']['subtype'] = '----------';
    this.randomARG['entry']['type'] = '--------------';
    this.randomARG['entry']['inspected'] = '------';
    this.randomARG['entry']['score'] = '------';
    this.loading = true;
    
    if(this.conflictedArgSubtypeFlag){

      if (this.conflictedArgSubtypeGeneListCounter >= this.conflictingARGSubtype['conflict'][this.conflictedArgSubtypeClassListCounter]['genes'].length ){
        this.conflictedArgSubtypeClassListCounter+=1;
        this.conflictedArgSubtypeGeneListCounter = 0;
        }

      if(this.conflictedArgSubtypeClassListCounter == this.conflictingARGSubtype['conflict'].length){
        this.conflictedArgSubtypeClassListCounter = 0;
        this.conflictedArgSubtypeGeneListCounter = 1;
        this.nextGene();
      }else{
        // console.log(this.conflictedArgSubtypeClassListCounter, this.conflictedArgSubtypeGeneListCounter)
        this.dataService.getKnownARGInfo( this.conflictingARGSubtype['conflict'][this.conflictedArgSubtypeClassListCounter]['genes'][this.conflictedArgSubtypeGeneListCounter] )
        .subscribe(res2=>{
          this.randomARG = this.dataService.ARG
          this.loading = false;
        });
        
        this.conflictedArgSubtypeGeneListCounter += 1;
      }
    }else{
      this.nextGene();
    }
  }

  nextGene(){
    this.randomARG['entry']['database'] = '-------------';
    this.randomARG['entry']['gene_id'] = '-------------';
    this.randomARG['entry']['subtype'] = '----------';
    this.randomARG['entry']['type'] = '--------------';
    this.randomARG['entry']['inspected'] = '------';
    this.randomARG['entry']['score'] = '------';
    this.loading = true;
    
    if(this.conflictedArgSubtypeFlag){
      this.dataService.getRandomConflictingArgSubtype()
        .subscribe(response => {
          this.conflictingARGSubtype = this.dataService.randomConflictingArgSubtype;
          // console.log(this.conflictingARGSubtype)
          // Then, select the first ARG
          this.dataService.getKnownARGInfo(this.conflictingARGSubtype['conflict'][0]['genes'][0])
            .subscribe(res2=>{
              this.randomARG = this.dataService.ARG
              this.loading = false;
          });
      });
    }else{
      this.dataService.getRandomKnownARG()
        .subscribe(response =>{
          this.randomARG = this.dataService.ARG
          // console.log(this.randomARG)
          this.loading = false;
      });
    }
  }

  search(argID: string){
    this.randomARG['entry']['database'] = '-------------';
    this.randomARG['entry']['gene_id'] = '-----------';
    this.randomARG['entry']['subtype'] = '-----------';
    this.randomARG['entry']['type'] = '--------------';
    this.randomARG['entry']['inspected'] = '-----';
    this.randomARG['entry']['score'] = '----';
    this.loading = true;

    this.dataService.searchAPI(argID, this.searchIndex.toString())
      .subscribe(response =>{
        // this.loading = false;
        this.dataService.getKnownARGInfo(response['entry']['gene_id'])
          .subscribe(res2=>{
            this.randomARG = this.dataService.ARG
            // console.log(this.randomARG)
            this.loading = false;
          })

    });

  }

  tabsEvent($event: any){
    this.drawGenomes = false;
    if($event.index == 2){
      this.drawGenomes = true;
    }
  }

}
