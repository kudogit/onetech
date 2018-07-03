import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    "path": "",
    "component": ClientComponent,
    "children": [
      {
        "path": "trang-chu",
        "loadChildren": ".\/pages\/home\/home.module#HomeModule"
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientRoutingModule { }
