# Buổi 2: Làm việc với Android Studio, Build APK, và Xây dựng ứng dụng lấy tọa độ GPS

Trong buổi học này, chúng ta sẽ thực hiện các nội dung sau:

-   Làm việc với Android Studio và máy ảo Android: Cài đặt và sử dụng môi trường phát triển Android.

-   Build file APK debug: Tạo file cài đặt ứng dụng để kiểm thử trên thiết bị Android.

-   Xây dựng ứng dụng lấy tọa độ GPS: Tương tác với cảm biến GPS của điện thoại để lấy thông tin vị trí.

* * * * *

# 1\. Làm việc với Android Studio và máy ảo Android

## 1.1. Android Studio là gì?

-   **Android Studio** là công cụ chính thức để phát triển ứng dụng Android. Nó giúp bạn viết mã, kiểm tra lỗi (debug), và chạy ứng dụng trên máy ảo hoặc thiết bị thật.

-   **Máy ảo Android (AVD - Android Virtual Device)**: Là một thiết bị Android ảo chạy trên máy tính, giúp bạn thử nghiệm ứng dụng mà không cần điện thoại thật.

## 1.2. Cách thiết lập máy ảo Android

![image](https://github.com/user-attachments/assets/e0035a00-58aa-4bc2-90ac-d7c52ca0777e)


1.  Mở **Android Studio**.

2.  Vào menu **Tools > AVD Manager** (Quản lý thiết bị ảo).

3.  Nhấn **Create Virtual Device** (Tạo thiết bị ảo):

    -   Chọn loại thiết bị (ví dụ: Pixel 3 hoặc Pixel 4).

    -   Chọn phiên bản Android (ví dụ: Android 11 hoặc Android 12) rồi nhấn Next và Finish.

4.  Trong **AVD Manager**, nhấn nút **Play** (hình tam giác xanh) để khởi động máy ảo.

Lưu ý:

-   Máy ảo cần máy tính có RAM từ 8GB trở lên và CPU mạnh để chạy mượt mà.

-   Nếu máy tính yếu, bạn có thể kết nối điện thoại thật qua cáp USB để thay thế.

## Firebase Studio

https://idx.google.com/

Dành cho bạn nào máy tính yếu quá thì có thể thử dùng Firebase Studio của Google (Hiện tại đang miễn phí)
* Đăng ký workspace là Android Studio Cloud
* Truy cập và làm việc trực tiếp từ trình duyệt mà không cần cài đặt phần mềm cục bộ
* Đây là một máy ảo Linux được chạy từ xa trên đám mây
* Hỗ trợ lưu dữ liệu (data không bị mất khi tắt máy)
* Các phần mềm cài thêm sẽ bị xóa khi tắt máy
* Cấu hình cao

![image](https://github.com/user-attachments/assets/2b7e64c9-1805-4721-8946-edccfca0136f)
![image](https://github.com/user-attachments/assets/0c9a9d5a-3866-4a15-b3b3-ef8e22185496)



* * * * *

# 2\. Build ứng dụng Ionic trên môi trường Android

Chúng ta sẽ sử dụng Ionic CLI và Capacitor để xây dựng ứng dụng Ionic chạy trên Android. Dưới đây là các lệnh và giải thích chi tiết:

## 2.1. Build mã nguồn ứng dụng

-   Lệnh:    

    ```bash
    ionic build
    ```

-   Ý nghĩa:

    -   Biên dịch mã nguồn Ionic (HTML, CSS, TypeScript) thành các file tĩnh (HTML, CSS, JavaScript).

    -   File được tạo ra nằm trong thư mục www, sẵn sàng để triển khai lên Android hoặc iOS.

-   Khi nào dùng: Mỗi khi bạn thay đổi mã nguồn và muốn cập nhật ứng dụng.

## 2.2. Thêm nền tảng Android

-   Lệnh:    

    ```bash
    ionic cap add android
    ```

-   Ý nghĩa:

    -   Thêm nền tảng Android vào dự án Ionic.

    -   Tạo thư mục android chứa mã nguồn native (Java/Kotlin) cần thiết để ứng dụng chạy trên Android.

-   Lưu ý:

    -   Chỉ chạy lệnh này một lần duy nhất khi bắt đầu dự án.

    -   Nếu đã chạy rồi, không cần chạy lại.

## 2.3. Đồng bộ các thư viện

-   Lệnh:    

    ```bash
    ionic cap copy
    ionic cap sync
    ```

-   Ý nghĩa:

    -   ionic cap copy: Sao chép các file tĩnh từ thư mục www sang thư mục android.

    -   ionic cap sync: Cập nhật các plugin Capacitor và đồng bộ mã nguồn native với thay đổi mới nhất.

-   Khi nào dùng:

    -   Sau khi thay đổi mã nguồn (ionic build).

    -   Sau khi cài đặt plugin mới (như Geolocation).

## 2.4. Chạy ứng dụng trên máy Android

-   Lệnh:    

    ```bash
    ionic cap run android -l --external
    ```

-   Ý nghĩa:

    -   Mở Android Studio, build ứng dụng, và chạy trên máy ảo hoặc thiết bị thật (kết nối qua USB).

    -   `-l` (Live Reload): Tự động cập nhật ứng dụng khi bạn chỉnh sửa mã nguồn.

    -   `--external`: Cho phép truy cập ứng dụng từ thiết bị bên ngoài (ví dụ: điện thoại qua Wi-Fi).

-   Điều kiện:

    -   Máy ảo đã được khởi động trong AVD Manager.

    -   Hoặc điện thoại thật đã bật USB Debugging và kết nối qua cáp USB.

-   Lưu ý: Nếu dùng Live Reload, đảm bảo máy tính và thiết bị cùng mạng Wi-Fi.

## 2.5 Debug

```txt
edge://inspect/#devices

chrome://inspect/#devices
```

* * * * *

# 3\. Build file APK debug

File APK (Android Package) là định dạng cài đặt ứng dụng trên Android. Chúng ta sẽ tạo một file APK debug để kiểm thử.

## 3.1. Chuẩn bị trước khi build

-   Lệnh:    

    ```bash
    ionic cap copy
    ionic cap sync
    ```

-   Ý nghĩa: Đảm bảo mã nguồn và plugin đã được đồng bộ sang thư mục android.

## 3.2. Tạo file APK debug

-   Các bước:

    1.  Di chuyển vào thư mục `android`:        

        ```bash
        cd android
        ```

    2.  Chạy lệnh build:        

        ```bash
        # Trên Windows
        gradlew assembleDebug

        # Trên Linux/Mac
        ./gradlew assembleDebug
        ```

-   Ý nghĩa:

    -   `gradlew` là công cụ Gradle để build ứng dụng Android.

    -   `assembleDebug` tạo file APK ở chế độ debug (dùng để kiểm thử).

-   Kết quả:

    -   File APK nằm ở:

        ```
        android/app/build/outputs/apk/debug/app-debug.apk
        ```

-   Cách dùng:

    -   Copy file app-debug.apk sang điện thoại và cài đặt thủ công.

    -   Lưu ý: File debug không dùng để đăng lên Google Play Store.

* * * * *

# 4\. Xây dựng ứng dụng lấy tọa độ GPS

Chúng ta sẽ tạo một ứng dụng Ionic đơn giản để lấy tọa độ (latitude, longitude) từ cảm biến GPS của điện thoại, sử dụng plugin Geolocation của Capacitor.

## 4.1. Tham khảo tài liệu

-   Link:  [Capacitor Geolocation](https://ionicframework.com/docs/native/geolocation)

-   Mô tả: Plugin này cung cấp API để truy cập vị trí hiện tại của thiết bị (dựa trên GPS hoặc mạng).

## 4.2. Cài đặt plugin Geolocation

-   Lệnh:    

    ```bash
    npm install @capacitor/geolocation
    npx cap sync
    ```

-   Ý nghĩa:

    -   `npm install @capacitor/geolocation`: Cài đặt plugin Geolocation vào dự án.

    -   `npx cap sync`: Đồng bộ plugin với nền tảng Android (và iOS nếu có).

## 4.3. Bổ sung quyền truy cập GPS cho Android

-   Mục đích: Ứng dụng cần quyền để truy cập vị trí của thiết bị.

-   Các bước:

    1.  Mở file:

        ```
        android/app/src/main/AndroidManifest.xml
        ```

    2.  Thêm các dòng sau vào trong thẻ <manifest>:        

        ```xml
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-feature android:name="android.hardware.location.gps" />
        ```

-   Giải thích:

    -   `ACCESS_COARSE_LOCATION`: Lấy vị trí gần đúng (dựa trên mạng).

    -   `ACCESS_FINE_LOCATION`: Lấy vị trí chính xác (dựa trên GPS).

    -   `android.hardware.location.gps`: Yêu cầu thiết bị có phần cứng GPS.

4.4. Mã nguồn ứng dụng

![image](https://github.com/user-attachments/assets/68fdba43-e493-4167-8049-3f4d6867a2f3)


4.4.1. Logic (TypeScript)

-   File:  src/app/home/home.page.ts

-   Mã nguồn:    

    ```typescript
    import { Component } from '@angular/core';
    import { Geolocation } from '@capacitor/geolocation';
    
    @Component({
      selector: 'app-home',
      templateUrl: 'home.page.html',
      styleUrls: ['home.page.scss'],
      standalone: false,
    })
    export class HomePage {

      latitude?: number;  // Tọa độ vĩ độ
      longitude?: number; // Tọa độ kinh độ
      error?: string;     // Thông báo lỗi (nếu có)

      constructor() {}

      async getCurrentPosition() {
        try {
          // Gọi API lấy vị trí từ GPS
          const coordinates = await Geolocation.getCurrentPosition();
          this.latitude = coordinates.coords.latitude;   // Lưu vĩ độ
          this.longitude = coordinates.coords.longitude; // Lưu kinh độ
          this.error = undefined;                        // Xóa lỗi cũ
        } catch (err: any) {
          // Xử lý lỗi nếu không lấy được vị trí
          this.error = err.message || 'Không thể lấy được vị trí';
          this.latitude = undefined;
          this.longitude = undefined;
        }
      }
    }
    ```

-   Giải thích:

    -   Hàm `getCurrentPosition()` gọi **plugin Geolocation** để lấy tọa độ.

    -   Nếu thành công, lưu giá trị vào latitude và longitude.

    -   Nếu thất bại (ví dụ: GPS tắt hoặc không có quyền), hiển thị lỗi.

4.4.2. Giao diện (HTML)

-   File:  src/app/home/home.page.html

-   Mã nguồn:    

    ```html
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>
          Blank
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Nút để lấy tọa độ -->
      <ion-button expand="block" (click)="getCurrentPosition()">
        Lấy tọa độ hiện tại
      </ion-button>

      <!-- Hiển thị tọa độ nếu có -->
      <div *ngIf="latitude && longitude">
        <p>Latitude: {{ latitude }}</p>
        <p>Longitude: {{ longitude }}</p>
      </div>

      <!-- Hiển thị lỗi nếu có -->
      <div *ngIf="error">
        <p style="color:red">{{ error }}</p>
      </div>
    </ion-content>
    ```

-   Giải thích:

    -   Nút "Lấy tọa độ hiện tại" gọi hàm `getCurrentPosition()`.

    -   Nếu có tọa độ, hiển thị latitude và longitude.

    -   Nếu có lỗi, hiển thị thông báo màu đỏ.

* * * * *

Lưu ý quan trọng

-   Quyền GPS: Khi chạy ứng dụng lần đầu, thiết bị sẽ hỏi cấp quyền truy cập vị trí. Hãy đồng ý để GPS hoạt động.

-   Kiểm thử:

    -   Máy ảo không hỗ trợ GPS tốt, nên dùng điện thoại thật để kiểm tra chính xác.

    -   Kết nối điện thoại qua USB và bật USB Debugging trong Developer Options.

-   Xử lý lỗi: Luôn kiểm tra lỗi (GPS tắt, không có quyền, v.v.) để ứng dụng không bị crash.

## Nâng cấp

* Thêm tính năng mở tọa độ trong Google Map

---

## Note khác:

| Lôi Unable to determine Android SDK directory

Tạo file `android/local.properties`


```txt
sdk.dir=/Users/dtlong/Library/Android/sdk
```