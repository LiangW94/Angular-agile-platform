import { Component } from '@angular/core';
import { trigger, transition, state, style} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false;

  switchTheme (dark) {
    this.darkTheme = dark;
  }
}

