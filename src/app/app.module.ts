import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdalService } from 'adal-angular4';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
