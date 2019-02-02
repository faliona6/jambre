import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private firebase: AngularFireModule, private afAuth: AngularFireAuth) { }

    ngOnInit() {
        
    }

}
