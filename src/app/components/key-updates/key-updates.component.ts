import { Component, OnInit } from '@angular/core';

import { Pdata } from '../../pdata';
import { GetDataService } from '../../getdata.service';



@Component({
  selector: 'app-key-updates',
  templateUrl: './key-updates.component.html',
  styleUrls: ['./key-updates.component.scss'],
})
export class KeyUpdatesComponent implements OnInit {

  myData: Pdata;

  constructor(private ldData: GetDataService) { }

  loadMyData(): void {
    this.myData = this.ldData.loadData();
  }

  ngOnInit() {
    this.loadMyData();
  }



}
