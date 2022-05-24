import { Component } from '@angular/core';
//all js code
// app-root 
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: '<div class="app-student"></div>',  
  styles: ['h3{color:"blue"}'],
  styleUrls: ['./app.component.css']
})
//if you have to create any event handeller, it acts like class
//all variables will be in small letter camel case
export class AppComponent {
  title = 'Hello Nabin!!!';
  name = 'Angular Project';
}
