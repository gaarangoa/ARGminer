import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../../services/data.service';
import { NcbiService } from '../../../../services/ncbi.service';


@Component({
  selector: 'classify-metadata-uniprot',
  templateUrl: './uniprot.component.html',
  styleUrls: ['./uniprot.component.css']
})
export class UniprotComponent implements OnInit {

  public randomARG: Object;
  public pubmed = [];
  public render: boolean = false;
  public renderError: boolean = false;

  constructor(
    private dataService: DataService,
    private ncbiService: NcbiService,
  ) {

   }


  ngOnInit() {
    this.randomARG = this.dataService.ARG;

    // GET all reference ids from pubmed:
    if(this.randomARG['metadata'].status==false){
      this.renderError = true;
    }
    if(this.randomARG['metadata'].status==true){
      this.render = true;
      this.randomARG['metadata'].references.forEach(element => {
        if(element.citation.dbReferences){
          element.citation.dbReferences.forEach(citation => {
            if(citation.type == "PubMed"){
              this.ncbiService.getPubMed(citation.id)
                .subscribe( response=>{

                  let str = response.text;
                  let lstr = [];
                    let inpos = 0;
                    let denotations = []
                    try {
                        let denotations = response.denotations.sort((a, b) => b.span.begin - a.span.begin).reverse();
                    } catch(err) {
                        denotations = [];
                    }
                  // let denotations = response.denotations

                  for(let pos of denotations){
                    lstr.push({"text":str.substring(inpos, pos.span.begin), "type":"paragraph" })
                    lstr.push({"text":str.substring(pos.span.begin, pos.span.end), "type":"keyword"})
                    inpos = pos.span.end
                  }
                  lstr.push( str.substring( inpos, str.length ) )
                  // console.log(denotations)
                  citation['abstract'] = lstr

                  }
                )
            }
          });
        }

      });
    }
    // console.log(this.randomARG)

  }


}
