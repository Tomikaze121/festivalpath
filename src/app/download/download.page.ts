import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  standalone:false,
})
export class DownloadPage {
  async saveMap() {
    const geojson = { /* sample map data */ };
    await Filesystem.writeFile({
      path: 'festival-map.geojson',
      data: JSON.stringify(geojson),
      directory: Directory.Data,
      encoding: Encoding.UTF8,
    });
  }
}
