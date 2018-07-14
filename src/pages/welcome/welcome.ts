import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams,Platform,MenuController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import {MainTabsPage} from "../main-tabs/main-tabs";
import { Observable } from 'rxjs/Observable';
import { GooglePlus } from '@ionic-native/google-plus';

// import firebase from 'firebase';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  
  constructor(public nav: NavController, public menuCtrl: MenuController,public googlePlus: GooglePlus,public platform:Platform) {
    this.menuCtrl.swipeEnable(false);
    
  }
  // go to home page
  goHome() {
    this.nav.setRoot(MainTabsPage);
  }

  // go to sign up page
  signUp() {
    this.nav.setRoot(RegisterPage);
  }

  googleLogin(){
    this.googlePlus.login({})
    .then(res => {
      console.log(res);
      alert("LOGIN!");
      alert(res.displayName);
    })
    .catch(err => {
      console.error(err);
    });
  }
  
  
}
