import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component'

// decorator
function log(target, name, descriptor) {
  console.log(target.name, descriptor)
  // store the original function in a variable
  const original = descriptor.value

  // do some manipulations with descriptor.value
  descriptor.value = function (...args) {
    console.log("Arguments ", args, " were passed in this function")
    const result = original.apply(this, args)
    console.log("The result of the function is ", result)
    return result
  }
  // return the descriptor
  return descriptor
}

function log2(className) {
  console.log(className)
  return (...args) => {
    console.log("Arguments passed to this class's constructors are", args)
    return new className(...args)
  }
}

//@log2
class myExampleClass {
  constructor(arg1, arg2) {
    console.log("Constructor fired!")
  }
}

const myClass = new myExampleClass(5, 10)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//@log2
export class AppComponent {
  title = 'angular';
  myVariable = "variable"
  myDisabledValue = false
  texto = 'abc';

  constructor() {
    setInterval(() => {
      this.myVariable = ""
      this.myVariable = Math.random().toString();
      this.myDisabledValue = Math.random() > 0.5
    },500)
  }

  //decorator annotation
  @log
  aSimpleMethod(a) {
    return a * a
  }

  callMyFunction() {
    console.log("Function called")
  }

  callMyFunction2() {
    this.myDisabledValue = !this.myDisabledValue
    console.log("Function called")
  }

  updateValue(e) {
    this.texto = e.target.value
    console.log(e.target.value)
  }

}
