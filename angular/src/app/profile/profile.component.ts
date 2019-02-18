import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
thisUserID
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
   this.thisUserID =this._Activatedroute.snapshot.params['id'];

  }

}
