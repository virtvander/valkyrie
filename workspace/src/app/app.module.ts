import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { UserService } from './services/user.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
