import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../services/data.service';

import {Message} from 'primeng/components/common/api';
// import { HintService } from 'angular-custom-tour'

// import introJs  from "intro.js/intro.js";
// const IntroJs = require("intro.js/intro.js");

import { Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

// import instructions component for modal window
import { InstructionsComponent } from './instructions/instructions.component';


@Component({
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css'],
  providers: [
    // HintService
  ],
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
  public trainingARGTotal: number = 0;
  public MGE_display: boolean;
  public ARG_display: boolean;

  public notification: Message[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    public dialog: MdDialog,
    private activatedRoute: ActivatedRoute,

  ){}


    ngOnInit() {

        this.MGE_display = false;
        this.ARG_display = true;
        this.randomARG = {
        entry: {
            database: false,
        },
        };

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
            "A0A0E9C576",
            "AAN80811",
            "A0A0Q9QYU5",
            "ABC54722",
            "YP_001346278",
            "A0A0U9H4P4",
            "Q1RPS3",
            "J2LT98",
            "P52067",
            "D3V1W5"
          ]

        let _gene_id = this.activatedRoute.snapshot.params.gene_id;

        if (_gene_id) {
            console.log(_gene_id)
            this.dataService.getKnownARGInfo(_gene_id)
                .subscribe(res2 => {
                    this.randomARG = this.dataService.ARG
                    // console.log(this.randomARG)
                    this.loading = false;
                    this.render = true;
                    this.router.navigate(['/classify/', { gene_id: this.randomARG['entry']['gene_id'] }])
                });

        } else {
            this.dataService.getRandomKnownARG()
                .subscribe(response => {
                    this.randomARG = this.dataService.ARG;
                    this.render = true;
                    this.router.navigate(['/classify/', { gene_id: this.randomARG['entry']['gene_id'] }]);
                });
        }

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
      this.trainingARGTotal = 2;
    this.conflictedArgSubtypeFlag = false;
    this.trainingARGCount = 0;
    this.trainingARGFlag = $event.checked;
    this.search( this.trainingGenes[Math.floor(Math.random() * this.trainingGenes.length)] );
    this.trainingARGCount+=1;

    if(this.trainingARGFlag){
      this.notification = [];
      this.notification.push({severity:'info', summary:'Message', detail:'Enabled Training Mode'});
    }
  }

  trainingARGNextGene(){
    if(this.trainingARGCount < this.trainingARGTotal){
      this.search( this.trainingGenes[Math.floor(Math.random() * this.trainingGenes.length)] );
      this.trainingARGCount+=1;
      // console.log(this.trainingARGCount, this.trainingARGTotal)
    }else{
      this.notification = [];
      this.notification.push({severity:'success', summary:'End of Training', detail:'Training is done!'});
      this.notification.push({severity:'info', summary:'Get Reward', detail:'Click on <strong>Random ARG</strong> to start'});
      // this.notification.push({severity:'success', summary:'End of Training', detail:'You are ready to perform tasks with reward'});
      this.trainingARGFlag = false;
      this.nextGeneConflictList()
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
            this.router.navigate(['/classify/', {gene_id: this.randomARG['entry']['gene_id']}])
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
                this.router.navigate(['/classify/', {gene_id: this.randomARG['entry']['gene_id']}])
          });
      });
    }else{
      this.dataService.getRandomKnownARG()
        .subscribe(response =>{
          this.randomARG = this.dataService.ARG
          // console.log(this.randomARG)
            this.loading = false;
            this.router.navigate(['/classify/', {gene_id: this.randomARG['entry']['gene_id']}])
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
              this.router.navigate(['/classify/', {gene_id: this.randomARG['entry']['gene_id']}])
          })

    });

  }

  tabsEvent($event: any){
    this.drawGenomes = false;
    if($event.index == 2){
      this.drawGenomes = true;
    }
  }


  openInstructions(): void {
    let dialogRef = this.dialog.open(InstructionsComponent, {
      width: '80%',
      data: { train: 'three', animal: 'faa' }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });

  }

  scrollToMGEs(){
    // this.content.scrollTo(0, this.target.nativeElement.offsetTop, 500);
  }

}
