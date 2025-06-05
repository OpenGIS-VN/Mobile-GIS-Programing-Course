# Buổi 6: Gọi API GIS

* Sử dụng HTTP Client gọi API (ví dụ: OpenStreetMap).
* Hiển thị dữ liệu lên bản đồ.
* Demo: Tìm kiếm địa điểm bằng OSM, hiển thị danh sách địa điểm trên bản đồ.

## Tìm kiếm địa điểm

### 1. Thanh tìm kiếm
- Thanh tìm kiếm được đặt phía trên bản đồ.
- Cho phép người dùng nhập từ khóa để tìm kiếm địa điểm.

**Ví dụ:**
```html
<ion-toolbar>
  <ion-searchbar placeholder="Tìm kiếm địa điểm" (ionInput)="onSearch($event)" debounce="500"></ion-searchbar>
</ion-toolbar>
```

### 2. API OpenStreetMap (Nominatim)
- Sử dụng API để tìm kiếm địa điểm dựa trên từ khóa.
- URL API: `https://nominatim.openstreetmap.org/search?format=json&q={query}`.

**Ví dụ:**
```typescript
onSearch(event: any) {
  const query = event.target.value;
  if (!query || query.trim() === '') {
    this.searchResults = [];
    return;
  }

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
  this.http.get(url).subscribe((results: any) => {
    this.searchResults = results; // Cập nhật danh sách kết quả
  });
}
```

### 3. Hiển thị danh sách kết quả
- Kết quả tìm kiếm được hiển thị dưới dạng danh sách bên dưới thanh tìm kiếm.
- Mỗi kết quả bao gồm tên địa điểm (`display_name`).

**Ví dụ:**
```html
<ion-list *ngIf="searchResults.length > 0">
  <ion-item *ngFor="let result of searchResults" (click)="selectSearchResult(result)">
    {{ result.display_name }}
  </ion-item>
</ion-list>
```

### 4. Debounce
- Giảm số lượng yêu cầu API bằng cách thêm thuộc tính `debounce="500"` vào thanh tìm kiếm.
- Chỉ gửi yêu cầu sau khi người dùng ngừng nhập trong 500ms.

**Ví dụ:**
```html
<ion-searchbar placeholder="Tìm kiếm địa điểm" (ionInput)="onSearch($event)" debounce="500"></ion-searchbar>
```

### 5. Hiển thị vị trí trên bản đồ
- Khi người dùng chọn một kết quả, bản đồ sẽ di chuyển đến vị trí đó.
- Marker được thêm vào vị trí đã chọn và hiển thị thông tin địa điểm.

**Ví dụ:**
```typescript
selectSearchResult(result: any) {
  const lat = parseFloat(result.lat);
  const lon = parseFloat(result.lon);

  // Thêm marker tại vị trí đã chọn
  const marker = L.marker([lat, lon])
    .addTo(this.map!)
    .bindPopup(`<strong>${result.display_name}</strong>`)
    .openPopup();

  // Di chuyển bản đồ đến vị trí đã chọn
  if (this.map) {
    this.map.setView([lat, lon], 13);
  }

  // Xóa danh sách kết quả
  this.searchResults = [];
}
```

## Hướng dẫn sử dụng
1. Nhập từ khóa vào thanh tìm kiếm (ví dụ: "Hồ Chí Minh").
2. Chờ danh sách kết quả hiển thị bên dưới thanh tìm kiếm.
3. Nhấn vào một kết quả để xem vị trí trên bản đồ.
4. Bản đồ sẽ di chuyển đến vị trí đã chọn và hiển thị marker.

