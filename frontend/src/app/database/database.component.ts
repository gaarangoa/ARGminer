import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  public databases: Object;
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getDatabaseList()
      .subscribe(response => {
        this.databases = response;
      })
  }

}
