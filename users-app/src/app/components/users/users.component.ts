import { Component } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  user : User = {
    firstName : "bill",
    lastName: "gates",
    dob : new Date('Jan 21, 1965'),
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    imageSrc : "./assets/images/bill.jpg",
    votes : 120
  }

  onMoreInfo(usr : User){
    alert(`Mr. ${usr.firstName} is working with ${usr.company}!!!`)
  }

}
