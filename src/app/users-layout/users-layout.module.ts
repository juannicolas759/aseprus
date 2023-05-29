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
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { SafePipe } from '../pipes/safe.pipe';

@NgModule({
  declarations: [
    UserLayoutComponent
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
    UsersModuleModule, 
    NzGridModule,
    NzPageHeaderModule
  ]
})
export class UsersLayoutModule { }
