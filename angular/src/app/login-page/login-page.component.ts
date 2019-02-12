import { Component, OnInit } from '@angular/core';
import { AllUSersService } from '../all-users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private userService: AllUSersService) { }

  ngOnInit() {

  }
  validateUser(loginUser){
   this.userservice.isValid= this.userService.mainUser.find((eachUserObject)=>{
    return (eachUserObject.user==loginUser)
   })
   
  }
}
