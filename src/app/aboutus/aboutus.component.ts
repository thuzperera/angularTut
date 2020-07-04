import { Component, OnInit } from '@angular/core';

export interface Employee{
  id : string,
  name : string,
  email : string,
}
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  employees : Employee[] = [
    { id : '1', name : 'Thushara', email : 'thushara@gmail.com' },
    { id : '2', name : 'Ruwan', email : 'ruwan@gmail.com' },
    { id : '3', name : 'Prabashi', email : 'praba@gmail.com'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
    alert("Hello World");
    console.log("Hwllo Thuz");
  }

}
