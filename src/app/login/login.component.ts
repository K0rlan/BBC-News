import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {ComponentCanDeactivate} from '../exit.order.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, ComponentCanDeactivate  {

  constructor(private auth: AuthService, private router: Router) { }
  saved = false;
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  setStatus(){
    this.auth.setStatus();
    this.saved = true;
    this.router.navigate(['']);
  }
  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved){
      return confirm('Log in is not completed. Want to exit?');
    }
    return true;
  }
}
