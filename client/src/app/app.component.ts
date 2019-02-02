import { Component } from '@angular/core';

import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showComponent: Boolean

  constructor(private router: Router, private db: AngularFireDatabase) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
          this.showComponent = event.url !== "/login";
      }
    });
  }
}
