import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientModule } from './client/client.module';
import { ScriptLoaderService } from './helpers/script-loader.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ ScriptLoaderService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
