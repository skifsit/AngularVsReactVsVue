import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  fetching: Boolean = false;

  constructor(private route: ActivatedRoute) { }

  loadUser (id: string) {
    this.fetching = true;
    fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json()).then(user => {
      this.user = user;
      this.fetching = false;
    })
  }

  ngOnInit() {
    this.loadUser(this.route.snapshot.paramMap.get('userId'));
  }

}
