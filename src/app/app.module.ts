import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BnNgFileExplorerModule } from 'projects/bn-ng-file-explorer/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BnNgFileExplorerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
