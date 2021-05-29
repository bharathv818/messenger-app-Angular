import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
 
  enteredValue = '';
  newPost = 'No content';

  sendMsg(){
    this.newPost= this.enteredValue;
    console.log(this.newPost);
  }

  constructor() { }

  ngOnInit(){
  }

}
