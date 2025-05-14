import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  latitude?: number;
  longitude?: number;
  error?: string;

  constructor() {}

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
      this.error = undefined;
    } catch (err: any) {
      this.error = err.message || 'Không lấy được vị trí';
      this.latitude = undefined;
      this.longitude = undefined;
    }
  }

}
