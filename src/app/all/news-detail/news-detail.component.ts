import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {first} from 'rxjs/operators';
import {User} from '../../model/User';
import {News} from '../../model/News';
import {NewsService} from '../../services/news.service';
import {LoggingService} from '../../services/logging.service';


@Component({
  selector: 'app-pet-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  providers: [NewsService, LoggingService]
})
export class NewsDetailComponent implements OnInit {
  num: number;
  private subscription: Subscription;
  user: User;
  news: News;

  constructor(private newsService: NewsService, private activateRoute: ActivatedRoute,
              private accountService: AuthService, private router: Router) {
    this.subscription = activateRoute.params.subscribe(params => this.num = params.id);
    this.user = this.accountService.userValue[0];
  }

  ngOnInit(): void {
    console.log(this.num);
    this.getBreedById(this.num);
    console.log(this.user.name);
    // console.log(this.pet.name);
  }

  // tslint:disable-next-line:typedef
  getBreedById(id: number){
    this.newsService.getBreedById(id).subscribe(data => {
      console.log(data);
      this.news = data;
      console.log(this.news.name);
      console.log(this.user.name);
    });
  }

  changeLike(): any{
    this.news.favStatus = !this.news.favStatus;
    console.log(this.news.favStatus);
    // tslint:disable-next-line:prefer-for-of
    if (this.news.favStatus === true){
      for (const test of this.user.favList){
        if (test === this.news){
          console.log('I AM TUT');
          console.log(test);
        }else{
          console.log('I AM  NOT TUT');
        }
      }
      this.user.favList.push(this.news);
      this.newsService.updatePet(this.news).subscribe(data => console.log(data), error => console.log(error));
      this.accountService.update(this.user)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            alert('error');
          });
    }else {
      for (const test of this.user.favList){
        if (test.id === this.news.id){
          console.log('I AM HERE');
          console.log(test);
        }else{
          console.log('I AM  NOT HERE');
          console.log(this.news);
        }
      }
      this.user.favList = this.user.favList.filter(item => item.id !== this.news.id);
      this.accountService.update(this.user).subscribe(data => console.log(data.favList), error => console.log(error));
      console.log('CHECKAI');
      console.log(this.user.favList);
      this.newsService.updatePet(this.news).subscribe(data => console.log(data.name), error => console.log(error));
      console.log(this.user);
    }
  }
}
