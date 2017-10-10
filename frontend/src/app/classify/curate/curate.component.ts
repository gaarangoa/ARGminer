import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

import { DataService } from '../../../services/data.service';

import {MenuItem} from 'primeng/primeng';

import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven, IStarRatingIOnHoverRatingChangeEvent} from "angular-star-rating";

import { ClassifyComponent } from '../classify.component'

import {ConfirmationService} from 'primeng/primeng';

import { Message } from 'primeng/components/common/api';

import { ScoreAnnotation } from './score.class'

@Component({
  selector: 'app-curate',
  templateUrl: './curate.component.html',
  styleUrls: ['./curate.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    ScoreAnnotation
  ]

})
export class CurateComponent implements OnInit {

  public step1: boolean;
  public step2: boolean;
  public step3: boolean;
  public step4: boolean;
  public display: boolean = false;
  public overlay: Object;
  public inspectedGenes: Array<String>;

  public activeIndex: number = 0;

  onRatingChangeResult:IStarRatingOnRatingChangeEven;

  public options_type = [];
  public group_options = [];
  public mge_options = ["Plasmid","Virus","Prophage"];

  public items: MenuItem[];

  private randomARG: Object;
  private antibiotic: Object;

  public notification: Message[] = [];

  public liveScore: any;
  public liveScoreAnnotation: any;

  myControl = new FormControl();
  groupControl = new FormControl();
  mgeControl = new FormControl();

  filteredOptions: Observable<string[]>;
  groupFilteredOptions: Observable<string[]>;
  mgeFilteredOptions: Observable<string[]>;
  
  constructor(
    private dataService: DataService,
    public classifyComponent: ClassifyComponent,
    private confirmationService: ConfirmationService,
  ) {
    
  }

  ngOnInit() {

    this.inspectedGenes = [];
    this.overlay = {
      title:"none",
      content:"none"
    }
    this.step1 = true;

    // menu
    this.items = [
            {label: ''},
            {label: ''},
            {label: ''}
        ];

    // Get ARG data
    this.randomARG = this.dataService.ARG;
    this.liveScore = new ScoreAnnotation();
    
    this.liveScoreAnnotation = {class: 0, group: 0, mechanism: 0};
    

    this.antibiotic = {
      class:null,
      group:null,
      mechanism:null,
      MGE:{},
      comments:"",
      rating:{},
      gene_id: "",
      token: "------------"
    }
    

    // Get the list of antibiotic types in the database
    this.dataService.getListAntibioticClass()
      .subscribe( 
        response =>{
          for (let type of this.dataService.ATYPE){
            this.options_type.push(type['type'])
          }

          // console.log(this.options)
          this.filteredOptions = this.myControl.valueChanges
            .startWith(null)
            .map(val => val ? this.filter(val, this.options_type) : this.options_type.slice());

        }
      )

    // Get list of antibiotic subtypes
    this.dataService.getListAntibioticClass()
      .subscribe( 
        response =>{
          for (let type of this.dataService.ATYPE){
            // this.group_options.push(type['subtype'])
          }

          // console.log(this.options)
          this.groupFilteredOptions = this.groupControl.valueChanges
            .startWith(null)
            .map(val => val ? this.filter(val, this.group_options) : this.group_options.slice());

        }
      )

    }

  // Filter once typing the type of antibiotic
  filter(val: string, Marray: any): string[] {
    return Marray.filter(option => new RegExp(`${val}`, 'gi').test(option)); 
  }

  // setup the options under mobile genetic elements
  mgeOptions(label: any, event: any){
      this.antibiotic['MGE'][label] = 
        {
          name:label,
          value:event.checked
        }   
  };

  // keep track of the ratings bars
  onRatingChange = (label:any, $event:IStarRatingOnRatingChangeEven) => {
        // console.log(label, $event);
        this.antibiotic['rating'][label] =
          {
            name:label,
            value:$event['rating']
          };
  };

  

