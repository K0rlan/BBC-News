import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ComponentCanDeactivate} from '../exit.order.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, ComponentCanDeactivate {

  saved = false;

  // tslint:disable-next-line:typedef
  save(){
    this.saved = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved){
      return confirm('Registration is not completed. Want to exit?');
    }
    return true;
  }

}
