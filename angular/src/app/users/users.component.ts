import { Component, OnInit ,Input} from '@angular/core';
import { AllUSersService } from '../all-users.service';

const uuidv1 = require('uuid/v1');

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {
  allUsersDB = []
  @Input('someNAme') someName = 'gholi'

  constructor(private userService: AllUSersService ) {
    this.allUsersDB = this.userService.mainUser
  }
  addToList(newUser ){
    this.allUsersDB.push({user : newUser , id:uuidv1()})
     }
     changeName(namePlace , NewName){
       namePlace.user = NewName    
     }
}
