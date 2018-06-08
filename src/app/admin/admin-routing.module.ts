import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        "path": "",
        "component": AdminComponent,
        "children": [
            {
                "path": "admin",
                "loadChildren": ".\/modules\/home\/home.module#HomeModule"
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }
