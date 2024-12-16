import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  url = 'http://localhost:3000/users';

  getUsers(): Promise<any> {
    return fetch(this.url)
      .then(response => response.json()).catch(error => console.log(error));
  }

  getUserById(id: number): Promise<any> {
    return fetch(`${this.url}/${id}`)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

}
