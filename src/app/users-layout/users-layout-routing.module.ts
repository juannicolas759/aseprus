import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';

const routes: Routes = [
  { path: '', component: UserLayoutComponent, loadChildren: () => import('./modules/users-module/users-module.module').then(m => m.UsersModuleModule) },
  // { path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersLayoutRoutingModule { }
