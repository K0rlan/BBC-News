import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../model/News';

@Component({
  selector: 'app-science-cards',
  templateUrl: './science-cards.component.html',
  styleUrls: ['./science-cards.component.css']
})
export class ScienceCardsComponent implements OnInit {

  @Input() searchText: string;
  clickedNews: number;
  listOfNews: News[] = [
    {
      id: 1,
      name: 'Juventus Signer De Ligt',
      image: 'assets/sc2.jpg',
      info: 'De Ligt joined to Juventus for 80 millions euro.'
    },
    {
      id: 2,
      name: 'Eden Hazard in Real Madrid',
      image: 'assets/sc3.jpg',
      info: 'Real Madrid signed Eden Hazard for 100 millions euro.'
    },
    {
      id: 3,
      name: 'Griezman joined to Barca',
      image: 'assets/sc4.jpg',
      info: 'Barcelona paid to Athletico Madrid 120 millions euro.'
    },
    {
      id: 4,
      name: 'Juventus Signer De Ligt',
      image: 'assets/sc5.jpg',
      info: 'De Ligt joined to Juventus for 80 millions euro.'
    },
    {
      id: 5,
      name: 'Eden Hazard in Real Madrid',
      image: 'assets/sc6.jpg',
      info: 'Real Madrid signed Eden Hazard for 100 millions euro.'
    },
    {
      id: 6,
      name: 'Griezman joined to Barca',
      image: 'assets/sc1.jpg',
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
