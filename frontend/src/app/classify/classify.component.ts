import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

import {Message} from 'primeng/components/common/api';
// import { HintService } from 'angular-custom-tour'

import introJs  from "intro.js/intro.js";
// const IntroJs = require("intro.js/intro.js");

@Component({
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css'],
  providers: [
    // HintService
  ]
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
      "P52067"
    ]
    
    this.dataService.getKnownARGInfo('A0A127SI91')
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
          {
            element: '#step2',
            intro: "<div class='text-center'><p class='small'>This panel contains the current crowdsourcing score and the number of times the gene has been validated (if available).</p></div>",
            position: 'right'
          },
          {
            element: '#step3',
            intro: "<div class='text-center'><p class='small'>If you are a new user, it is recomended to do first a small training where you will have to annotate a set of genes. This data will score your performance.</p></div>",
            position: 'right'
          },
          {
            element: '#step4',
            intro: "<div class='text-center'><p class='small'>Some genes have been identified to be annotated to multiple categories. These genes have priority for the annotation process. These are the most relevant subset of genes that has to be resolved first.</p></div>",
            position: 'right'
          },
          {
            element: '#step5',
            intro: "<div class='text-center'><p class='small'>This search tool allow you to query for keywords and retrieve the associated genes.</p></div>",
            position: 'right'
          },
          {
            element: '#step6',
            intro: "<div class='text-center'><p class='small'>This panel contains the information from the UniProt database, including taxonomy, domains, functions and gene ontology annotation.</p></div>",
            position: 'right'
          },
          {
            element: '#step7',
            intro: "<div class='text-center'><p class='small'>This section shows the query best hit compared to the CARD database. Please take a look at the description and scores.</p> <p>In the example, the closest gene from CARD has an identity of 70% wich over a 98% coverage which makes the alignment statistically significant (evalue=2.9e-161). This score guarantee a correct classification at the <strong>antibiotic resitance class</strong> level (Beta-Lactamase) </p></div>",
            position: 'right'
          },
          {
            element: '#step8',
            intro: "<div class='text-center'><p class='small'>This panel contains the closest gene from the ARDB database. Pay attention at the different scroes, identity, coverage, evalue and bitscore. The query is definitely close to the gene found in the ARDB database (99% identity, 100% coverage). Therefore, it is clear that the gene is a Beta-Lactamase and its very likely that the <strong>Antibiotic Resistance Gene</strong> is a <strong>BL1-EC</strong>. The Antimicrobial Resistance (AMR) profile from the ARDB database suggests its <strong>Antibiotic Resistance Mechanism</strong> as a Beta-lactamse class C. </p></div>",
            position: 'right'
          },
          {
            element: '#step9',
            intro: "<div class='text-center'><p class='small'>ARG best hit from the MegaRes database. This database contains hints about the Antibiotic Resistance Mechanism. From the previous results, we know the gene is a beta-lactamase and corresponds to the gene BL1-EC. The MegaRes database give us also hints about the <strong>Antibiotic Resistance Mechanism</strong>: Class C beta-lactamase, which is the same as shown by the ARDB database.</p></div>",
            position: 'left'
          },
          {
            element: '#step10',
            intro: "<div class='text-center'><p class='small'>This panel comprsises evidence of the queried gene being transferred by a <strong>Mobile Genetic Elements</strong> such as plasmids, phages or viruses and evidence of the gene being hosted by <strong>pathogenic bacteria</strong>.</p> <p>In the example, the queried gene has been found in 5 plasmids. The alignments show an identity of 66% with a standard deviation of 14, making the alignments statistical significative. We can conclude that there is enough evidence that the gene has been transferred by MGEs.</p> <p>On the other hand, the evidence also suggest that this gene is found in complete genomes, where 86% of the genomes are from pathogen bacteria. This clearly suggest that the gene has evidence to be found in harmful pathogenic microbes. There is also information about the diseases related to those pathogens as well as the antimicrobial phenotype and hosts.</p></div>",
            position: 'right'
          },
          {
            element: '#step11',
            intro: "<div class='text-center'><h4>Microtasks</h4><p class='small'>This panel contains the three main tasks required for the annotation of Antibiotic Resistance Genes. In this panel you will have to add your findings by following simple questions.</p><p>The bottom panel will prompt the token number you need to insert into the Amazon Mturk form.</p></div>", 
            position: 'left'
          },
          {
            element: '#step12',
            intro: "<div class='text-center'><h4>Microtasks</h4><p class='small'>Instructions for the microtasks completition.</p></div>", 
            position: 'right'
          },
        ]
    }).start();
  }

}
