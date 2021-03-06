import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    console.log(event)

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        this.router.navigate(['admin'])
        this.Auth.loggedInStatus = true
      } else {
        window.alert(data.message)
      }
    })
  }

}
