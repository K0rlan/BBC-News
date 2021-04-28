import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NewsService} from '../../services/news.service';
import {first} from 'rxjs/operators';
import {User} from '../../model/User';
import {News} from '../../model/News';
import {LoggingService} from '../../services/logging.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
  providers: [NewsService, LoggingService]
})
export class FavoriteListComponent implements OnInit {
  user: User = null;

  constructor(private accountService: AuthService, private newsService: NewsService) {
    this.user = this.accountService.userValue[0];
  }

  ngOnInit(): void {
  }

  changeLike(news: News): any{
    news.favStatus = !news.favStatus;
    console.log(news.favStatus);
    // tslint:disable-next-line:prefer-for-of
    if (news.favStatus === true){
      this.user.favList.push(news);
      this.newsService.updatePet(news).subscribe(data => console.log(data), error => console.log(error));
      this.accountService.update(this.user)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            alert('error');
          });
    }else{
      this.user.favList = this.user.favList.filter(item => item !== news);
      this.newsService.updatePet(news).subscribe(data => console.log(data), error => console.log(error));
      this.accountService.update(this.user).subscribe(data => console.log(data), error => console.log(error));
      console.log(this.user);
    }
  }
}
