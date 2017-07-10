import { Component, OnInit } from '@angular/core';

import { ClassifyComponent } from '../../classify.component';
import { DataService } from '../../../../services/data.service';


@Component({
  selector: 'classify-metadata-uniprot',
  templateUrl: './uniprot.component.html',
  styleUrls: ['./uniprot.component.css']
})
export class UniprotComponent implements OnInit {

  public randomARG: Object;

  constructor(
    private classifyComponent: ClassifyComponent
  ) {
    
   }


  ngOnInit() {
    this.randomARG = this.classifyComponent.randomARG;
    
  }
  

}
