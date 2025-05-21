import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  private map: L.Map | undefined;

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
    this.map = L.map('map').setView([51.505, -0.09], 13); // Set vị trí và zoom mặc định

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
}
