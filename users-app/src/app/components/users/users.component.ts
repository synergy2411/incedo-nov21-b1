import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { USER_DATA } from '../../model/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users : User[];

  ngOnInit(){
    this.users = USER_DATA;
  }

  onMoreInfo(usr : User){
    alert(`Mr. ${usr.firstName} is working with ${usr.company}!!!`)
  }

}
