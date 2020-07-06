import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  records = [
    {
      name: 'Sergio',
      online: true
    },
    {
      name: 'ABC',
      online: false
    },
    {
      name: 'XYZ',
      online: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
