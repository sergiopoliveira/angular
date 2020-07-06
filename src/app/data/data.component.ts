import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  records = []

  constructor(private myFirstService: RecordsService) { }

  ngOnInit(): void {
    this.myFirstService.getData().subscribe(data => {
      this.records = data.obj
    });
  }

}
