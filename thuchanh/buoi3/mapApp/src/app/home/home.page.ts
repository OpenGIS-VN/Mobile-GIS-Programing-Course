import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  private map: L.Map | undefined;
  latitude?: number;
  longitude?: number;
  error?: string;
  userMarker?: L.Marker;

  constructor() {}

  ngOnInit() {
    this.initMap();
  }

  ionViewDidEnter() {
    if (this.map) {
      this.map.invalidateSize(); // Đảm bảo bản đồ hiển thị đầy đủ
    }
  }

  private initMap(): void {
    this.map = L.map('map').setView([21.0285, 105.8542], 13); // Set vị trí và zoom mặc định

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  

    // Thêm marker tại vị trí cố định
    L.marker([21.0285, 105.8542])
      .addTo(this.map!)
      .bindPopup('Hà Nội');
      // .openPopup();
  }

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
      this.error = undefined;

      // Cập nhật bản đồ: di chuyển đến vị trí người dùng
      if (this.map) {
        this.map.setView([this.latitude, this.longitude], 13);
      }

      // Xóa marker cũ nếu có
      if (this.userMarker) {
        if (this.map && this.userMarker) {
          this.map.removeLayer(this.userMarker);
        }
      }

      // Thêm marker tại vị trí người dùng
      this.userMarker = L.marker([this.latitude, this.longitude])
        .addTo(this.map!)
        .bindPopup('Vị trí của bạn')
        .openPopup();
    } catch (err: any) {
      this.error = err.message || 'Không thể lấy được vị trí';
      this.latitude = undefined;
      this.longitude = undefined;
    }
  }
}