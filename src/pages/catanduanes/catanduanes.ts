import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams } from 'ionic-angular';
import {GatewayService} from "../../services/gateway-service";
import {HotelService} from "../../services/hotel-service";
import {RestaurantService} from "../../services/restaurant-service";
import {AttractionService} from "../../services/attraction-service";
import {RestaurantDetailPage} from "../restaurant-detail/restaurant-detail";
import {HotelDetailPage} from "../hotel-detail/hotel-detail";
import {RestaurantsPage} from "../restaurants/restaurants";
import {HotelsPage} from "../hotels/hotels";
import {AttractionsPage} from "../attractions/attractions";

/**
 * Generated class for the CatanduanesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catanduanes',
  templateUrl: 'catanduanes.html',
})
export class CatanduanesPage {
// restaurants
  public restaurants: any;
  // hotels
  public hotels: any;
  // attractions
  public attractions: any;
  
  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }
  
  constructor(public app: App, public nav: NavController, public gatewayService: GatewayService,
              public hotelService: HotelService, public restaurantService: RestaurantService,
              public attractionService: AttractionService) {
    // set sample data
    this.restaurants = restaurantService.getItemByPlace("Catanduanes");
    this.hotels = hotelService.getItemByPlace("Catanduanes");
    this.attractions = attractionService.getItemByPlace("Catanduanes");

    // console.log(hotelService.getItemByPlace("Camarines Norte"));
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CamnortePage');
  }
  
  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // view restaurant detail
  viewRestaurant(id) {
    this.app.getRootNav().push(RestaurantDetailPage, {id: id})
  }

  // view hotel detail
  viewHotel(id) {
    this.app.getRootNav().push(HotelDetailPage, {id: id})
  }

  // view attraction detail
  viewAttraction(id) {
    this.app.getRootNav().push(AttractionsPage, {id: id})
  }

  // view all restaurants
  viewAllRestaurants() {
    this.app.getRootNav().push(RestaurantsPage);
  }

  // view all hotels
  viewAllHotels() {
    this.app.getRootNav().push(HotelsPage);
  }

  // view all restaurants
  viewAllAttractions() {
    this.app.getRootNav().push(AttractionsPage);
  }

}
