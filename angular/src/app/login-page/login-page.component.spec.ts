import { async, TestBed,ComponentFixture, inject } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { AppComponent } from '../app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ProfileComponent } from '../profile/profile.component'
import { Component, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Routes } from '@angular/router'
import {Router} from "@angular/router";;
import { by } from 'protractor';
import { url } from 'inspector';
fdescribe('ProfileComponent', () => {
   let component: LoginPageComponent;
   let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterTestingModule.withRoutes(
          [{path: '', component: AppComponent}, 
          {path: 'login-page', component: LoginPageComponent},
          {path: 'profile/:id', component: ProfileComponent}
        ]
        )

      ],
      declarations: [
        LoginPageComponent,
        AppComponent,
        ProfileComponent
        
      ],
       providers: [
       ],
    }).compileComponents();
   
  }));

it('should check if component is created', ()=>{
  const fixture = TestBed.createComponent(LoginPageComponent);
  expect(fixture).toBeDefined();
})


  it('should check if button is defined ', () => {
      const fixture = TestBed.createComponent(LoginPageComponent);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('button')).toBeDefined()
 
  });

it('should check if after button is clicked user verification is working and route change' , async() => {
       const fixture = TestBed.createComponent(LoginPageComponent );
    
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges()
         compiled.querySelector('textarea').textContent ="aaa"
          compiled.querySelector('button').click()
         fixture.detectChanges()
         expect(fixture.componentInstance.WilRouteChange).toBe(true)
  })
});
