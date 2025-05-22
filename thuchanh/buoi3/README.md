# Buổi học 3: Sử dụng Leaflet để tạo ứng dụng bản đồ đơn giản trong Ionic

Mục tiêu

-   Hiểu cách tích hợp thư viện Leaflet vào dự án Ionic.

-   Tạo một ứng dụng bản đồ hiển thị bản đồ cơ bản với marker.

-   Tích hợp plugin Geolocation của Capacitor để lấy tọa độ GPS và hiển thị vị trí người dùng trên bản đồ.

-   Thực hành chạy ứng dụng trên trình duyệt và thiết bị Android.

* * * * *

# Phần 1: Thiết lập dự án và cài đặt Leaflet

## 1.1. Tạo dự án Ionic mới

-   Mục đích: Tạo một dự án Ionic mới để tích hợp Leaflet.

-   Các bước:

    1.  Mở Terminal hoặc Command Prompt.

    2.  Chạy lệnh sau để tạo dự án:

        ```bash
        ionic start mapApp blank --type=angular
        ```

        -   mapApp: Tên dự án.

        -   blank: Template cơ bản.

        -   --type=angular: Sử dụng framework Angular.

    3.  Di chuyển vào thư mục dự án:


        ```bash
        cd mapApp
        ```

-   Lưu ý: Đảm bảo đã cài đặt Node.js và Ionic CLI từ trước.

## 1.2. Cài đặt thư viện Leaflet

-   Mục đích: Thêm Leaflet vào dự án để hiển thị bản đồ.

-   Các bước:

    1.  Cài đặt gói Leaflet qua npm:

        ```bash
        npm install leaflet

        npm install --save-dev @types/leaflet

        ```

    2.  Cài đặt style (CSS) của Leaflet:

        -   Mở file src/index.html.

        -   Thêm dòng sau vào trong thẻ <head>:


            ```html
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
            ```

-   Giải thích:

    -   Leaflet là một thư viện JavaScript mã nguồn mở để tạo bản đồ tương tác.

    -   File CSS của Leaflet định dạng giao diện bản đồ (như các nút zoom, lưới bản đồ).

## 1.3. Cài đặt plugin Geolocation của Capacitor

-   Mục đích: Sử dụng plugin Geolocation để lấy tọa độ GPS của người dùng.

-   Các bước: (Xem chi tiết ở buổi 2)

    1.  Cài đặt plugin:

        ```bash
        npm install @capacitor/geolocation
        npx cap sync
        ```

    2.  Thêm quyền GPS cho Android:

        -   Mở file android/app/src/main/AndroidManifest.xml.

        -   Thêm các dòng sau vào trong thẻ `<manifest>`:

            ```xml
            <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
            <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
            <uses-feature android:name="android.hardware.location.gps" />
            ```

-   Giải thích:

    -   Plugin Geolocation cho phép truy cập vị trí của thiết bị.

    -   Các quyền trong AndroidManifest.xml là bắt buộc để GPS hoạt động trên Android.

## 1.4. Kiểm tra dự án

-   Mục đích: Đảm bảo dự án chạy đúng trước khi tích hợp bản đồ.

-   Các bước:

    1.  Chạy ứng dụng trên trình duyệt:

        ```bash
        ionic serve
        ```

    2.  Kiểm tra giao diện cơ bản tại http://localhost:8100.

-   Lưu ý: Nếu gặp lỗi, kiểm tra console trình duyệt để tìm nguyên nhân.

* * * * *

# Phần 2: Tạo giao diện bản đồ cơ bản với Leaflet

## 2.1. Thiết kế giao diện bản đồ

-   Mục đích: Tạo một trang hiển thị bản đồ với Leaflet.

-   Các bước:

    1.  Mở file `src/app/home/home.page.html`.

    2.  Thay nội dung bằng mã sau:

        ```html
        <ion-header>
          <ion-toolbar>
            <ion-title>Ứng dụng bản đồ</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div id="map" style="height: 100%; width: 100%;"></div>
        </ion-content>
        ```

-   Giải thích:

    -   `<div id="map">` là container để chứa bản đồ Leaflet.

    -   height: 100%; width: 100%; đảm bảo bản đồ chiếm toàn bộ không gian của ion-content.

