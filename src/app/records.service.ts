import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  obj: any
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {

  }

  getDataOriginal() {
    return this.http.get<myData>('http://localhost:1234/file.json');
  }

  getData() {
    return this.http.get<myData>('/api/file.json');
  }
}
