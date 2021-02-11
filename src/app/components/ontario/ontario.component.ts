import { Component, OnInit } from '@angular/core';

import { OntData } from '../../data';
import { GetOntDataService } from '../../get-ont-data.service';


@Component({
  selector: 'app-ontario',
  templateUrl: './ontario.component.html',
  styleUrls: ['./ontario.component.scss'],
})
export class OntarioComponent implements OnInit {

  myData: OntData;

  constructor(private ldData: GetOntDataService) { }

  loadMyData(): void {
    this.myData = this.ldData.loadData();
  }

  ngOnInit() {
    this.loadMyData();
  }


}
