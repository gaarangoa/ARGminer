import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';
import { Session } from '../../services/session.service'
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
    public online: boolean;
    public scores: any;
    public render: boolean;
  private emailFormControl: any;
  private passwordFormControl: any;
  private databaseVersion: string;
  private databaseComments: string;
  private datetime = new Date(0);


  constructor(
    private adminService: AdminService,
      private dataService: DataService,
      private session: Session,
  ) { }

  ngOnInit() {
      this.scores = []
      this.render = false;
      this.databaseVersion = '';
      this.databaseComments = '';
      this.ARGindex = 0;
      this.getARG(this.ARGindex);

  }

    acceptAnnotation() {
        console.log(this.ARG);
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


  upgradeDataBase(version: string, comments:string){
    this.adminService.upgradeDatabase({version:version, comments: comments})
      .subscribe( res => {
        // console.log(res,'123456')
        this.databaseVersion = null;
        this.databaseComments = null;
      });
  }

  getARG(idx: any){

    this.adminService.getCuratedARGs(idx)
    .subscribe(res => {
        this.curatedARGs = res;
        this.curatedARGs[0]['inspected'].forEach(e => {
            let date = new Date(e.token);
            e.date = date.toLocaleDateString('en-GB');
        });

        this.adminService.score_annotation(this.curatedARGs[0]['entry']['gene_id'])
            .subscribe(response => {
                this.scores = response;
                this.ARG = {
                    gene_id: this.curatedARGs[0]['entry']['gene_id'],
                    type: this.scores[0]['scores'][0]['name'],
                    subtype: this.scores[1]['scores'][0]['name'],
                    mechanism: this.scores[2]['scores'][0]['name'],
                    inspected: this.scores[0]['scores'][0]['counts'],
                    score: [
                        { kind: this.scores[0]['kind'], score: this.scores[0]['scores'][0]['score'], name: this.scores[0]['scores'][0]['name'] },
                        { kind: this.scores[1]['kind'], score: this.scores[1]['scores'][0]['score'], name: this.scores[1]['scores'][0]['name'] },
                        { kind: this.scores[2]['kind'], score: this.scores[2]['scores'][0]['score'], name: this.scores[2]['scores'][0]['name'] },
                    ]
                };
                this.render = true;
            })

        this.ARGindex += 1;
    });
  }

  search(keyword: string){
      let indx = '0';
      this.ARGindex = 0;

    this.dataService.searchAPI(keyword, indx)
      .subscribe(response =>{
        console.log(response)
          this.curatedARGs = [response];

        this.curatedARGs[0]['inspected'].forEach(e => {
            let date = new Date(e.token);
            e.date = date.toLocaleDateString('en-GB');
        });

        this.adminService.score_annotation(this.curatedARGs[0]['entry']['gene_id'])
            .subscribe(response => {
                this.scores = response;
                this.ARG = {
                    gene_id: this.curatedARGs[0]['entry']['gene_id'],
                    type: this.scores[0]['scores'][0]['name'],
                    subtype: this.scores[1]['scores'][0]['name'],
                    mechanism: this.scores[2]['scores'][0]['name'],
                    inspected: this.scores[0]['scores'][0]['counts'],
                    score: [
                        { kind: this.scores[0]['kind'], score: this.scores[0]['scores'][0]['score'], name: this.scores[0]['scores'][0]['name'] },
                        { kind: this.scores[1]['kind'], score: this.scores[1]['scores'][0]['score'], name: this.scores[1]['scores'][0]['name'] },
                        { kind: this.scores[2]['kind'], score: this.scores[2]['scores'][0]['score'], name: this.scores[2]['scores'][0]['name'] },
                    ]
                };
        })

    });

  }

}
