import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ParkData {
    data: any = null;

    constructor( public http: Http ){

    }

    // loads the data!
    load() {
        if( this.data ){
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get('assets/data/data.json')
                .map( res => res.json()) // npm install rxjs@6 rxjs-compat@6 --save; restart ionic serve
                .subscribe(data=> {
                    this.data = data;
                    resolve(this.data);
                })
        })
    }


    // get all data
    getParks(){
        return this.load().then( data => {
            return data;
        });
    }


    getPark ( id ){
        let park = "NOT FOUND";
        for( let i = 0; i < this.data.length; i++ ){
            if( this.data[i].id == id ){
                park = this.data[i];
            }
        }
        return park;
    }

}
