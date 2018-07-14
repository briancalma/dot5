import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GooglePlus} from '@ionic-native/google-plus';





// import services
import {FoodCategoryService} from '../services/food-category-service';
import {FoodService} from '../services/food-service';
import {GatewayService} from '../services/gateway-service';
import {HotelService} from '../services/hotel-service';
import {RestaurantService} from '../services/restaurant-service';
import {ActivityService} from '../services/activity-service';
import {AttractionService} from '../services/attraction-service';
import {ContactService} from '../services/contact-service';
// end import services

// import pages
import {ActivityPage} from '../pages/activity/activity';
import {AttractionDetailPage} from '../pages/attraction-detail/attraction-detail';
import {AttractionsPage} from '../pages/attractions/attractions';
import {FindFriendPage} from '../pages/find-friend/find-friend';
import {HomePage} from '../pages/home/home';
import {HotelDetailPage} from '../pages/hotel-detail/hotel-detail';
import {HotelsPage} from '../pages/hotels/hotels';
import {LoginPage} from '../pages/login/login';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {ModalFilterPage} from '../pages/modal-filter/modal-filter';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {RegisterPage} from '../pages/register/register';
import {RestaurantDetailPage} from '../pages/restaurant-detail/restaurant-detail';
import {RestaurantsPage} from '../pages/restaurants/restaurants';
import {SearchPage} from '../pages/search/search';
import {SettingPage} from '../pages/setting/setting';
import {WelcomePage} from '../pages/welcome/welcome';
import {CamnortePage} from '../pages/camnorte/camnorte';
import {CamsurPage} from '../pages/camsur/camsur';
import {CatanduanesPage} from '../pages/catanduanes/catanduanes';
import {SorsogonPage} from '../pages/sorsogon/sorsogon';
import {MasbatePage} from '../pages/masbate/masbate';
import {AlbayPage} from '../pages/albay/albay';
// end import pages

// import { AngularFireModule  } from 'angularfire2';
// import firebase from 'firebase';

// export const firebaseConfig = {
//     apiKey: "AIzaSyBSCLZGJ0Jne3ghJTsD43IVTW3ZYNZUokI",
//     authDomain: "dotapp-e515a.firebaseapp.com",
//     databaseURL: "https://dotapp-e515a.firebaseio.com",
//     projectId: "dotapp-e515a",
//     storageBucket: "dotapp-e515a.appspot.com",
//     messagingSenderId: "20792907870"
// }

// firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    ActivityPage,
    AttractionDetailPage,
    AttractionsPage,
    FindFriendPage,
    HomePage,
    HotelDetailPage,
    HotelsPage,
    LoginPage,
    MainTabsPage,
    ModalFilterPage,
    MyProfilePage,
    RegisterPage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
    SettingPage,
    WelcomePage,
    CamnortePage,
    CamsurPage,
    MasbatePage,
    SorsogonPage,
    CatanduanesPage,
    AlbayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivityPage,
    AttractionDetailPage,
    AttractionsPage,
    FindFriendPage,
    HomePage,
    HotelDetailPage,
    HotelsPage,
    LoginPage,
    MainTabsPage,
    ModalFilterPage,
    MyProfilePage,
    RegisterPage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
    SettingPage,
    WelcomePage,
    CamnortePage,
    CamsurPage,
    MasbatePage,
    SorsogonPage,
    CatanduanesPage,
    AlbayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FoodCategoryService,
    FoodService,
    GatewayService,
    HotelService,
    RestaurantService,

    ActivityService,
    AttractionService,
    ContactService,
    GooglePlus

    /* import services */
  ]
})
export class AppModule {
}
