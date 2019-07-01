import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  today: Date;
  isMarried: boolean = false;
  
  constructor() {
    this.today = new Date();
  }

  ngOnInit() {
  }

  showMouse(e: any) {
    console.log(e.x + "," + e.y)
  }

}
