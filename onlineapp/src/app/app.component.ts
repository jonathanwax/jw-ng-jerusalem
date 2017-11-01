import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { DataItemModel } from './data-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  public dataItems: DataItemModel[] = [];

  constructor(private dataService: DataService) {}

  public ngOnInit() {
    this.dataItems = this.dataService.getItems();
  }
}
