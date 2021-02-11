import { Injectable } from '@angular/core';
import { Cdata } from './data';
import { CDATA } from '../assets/data/data';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }
  loadData(): Cdata {
    return CDATA;
  }

}
