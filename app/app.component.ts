import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';

  currency = 
  [
    {name:"inr to usd", value:1, converter:70},
    {name:"inr to Euro", value:1, converter:80},
    {name:"inr to usd", value:2, converter:70},
    {name:"inr to Euro", value:2, converter:80},
  ]
}
