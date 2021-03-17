import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../model/News';

@Component({
  selector: 'app-sport-cards',
  templateUrl: './sport-cards.component.html',
  styleUrls: ['./sport-cards.component.css']
})
export class SportCardsComponent implements OnInit {

  @Input() searchText: string;
  clickedNews: number;
  listOfNews: News[] = [
    {
      id: 1,
      name: 'Juventus Signer De Ligt',
      image: 'assets/2.jpg',
      info: 'De Ligt joined to Juventus for 80 millions euro.'
    },
    {
      id: 2,
      name: 'Eden Hazard in Real Madrid',
      image: 'assets/3.jpg',
      info: 'Real Madrid signed Eden Hazard for 100 millions euro.'
    },
    {
      id: 3,
      name: 'Griezman joined to Barca',
      image: 'assets/4.jpg',
      info: 'Barcelona paid to Athletico Madrid 120 millions euro.'
    },
    {
      id: 4,
      name: 'Juventus Signer De Ligt',
      image: 'assets/5.jpeg',
      info: 'De Ligt joined to Juventus for 80 millions euro.'
    },
    {
      id: 5,
      name: 'Eden Hazard in Real Madrid',
      image: 'assets/6.jpg',
      info: 'Real Madrid signed Eden Hazard for 100 millions euro.'
    },
    {
      id: 6,
      name: 'Griezman joined to Barca',
      image: 'assets/7.jpg',
      info: 'Barcelona paid to Athletico Madrid 120 millions euro.'
    }
  ];

  showChild = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showCertainNews(item: boolean, id: number) {
    // this.showChild = !this.showChild;
    this.showChild = item;
    this.clickedNews = id;
  }

}
