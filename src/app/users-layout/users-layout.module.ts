import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersLayoutRoutingModule } from './users-layout-routing.module';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';


@NgModule({
  declarations: [
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    UsersLayoutRoutingModule
  ]
})
export class UsersLayoutModule { }
