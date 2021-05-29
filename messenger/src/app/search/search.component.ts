import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  enteredValue = '';
  newsearch = 'NO content';
  onSearch(){
    this.newsearch = this.enteredValue;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
