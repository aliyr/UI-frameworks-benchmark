import { Component, OnInit ,Input} from '@angular/core';
import { PersistenceService } from 'angular-persistence';

const uuidv1 = require('uuid/v1');

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {
  allUsersDB = [
    {user : "aaa" , id:uuidv1()},
    {user : "bbb" , id:uuidv1()}
  ]
  @Input() someName = 'gholi'

  constructor(private persistenceService: PersistenceService) {
    persistenceService.get('this.allUsersDB');
  }

  
  addToList(newUser){
    this.allUsersDB.push({user : newUser , id:uuidv1()})
     }
     changeName(namePlace , NewName){
       namePlace.user = NewName
       
     }

}
