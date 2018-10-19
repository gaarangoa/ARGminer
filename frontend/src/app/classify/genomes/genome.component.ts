import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';


import {PieChart} from './Charts';


@Component({
  selector: 'genome-metadata',
  templateUrl: './genome.component.html',
  styleUrls: ['./genome.component.css'],
  providers: [PieChart]
})


export class GenomeComponent implements OnInit {

  @Input() gene_id: string;

  public randomARG: Object;
  private disease: any;
  private AMR_phenotype: any;
  private host: any;
  public genomeCount: number;
  public renderMobile: boolean;
  public renderPathogen: boolean;
  public plasmid: any;

  constructor(
    private dataService: DataService,
    private pieChart: PieChart
  ) {

   }

  ngOnInit() {
    this.genomeCount = 0;
    this.renderMobile = false;
    this.renderPathogen = false;
    this.randomARG = this.dataService.ARG;
    this.disease = new PieChart();
    this.plasmid = [];

    this.disease.draw(this.randomARG['pathogen']['disease']);
    this.AMR_phenotype = new PieChart();
    this.AMR_phenotype.draw(this.randomARG['pathogen']['phenotype']);

    this.host = new PieChart();
    this.host.draw(this.randomARG['pathogen']['host']);

    this.conditions()
    this.render_plasmids()



  }

  onSelect(event) {
    console.log(event);
  }

  render_plasmids() {
    this.dataService.get_plasmid({ gene_id: this.randomARG['entry'].gene_id })
      .subscribe(res => {
        this.plasmid = res;
      });
  }

  conditions() {
    try {
      this.genomeCount = 100*this.randomARG['pathogen'].genomes_pathogen/this.randomARG['pathogen'].genomes_count.toFixed(0)
    } catch (error) {
      this.genomeCount = 0;
    }

    if(this.randomARG['mobile'][0].status === true){
      this.renderMobile = true;
    }

    if(this.randomARG['pathogen'].status === true){
      this.renderPathogen = true;
    }
  }

}
