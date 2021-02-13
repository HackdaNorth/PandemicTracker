import { Injectable } from '@angular/core';
import { OntData } from './data';
import { ONTDATA } from '../assets/data/data';


@Injectable({
  providedIn: 'root'
})
export class GetOntDataService {

  constructor() { }
  loadData(): OntData {
    return ONTDATA;
  }

}
