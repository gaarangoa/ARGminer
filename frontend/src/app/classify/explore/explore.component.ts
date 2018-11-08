import { Component, OnInit } from '@angular/core';

// services
import { DataService } from '../../../services/data.service';

// components
import { ClassifyComponent } from '../classify.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  public randomARG: any;
  public loading_search: boolean;
  public search_keyword: string;
  public search_general_result: any;
  public selected_gene: any;
  public search_on: boolean;
  public search_index: number;
  constructor(
    private dataService: DataService,
    public classifyComponent: ClassifyComponent,
  ) { }

  ngOnInit() {
    this.loading_search = false;
    this.search_keyword = '';
    this.search_general_result = [];
    this.selected_gene = [];
    this.search_on = false;
    this.search_index = 0;
    // this.search(this.search_keyword);
  }

  search(argID: string) {
      this.loading_search = true;
      this.dataService.fast_search(argID, '0', 'overall')
        .subscribe(response => {
          // console.log(response);
          this.search_general_result = response;
          this.loading_search = false;
          this.search_keyword = null;
          this.search_on = true;
          this.search_index = 0;
      });

  }

  close_search() {
    this.search_on = false;
    // console.log(this.search_on);
  }

  explore_gene(data: any) {
    this.selected_gene = data;
    // console.log(this.selected_gene);
    this.search_index = 0;
    this.classifyComponent.search(this.selected_gene.sequences[this.search_index][0]);
  }

  explore_next() {
    this.search_index = (this.search_index < this.selected_gene.sequences.length - 1) ? this.search_index += 1 : 0;
    this.classifyComponent.search(this.selected_gene.sequences[this.search_index][0]);
  }

}
