# Buổi 5: Tích hợp map

## Các bước thực hiện

### 1. Cài đặt các thư viện cần thiết
- Cài đặt `leaflet` để hiển thị bản đồ:
  ```bash
  npm install leaflet
  ```
- Cài đặt `@angular/common/http` để hỗ trợ tải file GeoJSON:
  ```bash
  npm install @angular/common
  ```

### 2. Cấu hình ứng dụng
- Thêm `HttpClientModule` vào `AppModule`:
  ```typescript
  import { HttpClientModule } from '@angular/common/http';

  @NgModule({
    imports: [
      // ...existing code...
      HttpClientModule
    ],
    // ...existing code...
  })
  export class AppModule { }
  ```

### 3. Hiển thị bản đồ
- Sử dụng `leaflet` để khởi tạo bản đồ trong file `tab2.page.ts`:
  - Tạo bản đồ với `L.map` và thêm lớp nền từ OpenStreetMap.
  - Thêm marker cố định tại một vị trí cụ thể.

### 4. Tải và hiển thị file GeoJSON
- Tạo phương thức `loadGeoJSON` để tải file GeoJSON từ thư mục `assets/map` và hiển thị trên bản đồ:
  ```typescript
  private loadGeoJSON(): void {
    const geojsonPath = 'assets/map/nonglam.geojson';
    this.http.get(geojsonPath).subscribe((geojsonData: any) => {
      const geojsonLayer = L.geoJSON(geojsonData);
      geojsonLayer.addTo(this.map!);

      // Zoom to fit the GeoJSON layer
      this.map!.fitBounds(geojsonLayer.getBounds());
    });
  }
  ```

### 5. Tích hợp lấy vị trí người dùng
- Sử dụng `@capacitor/geolocation` để lấy vị trí hiện tại của người dùng và hiển thị trên bản đồ.

### 6. Thư mục chứa file GeoJSON
- Đảm bảo file `nonglam.geojson` được đặt trong thư mục `src/assets/map`.

### 7. Chạy ứng dụng
- Khởi chạy ứng dụng để kiểm tra:
  ```bash
  ionic serve
  ```

