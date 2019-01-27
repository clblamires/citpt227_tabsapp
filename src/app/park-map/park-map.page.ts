import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-park-map',
  templateUrl: './park-map.page.html',
  styleUrls: ['./park-map.page.scss'],
})
export class ParkMapPage implements OnInit {

  // map: google.maps.Map;
  // map: GoogleMap;
  map: any;

  constructor( public platform: Platform ) {
    this.map = null;
  }

  ngOnInit() {
    this.platform.ready().then( ()=> {
      this.initializeMap();
    })
  }

  initializeMap(){
    // this.map = GoogleMaps.create("map_content")
    // this.map = new google.maps.Map( document.getElementById("map_content"), {
    //   zoom: 3,
    //   center: new google.maps.LatLng(40,-98)
    // })

  }


}
