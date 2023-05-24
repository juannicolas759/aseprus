import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModuleRoutingModule } from './users-module-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ClassroomComponent } from './classroom/classroom.component';
import { MaterialComponent } from './material/material.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassPresentationComponent } from './class-presentation/class-presentation.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    AboutUsComponent,
    ClassroomComponent,
    MaterialComponent,
    ClassListComponent,
    ClassPresentationComponent
  ],
  imports: [
    CommonModule,
    UsersModuleRoutingModule,
    NzGridModule,
    NzTimelineModule,
    NzListModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzDescriptionsModule,
    NzStatisticModule,
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzDividerModule,
    NzIconModule,
    NzTableModule,
    NzModalModule
  ]
})
export class UsersModuleModule { }
