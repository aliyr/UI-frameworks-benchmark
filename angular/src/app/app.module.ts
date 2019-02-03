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
const appRoutes : Routes = [
  {path: 'VirtualScrollerComponent' , component : VirtualScrollerComponent},
{path: 'treeView' , component :TreeViewComponent },
{path: 'checkbox' , component :CheckboxComponent }


]

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollerComponent,
    TreeViewComponent,
    CheckboxComponent,
    ChechboxmoduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    RouterModule.forRoot(
      appRoutes,

    ),
    TreeModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
