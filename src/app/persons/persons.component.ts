import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: Person[] = [];
  validationMessage: string = "";

  constructor() { }

  ngOnInit() {
  }

  addPerson(name: string, mobile: string) {
    for(var p of this.persons){
      if(p.name == name){
        this.validationMessage = "Name already exists in our system. Please Try Again!!"
        return;
      }
    }
    if (((<string>mobile).length) != 10) {
      this.validationMessage = "Mobile Number should contain 10 digits. Please try again!!";
    }
    else {
      var p = new Person();
      p.name = name; p.mobile = mobile;
      this.persons.push(p);

      this.validationMessage = "";
      console.log(this.persons);
    }
  }

  deletePerson(pos: number){
    //to find the position of the person.
    /*
    var pos = -1;
    for(var idx in this.persons){
      if(this.persons[idx].name == name){
        pos = parseInt(idx);
        break;
      }
    }
    if(pos >=0){
      */
      this.persons.splice(pos,1);
    
    
  }
}
