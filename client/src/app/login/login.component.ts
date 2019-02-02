import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private firebase: AngularFireModule, private auth: AngularFireAuth) { }

    ngOnInit() {
        // this.firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         // User is signed in.
        //         document.getElementById("user_div").style.display = "block";
        //         document.getElementById("login_div").style.display = "none";
        //         var user = this.firebase.auth().currentUser;

        //         if (user != null) {
        //             var email_id = user.email;
        //             document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
        //         }
        //     }

        //     else {
        //         // No user is signed in.
        //         document.getElementById("user_div").style.display = "none";
        //         document.getElementById("login_div").style.display = "block";
        //     }
        // });

        // function login() {
        //     var userEmail = document.getElementById("email_field").value;
        //     var userPass = document.getElementById("password_field").value;

        //     this.firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        //         // Handle Errors here.
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         window.alert("Error : " + errorMessage);
        //         // Do other stuff??
        //     });
        // }

        // function logout() {
        //     this.firebase.auth().signOut();
        // }
    }

}
