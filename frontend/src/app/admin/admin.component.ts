import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';

import { ComplexPieChart } from './visualize.class' 

import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [
    ComplexPieChart,
  ]
})
export class AdminComponent implements OnInit {

  private curatedARGs: Array<Object>;
  private argClassChart: any;
  private argGroupChart: any;
  private argMechanismChart: any;
  private wScore: any;
  private weights: Array<number>;
  private ARG: Object;
  private ARGindex: any;
  private online: boolean;
  private emailFormControl: any;
  private passwordFormControl: any;
  private databaseVersion: string;
  private databaseComments: string;


  constructor(
    private adminService: AdminService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]
    );

    this.passwordFormControl = new FormControl('', [
      Validators.required]
    );

    this.online = false;
    this.databaseVersion = '';
    this.databaseComments = '';
    this.ARGindex=0;
    this.getARG(this.ARGindex);
    
  }

  acceptAnnotation(){
    this.adminService.updateGene(this.ARG)
      .subscribe( res => {
        this.ARGindex += 1;
        this.getARG(this.ARGindex);
      })
  }

  updateConflictingARGs(){
    this.adminService.updateConfilctingARGs()
      .subscribe( res => {

      })
  }

  login(email: string, password: string){
    this.adminService.login({email: email, password: password})
      .subscribe( res => {
        // console.log(res);
        this.online = res['token'];
      });
  }

  upgradeDataBase(version: string, comments:string){
    this.adminService.upgradeDatabase({version:version, comments: comments})
      .subscribe( res => {
        // console.log(res,'123456')
        this.databaseVersion = null;
        this.databaseComments = null;
      });
  }

  getARG(idx: any){
    this.argClassChart = new ComplexPieChart();
    this.argGroupChart = new ComplexPieChart();
    this.argMechanismChart = new ComplexPieChart();
    this.wScore = 0;
    this.weights = [1, 1, 1, 0.4, 0.3, 0.6, 0.4]; // [class, group, mechanism, mge, pathogen, expertise, confidence]
    // this.ARGindex += 1;

    this.adminService.getCuratedARGs(idx)
    .subscribe(res => {
      this.curatedARGs = res;
      // console.log(this.curatedARGs[0]['inspected']);
      this.argClassChart.draw(this.curatedARGs[0]['inspected'], 'class');
      this.argGroupChart.draw(this.curatedARGs[0]['inspected'], 'group');
      this.argMechanismChart.draw(this.curatedARGs[0]['inspected'], 'mechanism');

      this.wScore = ( this.weights[0]*this.argClassChart.bestCategoryCounts/this.argClassChart.totalCategoryCounts +
                    this.weights[1]*this.argGroupChart.bestCategoryCounts/this.argGroupChart.totalCategoryCounts +
                    this.weights[2]*this.argMechanismChart.bestCategoryCounts/this.argMechanismChart.totalCategoryCounts +
                    this.weights[3]*this.argClassChart.mge/(5*this.argClassChart.totalCategoryCounts) +
                    this.weights[4]*this.argClassChart.pathogen/(5*this.argClassChart.totalCategoryCounts) +
                    this.weights[5]*this.argClassChart.confidenc[ this.argClassChart.bestCategory ]/(5*this.argClassChart.totalCategoryCounts) + 
                    this.weights[6]*this.argClassChart.expertc[ this.argClassChart.bestCategory ]/(5*this.argClassChart.totalCategoryCounts) ).toFixed(2);
      this.ARG = {
        "gene_id": this.curatedARGs[0]['entry']['gene_id'],
        "type": this.argClassChart.bestCategory,
        "subtype": this.argGroupChart.bestCategory,
        "mechanism": this.argMechanismChart.bestCategory,
        "score": this.wScore,
        "MGEScore": this.argClassChart.mge/(5*this.argClassChart.totalCategoryCounts),
        "pathogen_score": this.argClassChart.pathogen/(5*this.argClassChart.totalCategoryCounts)
      }
      this.ARGindex += 1;

      // console.log(this.curatedARGs[0])

    });
  }

  search(keyword: string){
    let indx = '0';
    this.dataService.searchAPI(keyword, indx)
      .subscribe(response =>{
        console.log(response)
        this.curatedARGs = [response];
        // console.log(this.curatedARGs[0]['inspected']);
        this.argClassChart.draw(this.curatedARGs[0]['inspected'], 'class');
        this.argGroupChart.draw(this.curatedARGs[0]['inspected'], 'group');
        this.argMechanismChart.draw(this.curatedARGs[0]['inspected'], 'mechanism');
  
        this.wScore = ( this.weights[0]*this.argClassChart.bestCategoryCounts/this.argClassChart.totalCategoryCounts +
                      this.weights[1]*this.argGroupChart.bestCategoryCounts/this.argGroupChart.totalCategoryCounts +
                      this.weights[2]*this.argMechanismChart.bestCategoryCounts/this.argMechanismChart.totalCategoryCounts +
                      this.weights[3]*this.argClassChart.mge/(5*this.argClassChart.totalCategoryCounts) +
                      this.weights[4]*this.argClassChart.pathogen/(5*this.argClassChart.totalCategoryCounts) +
                      this.weights[5]*this.argClassChart.confidenc[ this.argClassChart.bestCategory ]/(5*this.argClassChart.totalCategoryCounts) + 
                      this.weights[6]*this.argClassChart.expertc[ this.argClassChart.bestCategory ]/(5*this.argClassChart.totalCategoryCounts) ).toFixed(2);
        this.ARG = {
          "gene_id": this.curatedARGs[0]['entry']['gene_id'],
          "type": this.argClassChart.bestCategory,
          "subtype": this.argGroupChart.bestCategory,
          "mechanism": this.argMechanismChart.bestCategory,
          "score": this.wScore,
          "MGEScore": this.argClassChart.mge/(5*this.argClassChart.totalCategoryCounts),
          "pathogen_score": this.argClassChart.pathogen/(5*this.argClassChart.totalCategoryCounts)
        }
    });

  }

}
