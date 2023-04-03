import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersLayoutRoutingModule } from './users-layout-routing.module';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { IconsProviderModule } from '../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { UsersModuleModule } from './modules/users-module/users-module.module';

@NgModule({
  declarations: [
    UserLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    UsersLayoutRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    NzBreadCrumbModule,
    UsersModuleModule
  ]
})
export class UsersLayoutModule { }
