import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

interface myData {
  obj: any
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  records: []

  constructor(private myFirstService: RecordsService) { }

  ngOnInit(): void {
     this.myFirstService.getData().subscribe(data => {
      this.records = data.obj
    });
  }

}
