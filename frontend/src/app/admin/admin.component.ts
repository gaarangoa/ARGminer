import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../services/admin.service';
import { ComplexPieChart } from './visualize.class' 

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

  constructor(
    private adminService: AdminService,
  ) { }

  ngOnInit() {

    this.argClassChart = new ComplexPieChart();
    this.argGroupChart = new ComplexPieChart();
    this.argMechanismChart = new ComplexPieChart();
    

    this.adminService.getCuratedARGs()
      .subscribe(res => {
        this.curatedARGs = res;
        // console.log(this.curatedARGs[0]['inspected']);
        this.argClassChart.draw(this.curatedARGs[0]['inspected'], 'class');
        this.argGroupChart.draw(this.curatedARGs[0]['inspected'], 'group');
        this.argMechanismChart.draw(this.curatedARGs[0]['inspected'], 'mechanism');
      })
  }

}
