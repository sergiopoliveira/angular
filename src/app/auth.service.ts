import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = false

  constructor(private Http: HttpClient) { }



  getUserDetails(username, password) {
    // post these details to API server, return user info if correct
    return this.Http.post<myData>('api/auth.php', {
      username,
      password
    })
  }
}
