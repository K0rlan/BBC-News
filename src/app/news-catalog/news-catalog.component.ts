import {Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-news-catalog',
  templateUrl: './news-catalog.component.html',
  styleUrls: ['./news-catalog.component.css']
})
export class NewsCatalogComponent implements OnInit {

  list: any;

  constructor() {
    this.list = [

      { "id" : "1",
        "name" : "Lorem Ipsum is simply dummy text ",
        "more" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        "img" : "assets/pol1.jpg",
        "likes" : "0",
      },
      { "id" : "2",
        "name" : "Lorem Ipsum is simply dummy text ",
        "more" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        "img" : "assets/3.jpg",
        "likes" : "0",
      },
      { "id" : "3",
        "name" : "Lorem Ipsum is simply dummy text ",
        "more" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        "img" : "assets/6.jpg",
        "likes" : "0",
      },
      { "id" : "4",
        "name" : "Lorem Ipsum is simply dummy text ",
        "more" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        "img" : "assets/sc5.jpg",
        "likes" : "0",
      },
      { "id" : "5",
        "name" : "Lorem Ipsum is simply dummy text ",
        "more" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        "img" : "assets/pol2.jpg",
        "likes" : "0",
      },
      { "id" : "6",
        "name" : "Lorem Ipsum is simply dummy text ",
        "more" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        "img" : "assets/sc1.jpg",
        "likes" : "0",
      }

    ]
  }
  ngOnInit(): void {
    this.list.likes = 0;
  }
  addItem(plant: any) {
    this.list.push(plant);
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }
}
