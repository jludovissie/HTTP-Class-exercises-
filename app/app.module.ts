import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { Exercise1Component } from './exercise1/exercise1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, Exercise1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
