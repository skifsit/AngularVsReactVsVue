import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  fetching: Boolean = false;
  users: User[];

  constructor() { }

  loadUsers () {
    this.fetching = true;
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json()).then(users => {
      this.users = users;
      this.fetching = false;
    })
  }

  ngOnInit() {
    this.loadUsers();
  }

}
