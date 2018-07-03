import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './auth/logout/logout.component';


const routes: Routes = [
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'logout', component: LogoutComponent },
  { path: 'trang-chu', loadChildren: './client/client.module#ClientModule' },
  { path: '', redirectTo: 'trang-chu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
