import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllUSersService {
  mainUser=[
    {user : "aaa" , id:"1"},
    {user : "bbb" , id:"2"}
  ];
  isValid;

  constructor() { }
}
