import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'besthit-metadata-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class BestHitCardComponent implements OnInit {

  public randomARG: Object;
  public alCoverage: number;
  public render: boolean;
  public cars: any;

  constructor(
    private dataService: DataService,
  ) {}

  get_subtype(element: any){
    if(element.best_hit_database === 'ARDB' ){
      return element.metadata.subtype;
    }else{
      return element.subtype;
    }
  }

  get_best_hit_id(element: any){
    if(element.best_hit_database === 'megares' ){
      return element.best_hit.split('|')[1];
    }else{
      return element.best_hit;
    }
  }

  get_coverage(element: any){
    if(element.best_hit_database === 'CARD' ){
      return element.coverage;
    }else{
      return (100*element.algn_len / this.randomARG['entry'].length).toFixed(0);
    }
  }

  get_bitscore_rate(element: any){
    if(element.best_hit_database === 'CARD' ){
      return (100*element.bitscore/element.optimum_bit_score).toFixed(0);
    }else{
      // return (100*element.bitscore/1000).toFixed(0);
      return null;
    }
  }

  ngOnInit() {
    this.randomARG = this.dataService.ARG;
    this.render = false;
    this.cars = [];
    this.alCoverage = 100*this.randomARG['besthit']['alignments'][0]['algn_len'] / this.randomARG['entry']['length'].toFixed(0)
    // console.log(this.alCoverage)
    if(this.randomARG['besthit']){
      // traverse the alignments and create the table

      this.randomARG['besthit']['alignments'].forEach(element => {
        this.cars.push({
          database: element.best_hit_database,
          gene_name: this.get_subtype(element),
          best_hit_id: this.get_best_hit_id(element),
          similarity: element.identity,
          coverage: this.get_coverage(element),
          bitscore_rate: this.get_bitscore_rate(element),
          bitscore: element.bitscore
        });
      });

      this.render = true;

    }

  }

}
