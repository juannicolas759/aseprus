import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'emma', loadChildren: () => import('./admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) },
  { path: 'api', loadChildren: () => import('./users-layout/users-layout.module').then(m => m.UsersLayoutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
