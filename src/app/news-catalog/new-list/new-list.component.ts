import {Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  @Input() list;

  text;
  private changengeLog: any;
  constructor() {
  }
  @Output() newLikeEvent = new EventEmitter<string>();
  today: number = Date.now();

  addLike() {
    this.list.likes++;
  }

  ngOnInit(): void {

  }


  ngOnChanges(changes:SimpleChanges): void {
    this.addLike();
  }

  ngDoCheck() {
  }
}
