import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  myVariable = "variable"
  bitwiseOR = 2 | 5 // 010 101 = 0 | 1 = 1
  i = 0

  constructor() { }

  // not recommended to use functions in HTML interpolation
  // (called multiple times)
  doSomeHeavyTask() {
    console.log(`Called ${this.i++} times`)
  }

  ngOnInit(): void {
  }

}
