# Buổi 2

Làm việc với Android Studio, máy Android ảo

Build App APK debug

Xây dựng app lấy tọa độ (tương tác với sensor GPS của điện thoại)

## Làm việc với Android Studio, máy Android ảo

## Build ứng dụng trên môi trường Android

```bash
# Build mã nguồn
ionic build

# Thêm platform android (tương tự cho các flatform khác) - chỉ chạy 1 lần đầu tiên
ionic cap add android

# Đồng bộ các thư viện
ionic cap copy
ionic cap sync

# Chạy ứng dụng trên máy android (Có thể là máy ảo hoặc điện thoại thật được kết nối qua cáp USB)
ionic cap run android -l --external
```

## Build file APK

```bash
ionic cap copy
ionic cap sync

cd android
gradlew assembleDebug
```

File apk sẽ nằm ở

| approot_folder\android\app\build\outputs\apk\debug

## Xây dựng ứng dụng lấy tọa độ (tương tác với sensor GPS của điện thoại)

Tham khảo

https://ionicframework.com/docs/native/geolocation

### Cài thực hiện

```bash
npm install @capacitor/geolocation
npx cap sync
```

### Bổ sung quyền

| geo1/android/app/src/main/AndroidManifest.xml

<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />

### Mã nguồn

| Logic

```ts
import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
```

| Giao diện

```html
<!-- ...existing code... -->

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab 1</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-button expand="block" (click)="getCurrentPosition()">
    Lấy tọa độ hiện tại
  </ion-button>

  <div *ngIf="latitude && longitude">
    <p>Latitude: {{ latitude }}</p>
    <p>Longitude: {{ longitude }}</p>
  </div>
  <div *ngIf="error">
    <p style="color:red">{{ error }}</p>
  </div>

  <app-explore-container name="Tab 1 page"></app-explore-container>
</ion-content>
```