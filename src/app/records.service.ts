import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData() {
   return [
      {
        name: 'Sergio',
        online: true
      },
      {
        name: 'Oliveira',
        online: false
      },
      {
        name: 'XYZ',
        online: false
      }
    ]

  }
}
