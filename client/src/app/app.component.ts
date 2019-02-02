import { NavComponent } from './nav/nav.component';
import { Component } from '@angular/core';

import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    showComponent: Boolean

    constructor(private router: Router) {
        router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                if (event.url !== "/login" && event.url !== "/register") {
                    this.showComponent = true;
                }
            }
        });
    }
}
