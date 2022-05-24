//It tells application to fit together, for binding

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { StudentComponent } from './app.module.ts';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //we declare all new components here
    AppComponent,
    StudentComponent
  ],
  imports: [
    //we import pre-defined libraries
    BrowserModule,
    FormsModule,

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
