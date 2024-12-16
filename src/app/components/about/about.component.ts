import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
// import json pipe
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [JsonPipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  users: any[] = [];

  ngOnInit() {
    this.usersService.getUsers()
      .then(users => {
        this.users = users;
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }

}
