import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lms-button';
  ngOnInit() {
  }

  save() {
    console.log("Hey Hi!!!!!!!!!");
  }
  goBack() {
    console.log("Hey Hi!!!!!!!!!");
  }
}
