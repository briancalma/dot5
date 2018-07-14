import {Injectable} from "@angular/core";
import {HOTELS} from "./mock-hotels";

@Injectable()
export class HotelService {
  private hotels:any;

  constructor() {
    this.hotels = HOTELS;
  }

  getAll() {
    return this.hotels;
  }

  getItem(id) {
    for (var i = 0; i < this.hotels.length; i++) {
      if (this.hotels[i].id === parseInt(id)) {
        return this.hotels[i];
      }
    }
    return null;
  }

  remove(item) {
    this.hotels.splice(this.hotels.indexOf(item), 1);
  }
  
  getItemByPlace(place){
    
    var h = [];
    
    for (var i = 0; i < this.hotels.length; i++) {
      if (this.hotels[i].place == place ) {
        // console.log(this.hotels[i].place);
        h.push(this.hotels[i]);
      }
    }
    
    return h;
  }
  
}