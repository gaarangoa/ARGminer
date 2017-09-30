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

@Component({
  selector: 'app-curate',
  templateUrl: './curate.component.html',
  styleUrls: ['./curate.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class CurateComponent implements OnInit {

  private step1: boolean;
  private step2: boolean;
  private step3: boolean;
  private step4: boolean;
  display: boolean = false;
  overlay: Object;
  private inspectedGenes: Array<String>;

  private activeIndex: number = 0;

  onRatingChangeResult:IStarRatingOnRatingChangeEven;

  options_type = [];
  group_options = ["Bla1", "MacB", "BacA"];
  mge_options = ["Plasmid","Virus","Prophage"];

  items: MenuItem[];

  private randomARG: Object;
  private antibiotic: Object;

  myControl = new FormControl();
  groupControl = new FormControl();
  mgeControl = new FormControl();

  filteredOptions: Observable<string[]>;
  groupFilteredOptions: Observable<string[]>;
  mgeFilteredOptions: Observable<string[]>;
  
  constructor(
    private dataService: DataService,
    private classifyComponent: ClassifyComponent,
    private confirmationService: ConfirmationService
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
    this.antibiotic = {
      class:"",
      group:"",
      mechanism:"",
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
      
      if(this.antibiotic['class']=="" || this.antibiotic['group']=="" ){
        
        // this.overlay['title']="Emtpy group and/or class not allowed"
        // this.overlay['content']="Please make sure to insert the antibiotic class and group in the form (mechanism is optional)"
        // this.showDialog()
        alert('Error: Empty fields are not allowed!')

      }else{
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

    this.overlay['title']="Your results"
    this.overlay['content']="Your manual inspection has been registered in the system and its ready for validation."
    this.overlay['score'] = 10;
    this.overlay['average_score'] = 15;

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
  this.classifyComponent.nextGeneConflictList();
  // this.classifyComponent.render=false;
  // this.dataService.getRandomKnownARG()
  //   .subscribe(response =>{
  //     this.classifyComponent.randomARG = this.dataService.ARG
  //     // console.log(this.randomARG)
  //     this.classifyComponent.loading = false;

      // this.antibiotic = {
      //   class:"",
      //   group:"",
      //   mechanism:"",
      //   MGE:{},
      //   comments:"",
      //   rating:{},
      //   gene_id: ""
      // }
      
  // });
  
  this.display = false;

}




}
