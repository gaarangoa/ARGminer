import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

import {Message} from 'primeng/components/common/api';
// import { HintService } from 'angular-custom-tour'

import introJs  from "intro.js/intro.js";
// const IntroJs = require("intro.js/intro.js");

import { Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

// import instructions component for modal window
import { InstructionsComponent } from './instructions/instructions.component'


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
  public trainingARGTotal: number = 2;

  public notification: Message[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    public dialog: MdDialog
    // public hintService: HintService

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
      this.notification.push({severity:'info', summary:'Get Reward', detail:'Click on <strong>Priority ARGs</strong> to start'});
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

  startTour(){
    // this.intro.start();
    // this.hintService.initialize({defaultPosition: 'bottom'});

    introJs.introJs().setOptions({
      steps: [
          {
            element: '#step1',
            intro: "<div class='text-center'><p class='small'>This panel contains the current annotation of the antibiotic resistance gene. This is the data you will have to validate or modify.</p> <p class='small'>*ARG stands for Antibiotic Resistance Gene.</p></div>",
            position: 'right'
          },
          // {
          //   element: '#step2',
          //   intro: "<div class='text-center'><p class='small'>This panel contains the current crowdsourcing score and the number of times the gene has been validated (if available).</p></div>",
          //   position: 'right'
          // },
          {
            element: '#step3',
            intro: "<div class='text-center'><p class=''>If this is the first time you visit this page, you need to perform at least two annotations (training). Once you done, you will be able start a real task.</p> </div>",
            position: 'right'
          },
          {
            element: '#step4',
            intro: "<div class='text-center'><p class=''> Select ARGs that are priority to curate in the system. Those ARGs contain conflicting annotations, e.g., the have two or more associated classes. </div>",
            position: 'right'
          },
          // {
          //   element: '#step5',
          //   intro: "<div class='text-center'><p class='small'>This search tool allow you to query for keywords and retrieve the associated genes.</p></div>",
          //   position: 'right'
          // },
          {
            element: '#step11',
            intro: "<div class='text-center'><h4>Microtasks</h4><p class='small'>This panel contains the three main tasks required for the annotation of Antibiotic Resistance Genes. In this panel you will have to add your findings by following simple questions.</p><p>The top panel will prompt the token number once you done the training. You need to insert this token into the Amazon Mturk form.</p></div>", 
            position: 'left'
          },
          {
            element: '#step12',
            intro: "<div class='text-center'><h4>Tips for success!</h4><p class='small'>Some tips to get a fast and right annotation.</p></div>", 
            position: 'right'
          },
          // {
          //   element: '#step6',
          //   intro: "<div class='text-center'><p class='small'>This panel contains the information from the UniProt database, including taxonomy, domains, functions and gene ontology annotation.</p></div>",
          //   position: 'right'
          // },
          {
            element: '#step7',
            intro: "<div class='text-center'><p class='small'>This section shows the query best hit compared to the CARD database. Please take a look at the description and scores.</p> </div>",
            position: 'right'
          },
          // {
          //   element: '#step8',
          //   intro: "<div class='text-center'><p class='small'>This panel contains the closest gene from the ARDB database. Pay attention at the different scroes, identity, coverage, evalue and bitscore. The query is definitely close to the gene found in the ARDB database (99% identity, 100% coverage).</p></div>",
          //   position: 'right'
          // },
          // {
          //   element: '#step9',
          //   intro: "<div class='text-center'><p class='small'>ARG best hit from the MegaRes database. This database contains hints about the Antibiotic Resistance Mechanism. </p></div>",
          //   position: 'left'
          // },
          {
            element: '#step10',
            intro: "<div class='text-center'><p class='small'>This panel comprsises evidence of the queried gene being transferred by a <strong>Mobile Genetic Elements</strong> such as plasmids, phages or viruses and evidence of the gene being hosted by <strong>pathogenic bacteria</strong>.</p> </div>",
            position: 'right'
          },
          
        ]
    }).start()
    .oncomplete(
        // this.nextGene()
    );
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