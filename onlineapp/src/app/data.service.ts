import { Injectable } from '@angular/core';
// app classes
import { DataItemModel } from './data-item-model';

@Injectable()
export class DataService {

  // private items = new Array<DataItemModel>();
  private items: DataItemModel[] = [
    { id: '1', name: 'John Doe 1' },
    { id: '2', name: 'John Doe 2' },
    { id: '3', name: 'John Doe 3' },
    { id: '4', name: 'John Doe 4' },
    { id: '5', name: 'John Doe 5' }
  ];

  constructor() {}

  getItems(): Array<DataItemModel> {
      return this.items;
  }

}
