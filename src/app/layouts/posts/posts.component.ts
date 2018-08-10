import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  message:string;

  receiveMessage($event) {
    this.message = $event
    console.log(this.message);
  }
}
