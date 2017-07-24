import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

import { DataService } from '../../../services/data.service';

import {MenuItem} from 'primeng/primeng';


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

  private activeIndex: number = 0;

  options_type = [];
  group_options = [];
  mge_options = ["Plasmid","Virus","Prophage", "No data"];
  evi_options = ["No evidence","Weak","Strong","Very Strong"];
  isarg_options = ["is an ARG", "it is a potential ARG", "it is NOT an ARG"]

  items: MenuItem[];

  private randomARG: Object;

  myControl = new FormControl();
  groupControl = new FormControl();
  mgeControl = new FormControl();
  eviControl = new FormControl();
  isargControl = new FormControl();

  filteredOptions: Observable<string[]>;
  groupFilteredOptions: Observable<string[]>;
  mgeFilteredOptions: Observable<string[]>;
  eviFilteredOptions: Observable<string[]>;
  isargFilteredOptions: Observable<string[]>;
  
  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {

    this.step1 = true;

    // menu
    this.items = [
            {label: 'Identify'},
            {label: 'Validate'},
            {label: 'Inspect MGEs'},
            {label: 'Submit'}
        ];

    // Get ARG data
    this.randomARG = this.dataService.ARG;

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
            this.group_options.push(type['type'])
          }

          // console.log(this.options)
          this.groupFilteredOptions = this.groupControl.valueChanges
            .startWith(null)
            .map(val => val ? this.filter(val, this.mge_options) : this.mge_options.slice());

        }
      )

    // Here is the code for the MGE
    this.mgeFilteredOptions = this.mgeControl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val, this.mge_options) : this.mge_options.slice());
    
      // Here is the code for the evidence
    this.eviFilteredOptions = this.eviControl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val, this.evi_options) : this.evi_options.slice());

    // Here is the code for the evidence
    this.isargFilteredOptions = this.isargControl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val, this.isarg_options) : this.isarg_options.slice());

    }

  filter(val: string, Marray: any): string[] {
    return Marray.filter(option => new RegExp(`${val}`, 'gi').test(option)); 
  }

  validate(value: any){

    if(value == 1){
      this.step1=false;
      this.step2=true;
      this.activeIndex = 1;
    }else if(value ==2){
      this.step2 = false;
      this.step3 = true;
      this.activeIndex = 2;
    }else if(value == 3){
      this.step3 = false;
      this.step4 = true;
      this.activeIndex = 3;
    }else if(value == 4){
      this.step4=false;
      this.step1 = true;
      this.activeIndex = 0;
    }

  }

}
