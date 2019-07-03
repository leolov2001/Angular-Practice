//Template Driven Form

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-forms',
  templateUrl: './register-forms.component.html',
  styleUrls: ['./register-forms.component.css']
})
export class RegisterFormsComponent implements OnInit {
  uname: string;
  uage: number;

  constructor() {
    //this.uage=30;
    //this.uname='Leo';
   }
   
  ngOnInit() {
  }

  register(form){
   console.log("Registering User.")  
   //console.log("form.form") 
  }
}
