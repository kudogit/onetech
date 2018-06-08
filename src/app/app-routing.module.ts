import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'trang-chu', loadChildren: './client/client.module#ClientModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: '', redirectTo: 'trang-chu', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }