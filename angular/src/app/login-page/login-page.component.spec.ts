import { async, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { AppComponent } from '../app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ProfileComponent } from '../profile/profile.component'

fdescribe('ProfileComponent', () => {

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


  it(' check if button is created ', () => {
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
