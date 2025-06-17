import { Component, AfterViewInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: false,
})
export class MapPage implements AfterViewInit {
  map!: mapboxgl.Map;

  ngAfterViewInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoidG9taWthemUxIiwiYSI6ImNtYzAwdG81djFjdGsycXNiaHB6N3gxZHgifQ.BRrWeRX1vv7PdksH9RN42w';

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/tomikaze1/cmc0s61t0000601sr48iu3n18',
      center: [121.0, 14.5],
      zoom: 15,
    });

    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(new mapboxgl.FullscreenControl());
    this.map.addControl(new mapboxgl.ScaleControl());

    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    this.map.on('load', () => {
      this.map.resize(); 

      new mapboxgl.Marker({ color: 'orange' })
        .setLngLat([121.0005, 14.5005])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Main Stage 🎤'))
        .addTo(this.map);

      new mapboxgl.Marker({ color: 'purple' })
        .setLngLat([121.002, 14.502])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Food Court 🍔'))
        .addTo(this.map);
    });
  }

  ionViewDidEnter() {
    if (this.map) {
      this.map.resize(); 
    }
  }
}
