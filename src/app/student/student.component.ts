import { Component, OnInit } from '@angular/core';

@Component({
  //selectors can be made as class or attribute using Dot and Square Bracket resp.
  // selector: '[app-student]' --> attribute
  selector: '.app-student', // class
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = "Hi Nabin";
}
