import { Component, OnInit } from '@angular/core';
import { AllUSersService } from '../all-users.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private userService: AllUSersService , private router: Router) { }
  ngOnInit() {
  }
  validateUser(loginUser){
   this.userService.isValid= this.userService.mainUser.find((eachUserObject)=>{
    return (eachUserObject.user==loginUser)
   })
if(this.userService.isValid != undefined){
  this.router.navigate(['/profile/' + this.userService.isValid.id ])
}

  }
}
