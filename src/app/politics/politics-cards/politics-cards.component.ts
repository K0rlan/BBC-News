import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../model/News';

@Component({
  selector: 'app-politics-cards',
  templateUrl: './politics-cards.component.html',
  styleUrls: ['./politics-cards.component.css']
})
export class PoliticsCardsComponent implements OnInit {

  @Input() searchText: string;
  clickedNews: number;
  listOfNews: News[] = [
    {
      id: 1,
      name: 'Juventus Signer De Ligt',
      image: 'assets/pol1.jpg',
      info: 'De Ligt joined to Juventus for 80 millions euro.'
    },
    {
      id: 2,
      name: 'Eden Hazard in Real Madrid',
      image: 'assets/pol3.jpg',
      info: 'Real Madrid signed Eden Hazard for 100 millions euro.'
    },
    {
      id: 3,
      name: 'Griezman joined to Barca',
      image: 'assets/pol4.jpg',
      info: 'Barcelona paid to Athletico Madrid 120 millions euro.'
    },
    {
      id: 4,
      name: 'Juventus Signer De Ligt',
      image: 'assets/pol5.jpg',
      info: 'De Ligt joined to Juventus for 80 millions euro.'
    },
    {
      id: 5,
      name: 'Eden Hazard in Real Madrid',
      image: 'assets/pol6.jpg',
      info: 'Real Madrid signed Eden Hazard for 100 millions euro.'
    },
    {
      id: 6,
      name: 'Griezman joined to Barca',
      image: 'assets/pol2.jpg',
      info: 'Barcelona paid to Athletico Madrid 120 millions euro.'
    }
  ];

  showChild = false;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showCertainNews(item: boolean, id: number) {
    // this.showChild = !this.showChild;
    this.showChild = item;
    this.clickedNews = id;
  }

}
