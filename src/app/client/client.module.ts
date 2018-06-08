import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './pages/home/home.module';
import { ScriptLoaderService } from '../helpers/script-loader.service';


@NgModule({
  imports: [
    HomeModule,
    ClientRoutingModule
  ],
  declarations: [
    ClientComponent,
  ],
  providers: [ ScriptLoaderService ],
  bootstrap: [ClientComponent],
})
export class ClientModule { }
