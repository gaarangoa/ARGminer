import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';


import {PieChart} from './Charts';


@Component({
  selector: 'genome-metadata',
  templateUrl: './genome.component.html',
  styleUrls: ['./genome.component.css'],
  providers: [PieChart]
})


export class GenomeComponent implements OnInit {

  public randomARG: Object;
  private disease: any;
  private AMR_phenotype: any;
  private host: any;
  public genomeCount: number = 0;
  public renderMobile: boolean = false;
  public renderPathogen: boolean = false;
    

  constructor(
    private dataService: DataService,
    private pieChart: PieChart
  ) {
    
   }


  ngOnInit() {
    this.randomARG = this.dataService.ARG;
    this.disease = new PieChart();
    // console.log(this.disease)
    this.disease.draw(this.randomARG['pathogen']['disease']);
    
    this.AMR_phenotype = new PieChart();
    this.AMR_phenotype.draw(this.randomARG['pathogen']['phenotype']);

    this.host = new PieChart();
    this.host.draw(this.randomARG['pathogen']['host']);

    
    try {
      this.genomeCount = 100*this.randomARG['pathogen'].genomes_pathogen/this.randomARG['pathogen'].genomes_count.toFixed(0)
    } catch (error) {
      this.genomeCount = 0;
    }
    

    
    if(this.randomARG['mobile'][0].status == true){
      this.renderMobile = true;
    }

    if(this.randomARG['pathogen'].status == true){
      this.renderPathogen = true;
    }

  }
  
  onSelect(event) {
    console.log(event);
  }

}
