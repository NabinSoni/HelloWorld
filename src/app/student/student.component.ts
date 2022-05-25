import { Component, OnInit } from '@angular/core';

@Component({
  //selectors can be made as class or attribute using Dot and Square Bracket resp.
  // selector: '[app-student]' --> attribute
  selector: '.app-student', // class
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { 
    //It will execute under constructor
    setTimeout(() => {
      this.car = true
    }, 2000);
  }

  ngOnInit(): void {
  }
  // Below are properties name , serverId
  name = "Hi Nabin";
  pen = "My new Pen";
  serverId : number = 12; // this is the way to restrict user from change variable data type
  getServerName(){
    return this.name;
  }
  car = false;
  //one-type of binding (Event Binding)
  changeName(event:Event){
    this.name = (<HTMLInputElement>event.target).value;
  }
  //Array's format
  a = [1,2,3,4];


  
}
