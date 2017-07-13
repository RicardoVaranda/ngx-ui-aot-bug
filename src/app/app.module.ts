import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxUIModule} from '@swimlane/ngx-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
