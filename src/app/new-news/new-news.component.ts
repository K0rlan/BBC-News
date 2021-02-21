import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.css']
})
export class NewNewsComponent implements OnInit {

  @Input() item: string;
  constructor() { }

  ngOnInit(): void {
  }

}