## 2.2. Khởi tạo bản đồ với Leaflet

-   Mục đích: Viết mã để hiển thị bản đồ với một marker cố định.

-   Các bước:

    1.  Mở file `src/app/home/home.page.ts`.

    2.  Thay nội dung bằng mã sau:

        ```typescript
        import { Component, OnInit } from '@angular/core';
        import * as L from 'leaflet';

        @Component({
          selector: 'app-home',
          templateUrl: 'home.page.html',
          styleUrls: ['home.page.scss'],
        })
        export class HomePage implements OnInit {
          map: L.Map;

          ngOnInit() {
            // Khởi tạo bản đồ
            this.map = L.map('map').setView([21.0285, 105.8542], 13); // Tọa độ Hà Nội, mức zoom 13

            // Thêm lớp bản đồ từ OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.map);

            // Thêm marker tại vị trí cố định
            L.marker([21.0285, 105.8542])
              .addTo(this.map)
              .bindPopup('Hà Nội')
              .openPopup();
          }
        }
        ```

-   Giải thích:

    -   `L.map('map')`: Tạo bản đồ trong container có id là map.

    -   `setView([21.0285, 105.8542], 13)`: Đặt trung tâm bản đồ tại tọa độ Hà Nội, mức zoom 13.

    -   `L.tileLayer`: Tải dữ liệu bản đồ từ OpenStreetMap.

    -   `L.marker`: Thêm một điểm đánh dấu tại tọa độ Hà Nội với popup hiển thị "Hà Nội".

2.3. Kiểm tra bản đồ

-   Mục đích: Xem bản đồ hiển thị trên trình duyệt.

-   Các bước:

    1.  Chạy lại ứng dụng:

        ```bash
        ionic serve
        ```

    2.  Kiểm tra xem bản đồ có hiển thị đúng không, với marker tại Hà Nội.

-   Lưu ý: Nếu bản đồ không hiển thị, kiểm tra:

    -   File CSS Leaflet đã được thêm vào index.html.

    -   Console trình duyệt có báo lỗi không.

* * * * *

# Phần 3: Tích hợp Geolocation để lấy vị trí người dùng

## 3.1. Cập nhật giao diện

-   Mục đích: Thêm nút để lấy vị trí người dùng và hiển thị tọa độ.

-   Các bước:

    1.  Mở file `src/app/home/home.page.html`.

    2.  Cập nhật nội dung:

        

        ```html
        <ion-header>
          <ion-toolbar>
            <ion-title>Ứng dụng bản đồ</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-button expand="block" (click)="getCurrentPosition()">Lấy vị trí hiện tại</ion-button>
          <div *ngIf="latitude && longitude">
            <p>Latitude: {{ latitude }}</p>
            <p>Longitude: {{ longitude }}</p>
          </div>
          <div *ngIf="error">
            <p style="color: red;">{{ error }}</p>
          </div>
          <div id="map" style="height: 70%; width: 100%;"></div>
        </ion-content>
        ```

-   Giải thích:

    -   Thêm nút "Lấy vị trí hiện tại" để gọi hàm lấy tọa độ GPS.

    -   Hiển thị tọa độ (latitude, longitude) hoặc lỗi nếu có.

    -   Giảm chiều cao bản đồ (height: 70%) để có chỗ cho nút và thông tin tọa độ.

## 3.2. Cập nhật logic để lấy vị trí GPS

-   Mục đích: Sử dụng plugin Geolocation để lấy vị trí và cập nhật bản đồ.

