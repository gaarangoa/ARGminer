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
  public color: string;
  public predicted_nomenclature: Array<Object>;

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
      if (element.best_hit_database === 'ARDB') {
          let coverage = (100 * element.algn_len / this.randomARG['entry'].length).toFixed(0);
          return element.coverage <= 100 ? element.coverage : 100;
      } else {
          return element.coverage <= 100 ? element.coverage : 100;
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

    get_antibiotic_class(element: any) {
        if (element.best_hit_database === 'CARD') {

            return element.metadata.filter(e => e.category_aro_class_name === "Drug Class").map(e => e.category_aro_name);


        } else if (element.best_hit_database === 'ARDB') {
            // return (100*element.bitscore/1000).toFixed(0);
            return element.metadata.resistance_profile.map(e => e.type);
        } else{
            return [element.type];
        }

    }

  get_nomenclature(keyword: string, _res: any) {
    this.dataService.predict_nomenclature({ sentence:  keyword } )
      .subscribe(res => {
        _res = res;
      });
  }

  ngOnInit() {
    this.color = 'rgb(255,0,0)';
    this.randomARG = this.dataService.ARG;
    this.render = false;
    this.cars = [];
      this.predicted_nomenclature = [
          {nomenclature: '', probability: 0}
    ];
    // this.alCoverage = 100*this.randomARG['besthit']['alignments'][0]['algn_len'] / this.randomARG['entry']['length'].toFixed(0)
    // console.log(this.alCoverage)
    if(this.randomARG['besthit']){
    // traverse the alignments and create the table
    let _max_bitscore = this.randomARG['besthit']['alignments'].map(e => {
        return e.bitscore;
    });

    _max_bitscore = Math.max(..._max_bitscore);

    this.randomARG['besthit']['alignments'].forEach(element => {
        this.cars.push({
            database: element.best_hit_database,
            gene_name: this.get_subtype(element),
            best_hit_id: this.get_best_hit_id(element),
            similarity: element.identity.toFixed(2),
            coverage: this.get_coverage(element),
            bitscore_rate: 'rgba(' + (255 * element.bitscore / _max_bitscore).toFixed(0) + ',0,0,'+ element.bitscore / _max_bitscore +')' ,
            bitscore: element.bitscore.toFixed(1),
            antibiotic: this.get_antibiotic_class(element),
        });
    });

    const _sentence = this.cars.map(e => {
        return (e.bitscore > 50) ? e.gene_name + ' ' + e.antibiotic.join(' ') : '';
    }
    ).join(' ');

        console.log(this.cars)

    // this.get_nomenclature(_sentence, this.predicted_nomenclature);
    this.dataService.predict_nomenclature({ sentence:  _sentence } )
    .subscribe(res => {
        this.predicted_nomenclature = res;
    });
    this.render = true;
    }

}

}



