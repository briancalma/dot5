import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams,Platform,MenuController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import {MainTabsPage} from "../main-tabs/main-tabs";
/*import { Observable } from 'rxjs/Observable';*/
import { GooglePlus } from '@ionic-native/google-plus';

import {Facebook} from "@ionic-native/facebook";

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
  
  isLoggedIn:boolean = false;
  users:any;
  
  
  constructor(public nav: NavController, public menuCtrl: MenuController,public platform:Platform,private fb:Facebook,private googlePlus:GooglePlus) {
    
    this.menuCtrl.swipeEnable(false);
    
    fb.getLoginStatus()
      .then(res => {
        console.log(res.result);
        if(res.status === "connect") {
          console.log("You are already loginned");
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('ERROR : ',e));
  }
  // go to home page
  goHome() {
    this.nav.setRoot(MainTabsPage);
  }

  // go to sign up page
  signUp() {
    this.nav.setRoot(RegisterPage);
  }
  
  facebookLogin() {
    this.fb.login(['public_profile','user_friends','email'])
        .then(res => {
          if(res.status === "connected") {
            this.isLoggedIn = true;
            this.getUserDetails(res.authResponse.userID);
            alert("Hello ! " + this.users.name);
          } else {
            this.isLoggedIn = false;
          }
        })
        .catch(e => console.log('Error in logging into facebook',e));
  }
  
  logout() {
    this.fb.logout()
        .then(res => this.isLoggedIn = false)
        .catch(e => console.log('Error in loggin out in facebook! ',e));
  }
  
  getUserDetails(userID) {
    this.fb.api("/" + userID + "/?fields=id,email,name,picture,gender",["public_profile"])
        .then(res => {
          console.log(res);
          this.users = res;
        })
        .catch(e => {
          console.log(e);
        });
  } 
  
  
  googleLogin() {
    
    alert("im a login!");
    console.log('do login!');
    
    this.googlePlus.login({})
      .then(res => {
        console.log(res);
        this.isLoggedIn = true;
        alert(res.displayName);
        
      })
      .catch(err => console.error(err));
  
    console.log('res is not showing');
        
    
  }
  
  googleLogout() {
    this.googlePlus.logout()
      .then(res => {
        console.log(res);
        this.isLoggedIn = false;
        alert('You are now logout!');
        
      })
      .catch(err => console.error(err));
  }
  
  // googleLogin(){
  //   this.googlePlus.login({})
  //   .then(res => {
  //     console.log(res);
  //     alert("LOGIN!");
  //     alert(res.displayName);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }
  
  
}
