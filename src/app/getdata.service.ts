import { Injectable } from '@angular/core';
import { Pdata } from '../app/pdata';
import { PDATA } from '../assets/data/pData';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }
  loadData(): Pdata {
    return PDATA;
  }
}
