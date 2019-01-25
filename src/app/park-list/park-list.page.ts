import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// the park data
import { ParkData } from './../providers/park-data';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.page.html',
  styleUrls: ['./park-list.page.scss'],
})
export class ParkListPage implements OnInit {

  parks: Array<Object> = [];

  constructor( public parkData: ParkData, public router: Router ) { 
    parkData.getParks().then( data => {
      this.parks = data;
    })
  }

  goParkDetails( theParkData ){
    let url = '/tabs/details/' + theParkData.id
    this.router.navigate([url]);
    
  }

  ngOnInit() {
  }

}
