import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientModule } from './client/client.module';
import { ScriptLoaderService } from './helpers/script-loader.service';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
