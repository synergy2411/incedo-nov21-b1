import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from '../../model/user';
// import { USER_DATA } from '../../model/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users : User[];
  myDynamicClass = {'my-border' : true, 'my-feature' : false}
  myDynamicStyle = {
    'font-size' : '1.2em',
    'border' : '2px red solid'
  }

  onToggleClasses(){
    this.myDynamicClass['my-border'] = !this.myDynamicClass['my-border']
    this.myDynamicClass['my-feature'] = !this.myDynamicClass['my-feature']
  }

  constructor(private dataService : DataService){}

  ngOnInit(){
    // this.users = USER_DATA;
    this.dataService.getUserData()
      .subscribe(response => {
        this.users = response['userdata']
      })
  }

  onMoreInfo(usr : User){
    alert(`Mr. ${usr.firstName} is working with ${usr.company}!!!`)
  }

}
