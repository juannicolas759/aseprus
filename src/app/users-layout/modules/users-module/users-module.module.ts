import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModuleRoutingModule } from './users-module-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    UsersModuleRoutingModule,
    NzGridModule
  ]
})
export class UsersModuleModule { }
