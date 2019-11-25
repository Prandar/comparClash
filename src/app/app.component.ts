import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: number = Date.now();
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  title = 'ClashCompar';
}
