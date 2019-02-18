import { async, TestBed,ComponentFixture } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { AppComponent } from '../app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ProfileComponent } from '../profile/profile.component'
import { from } from 'rxjs';
import { By, by } from 'protractor';

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

it('should check if after button is clicked user verification is working and route change' , () => {
       const fixture = TestBed.createComponent(AppComponent);
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges()
        compiled.querySelector("#changeRoute").click()
        fixture.detectChanges()
        expect(compiled.querySelector("LoginPageComponent")).toBeUndefined()
        // compiled.querySelector('#userLogIn').textContent ="aaa"

        // compiled.querySelector('#button').click()
      //   expect(location.pathname).toBe("/ddd")
      // fixture.detectChanges()

// expect(location.pathname).toBe("true")


    
})

});
