import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { MaterialComponent } from './material/material.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassPresentationComponent } from './class-presentation/class-presentation.component';
import { ClassAdsComponent } from './class-ads/class-ads.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent},
  { path: '', component: AboutUsComponent},
  { path: 'classroom', component: ClassroomComponent},
  { path: 'class-list', component: ClassListComponent},
  { path: 'class-presentation/1', component: ClassPresentationComponent},
  { path: 'class-presentation/2', component: ClassAdsComponent},
  { path: 'material', component: MaterialComponent},
  { path: 'ups', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersModuleRoutingModule { }
