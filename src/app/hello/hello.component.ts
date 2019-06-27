import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: 'hello.component.html'
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  message = 'Hello Angular';

  greet(name: string) {
    if (name == "") {
      name = "Guest";
    }
    this.message = "Good Morning, " + name;

  }

}