  showDialog() {
      this.display = true;
  }


  // to keep track of the changes between the steps
  validate(value: any){

    if(value == 1){

      
      this.liveScoreAnnotation = this.liveScore.score(this.classifyComponent.randomARG , this.antibiotic)
      console.log(this.liveScoreAnnotation);

      if(this.antibiotic['class']==null || this.antibiotic['group']==null || this.antibiotic['mechanism']==null){
        this.classifyComponent.notification.push({severity:'error', summary:'Score', detail:'Your score is: 0 out of 100'});

      }else if(this.liveScoreAnnotation.class < 50 || this.liveScoreAnnotation.group < 30 || this.liveScoreAnnotation.mechanism < 50){
          
        let points = (this.liveScoreAnnotation.class + this.liveScoreAnnotation.group + this.liveScoreAnnotation.mechanism)/3;
        this.classifyComponent.notification.push({severity:'error', summary:'Error', detail:'Your score is: '+points.toFixed(0)+' out of 100 <hr>Class Score: '+this.liveScoreAnnotation.class.toFixed(1) + '<br>Gene Name Score: ' + this.liveScoreAnnotation.group.toFixed(1) + '<br>Mechanism Score: ' + this.liveScoreAnnotation.mechanism.toFixed(1) });
      
      }else{
        this.classifyComponent.notification = [];
        let points = (this.liveScoreAnnotation.class + this.liveScoreAnnotation.group + this.liveScoreAnnotation.mechanism)/3;
        this.classifyComponent.notification.push({severity:'success', summary:'Success', detail:'Your score is: '+points.toFixed(0)+' out of 100 <hr>Class Score: '+this.liveScoreAnnotation.class.toFixed(1) + '<br>Gene Name Score: ' + this.liveScoreAnnotation.group.toFixed(1) + '<br>Mechanism Score: ' + this.liveScoreAnnotation.mechanism.toFixed(1) });
        
        this.activeIndex = 1;
        this.step1=false;
        this.step2=true;
      }


    }else if(value ==2){



      this.step2 = false;
      this.step3 = true;
      this.activeIndex = 2;
      
    }else if(value == 3){
      this.step3 = false;
      this.step1 = true;
      this.activeIndex = 0;

    }

  }

  submitReview(){
    // console.log(this.antibiotic)

    // show the overlay with the score
    // this.showDialog()
    this.antibiotic['token'] = Date.now();
    this.dataService.insertCuration(this.antibiotic)
      .subscribe(
        response =>{
          // console.log(response)
          // restart the form values to empty.
          this.inspectedGenes.push(this.classifyComponent.randomARG['entry']['gene_id']);
          this.continueReview();
          // alert("token: "+this.antibiotic['token']);
        }
      )
      
  }

continueReview(){
  // Restart and get a new gene
  this.activeIndex = 0;
  this.step1 = true;
  this.step3 = false;

  this.classifyComponent.randomARG['entry']['database'] = '-------------';
  this.classifyComponent.randomARG['entry']['gene_id'] = '-----------';
  this.classifyComponent.randomARG['entry']['subtype'] = '-----------';
  this.classifyComponent.randomARG['entry']['type'] = '--------------';
  this.classifyComponent.randomARG['entry']['inspected'] = '-----';
  this.classifyComponent.randomARG['entry']['score'] = '----';

  this.classifyComponent.loading = true;
  
  this.antibiotic['class'] = null;
  this.antibiotic['group'] = null;
  this.antibiotic['mechanism'] = null;

  if(this.classifyComponent.conflictedArgSubtypeFlag){
    this.classifyComponent.nextGeneConflictList();
  }else if(this.classifyComponent.trainingARGFlag){
    this.classifyComponent.trainingARGNextGene()
  }else{
   this.classifyComponent.nextGene(); 
  }
  
  
  this.display = false;

}




}
