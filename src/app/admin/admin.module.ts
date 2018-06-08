import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeModule } from './modules/home/home.module';
import { ScriptLoaderService } from '../helpers/script-loader.service';


@NgModule({
  imports: [
    HomeModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
  ],
  providers: [ ScriptLoaderService ],
  bootstrap: [ AdminComponent ],
})
export class AdminModule { }
