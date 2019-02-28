import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from '../app.routing';
import { LoaderComponent } from '../loader/loader.component';
import { 
  ButtonsModule,
  WavesModule, 
  CardsFreeModule, 
  TableModule,
  IconsModule
}
from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    Routing,
    ButtonsModule,
    WavesModule,
    CardsFreeModule,
    TableModule,
    IconsModule
  ]
})
export class UserModule { }
