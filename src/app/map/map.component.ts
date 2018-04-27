import { Component, OnInit } from '@angular/core';
import { DealersService } from '../service/dealers/dealers.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    private dealersService: DealersService
  ) { }

  ngOnInit() {
  }

  title: string = 'My first AGM project';
  lat: number = 35.2263714;
  lng: number = -80.7990185;

  getDealerLocation () {
    this.dealersService.getDealers().subscribe( res => {
      this.lat = res.location.lat;
      this.lng = res.location.lon;
    })
  }

}
