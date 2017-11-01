import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { DataItemModel } from '../data-item-model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() dataItems: Array<DataItemModel>;
  selectedItem: DataItemModel;

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: DataItemModel): void {
    this.selectedItem = item;
  }

}
