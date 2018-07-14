import {Component,OnInit,NgZone} from '@angular/core';
import {Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { GooglePlus } from '@ionic-native/google-plus';

// import pages
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {SettingPage} from '../pages/setting/setting';
import {FindFriendPage} from '../pages/find-friend/find-friend';
import {HotelsPage} from '../pages/hotels/hotels';
import {RestaurantsPage} from '../pages/restaurants/restaurants';
import {AttractionsPage} from '../pages/attractions/attractions';
import {CamnortePage} from '../pages/camnorte/camnorte';
import {CamsurPage} from '../pages/camsur/camsur';
import {CatanduanesPage} from '../pages/catanduanes/catanduanes';
import {SorsogonPage} from '../pages/sorsogon/sorsogon';
import {MasbatePage} from '../pages/masbate/masbate';
import {AlbayPage} from '../pages/albay/albay';
// end import pages

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {

  public rootPage: any;

  public nav: any;

  public pages = [
    /*
    {
      title: 'Home',
      count: 0,
      component: MainTabsPage
    },

    {
      title: 'Invite Friend',
      count: 0,
      component: FindFriendPage
    },

    {
      title: 'Hotels',
      count: 0,
      component: HotelsPage
    },

    {
      title: 'Restaurants',
      count: 0,
      component: RestaurantsPage
    },

    {
      title: 'Attractions',
      count: 0,
      component: AttractionsPage
    },

    {
      title: 'Settings',
      count: 0,
      component: SettingPage
    },
    {
      title: 'Logout',
      count: 0,
      component: LoginPage
    },
    */
    {
      title: 'Albay',
      count: 0,
      component: AlbayPage
    },
    {
      title: 'Camarines Norte',
      count: 0,
      component: CamnortePage
    },
    {
      title: 'Camarines Sur',
      count: 0,
      component: CamsurPage
    },
    {
      title: 'Masbate',
      count: 0,
      component: MasbatePage
    },
    {
      title: 'Sorsogon',
      count: 0,
      component: SorsogonPage
    },
    {
      title: 'Catanduanes',
      count: 0,
      component: CatanduanesPage
    },
    {
      title: 'Home',
      count: 0,
      component: MainTabsPage,
      index:1
    },

    {
      title: 'Invite Friend',
      count: 0,
      component: FindFriendPage
    },

    {
      title: 'Hotels',
      count: 0,
      component: HotelsPage
    },

    {
      title: 'Restaurants',
      count: 0,
      component: RestaurantsPage
    },

    {
      title: 'Attractions',
      count: 0,
      component: AttractionsPage
    },

    {
      title: 'Settings',
      count: 0,
      component: SettingPage
    },
    {
      title: 'Logout',
      count: 0,
      component: LoginPage
    }
    // import menu
  ];
  
  // public pages = [
  //   {
  //     title: 'Albay',
  //     count: 0,
  //     component: CamarinesNortePage
  //   },

  //   {
  //     title: 'Camarines Norte',
  //     count: 0,
  //     component: FindFriendPage
  //   },

  //   {
  //     title: 'Camarines Sur',
  //     count: 0,
  //     component: HotelsPage
  //   },

  //   {
  //     title: 'Catanduanes',
  //     count: 0,
  //     component: RestaurantsPage
  //   },

  //   {
  //     title: 'Masbate',
  //     count: 0,
  //     component: AttractionsPage
  //   },

  //   {
  //     title: 'Sorsogon',
  //     count: 0,
  //     component: SettingPage
  //   },
    
  //   {
  //     title: 'Logout',
  //     count: 0,
  //     component: LoginPage
  //   }
  // ];
    // import menu

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public googlePlus: GooglePlus, public zone: NgZone) {
    this.rootPage = WelcomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      
      this.zone.run(() => {
        this.checkLogin();
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  async checkLogin(){
    try {
      let status = await this.googlePlus.trySilentLogin({});
      console.log("User Found");
      // this.rootPage = HomePage;
    } catch (error) {
      console.log("User Not Found");
      // this.rootPage = "LoginPage"; 
    }
  }
  

  
}
