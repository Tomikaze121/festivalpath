import { Component, AfterViewInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone:false,
})
export class MapPage implements AfterViewInit {
  map!: mapboxgl.Map;

  ngAfterViewInit(): void {
    
    mapboxgl.accessToken = 'pk.eyJ1IjoidG9taWthemUxIiwiYSI6ImNtYzAwdG81djFjdGsycXNiaHB6N3gxZHgifQ.BRrWeRX1vv7PdksH9RN42w';

    
    setTimeout(() => {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [121.0, 14.5],
        zoom: 15,
      });

      this.map.addControl(new mapboxgl.NavigationControl());

      this.map.on('load', () => {
        new mapboxgl.Marker().setLngLat([121.0, 14.5]).addTo(this.map);
      });
    }, 100); 
  }
}