-   Các bước:

    1.  Mở file `src/app/home/home.page.ts`.

    2.  Cập nhật mã nguồn:

        

        ```typescript
        import { Component, OnInit } from '@angular/core';
        import * as L from 'leaflet';
        import { Geolocation } from '@capacitor/geolocation';

        @Component({
          selector: 'app-home',
          templateUrl: 'home.page.html',
          styleUrls: ['home.page.scss'],
        })
        export class HomePage implements OnInit {
          map: L.Map;
          latitude?: number;
          longitude?: number;
          error?: string;
          userMarker?: L.Marker;

          ngOnInit() {
            // Khởi tạo bản đồ
            this.map = L.map('map').setView([21.0285, 105.8542], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.map);

            // Marker mặc định tại Hà Nội
            L.marker([21.0285, 105.8542])
              .addTo(this.map)
              .bindPopup('Hà Nội')
              .openPopup();
          }

          async getCurrentPosition() {
            try {
              const coordinates = await Geolocation.getCurrentPosition();
              this.latitude = coordinates.coords.latitude;
              this.longitude = coordinates.coords.longitude;
              this.error = undefined;

              // Cập nhật bản đồ: di chuyển đến vị trí người dùng
              this.map.setView([this.latitude, this.longitude], 13);

              // Xóa marker cũ nếu có
              if (this.userMarker) {
                this.map.removeLayer(this.userMarker);
              }

              // Thêm marker tại vị trí người dùng
              this.userMarker = L.marker([this.latitude, this.longitude])
                .addTo(this.map)
                .bindPopup('Vị trí của bạn')
                .openPopup();
            } catch (err: any) {
              this.error = err.message || 'Không thể lấy được vị trí';
              this.latitude = undefined;
              this.longitude = undefined;
            }
          }
        }
        ```

-   Giải thích:

    -   Geolocation.getCurrentPosition(): Lấy tọa độ hiện tại của người dùng.

    -   map.setView: Di chuyển trung tâm bản đồ đến vị trí người dùng.

    -   userMarker: Lưu marker của người dùng để xóa khi cập nhật vị trí mới.

    -   Xử lý lỗi (như GPS bị tắt hoặc không có quyền) bằng cách hiển thị thông báo.

3.3. Kiểm tra trên trình duyệt

-   Mục đích: Xác minh ứng dụng hoạt động đúng.

-   Các bước:

    1.  Chạy lại ứng dụng:

        

        ```bash
        ionic serve
        ```

    2.  Nhấn nút "Lấy vị trí hiện tại" và kiểm tra:

        -   Trình duyệt sẽ yêu cầu cấp quyền truy cập vị trí.

        -   Nếu cấp quyền, bản đồ sẽ di chuyển đến vị trí của bạn với marker mới.

-   Lưu ý: Trên trình duyệt, vị trí có thể dựa trên IP hoặc GPS của máy tính.

## 3.4. Kiểm tra trên Android

-   Mục đích: Đảm bảo ứng dụng hoạt động tốt trên thiết bị thật hoặc giả lập.

-   Các bước:

    1.  Build mã nguồn:

        

        ```bash
        ionic build
        ```

    2.  Đồng bộ với Android:

        

        ```bash
        ionic cap copy
        ionic cap sync
        ```

    3.  Chạy ứng dụng:

        

        ```bash
        ionic cap run android -l --external
        ```

    4.  Kiểm tra trên máy ảo hoặc điện thoại thật:

        -   Đảm bảo GPS trên thiết bị được bật.

        -   Nhấn nút "Lấy vị trí hiện tại" để xem bản đồ cập nhật.

-   Lưu ý:

    -   Máy ảo có thể không hỗ trợ GPS tốt, nên ưu tiên dùng điện thoại thật.

    -   Đảm bảo cấp quyền vị trí khi ứng dụng hỏi.

## 4. Bài tập thực hành thêm

-   Thêm nút để quay lại vị trí mặc định (Hà Nội).

-   Hiển thị thông tin chi tiết hơn trong popup của marker (ví dụ: độ chính xác của GPS).

-   Thêm các nút zoom in/zoom out tùy chỉnh.

* * * * *

Lưu ý quan trọng

-   Môi trường phát triển: Đảm bảo đã cài đặt Node.js, Ionic CLI, Android Studio, và các plugin cần thiết từ buổi học trước.

-   Xử lý lỗi:

    -   Nếu bản đồ không hiển thị, kiểm tra CSS Leaflet và kết nối mạng.

    -   Nếu Geolocation không hoạt động, kiểm tra quyền trong AndroidManifest.xml và trạng thái GPS.

-   Tài liệu tham khảo:

    -   [Leaflet Documentation](https://leafletjs.com/)

    -   [Capacitor Geolocation](https://capacitorjs.com/docs/apis/geolocation)

* * * * *

