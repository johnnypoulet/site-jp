import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>{{title}}</h1>
    <h2>My favorite bunz are: {{myButt}} </h2>
    <app-bunz></app-bunz>
    `

})
export class AppComponent {
  title = 'site-jp';
  myButt = 'radial-nards';
    constructor(){
      //console.timeLog();
      this.changeButt('Dom DeLouise');

    }
    changeButt(myButt){
      this.myButt = myButt;
    }
}
