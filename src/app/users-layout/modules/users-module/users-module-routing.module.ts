import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { MaterialComponent } from './material/material.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassPresentationComponent } from './class-presentation/class-presentation.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent},
  { path: 'classroom', component: ClassroomComponent},
  { path: 'class-list', component: ClassListComponent},
  { path: 'class-presentation:id', component: ClassPresentationComponent},
  { path: 'material', component: MaterialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersModuleRoutingModule { }
