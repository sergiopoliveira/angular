import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  records: {}

  constructor(private myFirstService : RecordsService) { }

  ngOnInit(): void {
    this.records = this.myFirstService.getData();
  }

}
