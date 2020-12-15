import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'user-httpClient';
  url = 'http://s3.amazonaws.com/Utilidades/cursoApi/users.json';
  users:User[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.httpClient.get<User[]>(this.url).subscribe(data => {
      console.log(data);
    });
  }
}
