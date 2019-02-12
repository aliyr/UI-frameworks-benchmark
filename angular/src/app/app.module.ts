import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollerComponent } from './virtual-scroller/virtual-scroller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { RouterModule, Routes } from '@angular/router';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeModule } from 'angular-tree-component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChechboxmoduleComponent } from './chechboxmodule/chechboxmodule.component';
import { from } from 'rxjs';
import { UsersComponent } from './users/users.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PersistenceModule  } from 'angular-persistence';
import { ProfileComponent } from './profile/profile.component';

const appRoutes : Routes = [
  {path: 'VirtualScrollerComponent' , component : VirtualScrollerComponent},
{path: 'treeView' , component :TreeViewComponent },
{path: 'checkbox' , component :CheckboxComponent },
{path: 'users' , component :UsersComponent },
{path: 'login-page' , component :LoginPageComponent }



]

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollerComponent,
    TreeViewComponent,
    CheckboxComponent,
    ChechboxmoduleComponent,
    UsersComponent,
    LoginPageComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    PersistenceModule,
    RouterModule.forRoot(
      appRoutes,

    ),
    TreeModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

