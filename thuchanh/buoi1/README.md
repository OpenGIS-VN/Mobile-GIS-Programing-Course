| Buổi 1: Cài đặt môi trường và tạo dự án Ionic

# Phần 1: Cài đặt môi trường

## 1.1. Cài đặt Node.js

-   Mục đích: Node.js là nền tảng cần thiết để chạy các công cụ như Ionic CLI.

-   Các bước:

    1.  Truy cập trang [nodejs.org](https://nodejs.org/) và tải phiên bản LTS (Long Term Support).

    2.  Chạy file cài đặt và làm theo hướng dẫn trên màn hình.

    3.  Sau khi cài đặt, mở Command Prompt (Windows) hoặc Terminal (Mac/Linux) để kiểm tra:

        

        ```bash
        node -v
        npm -v
        ```

-   Lưu ý: Nên dùng phiên bản LTS để đảm bảo tương thích tốt với Ionic.

## 1.2. Cài đặt NVM (Node Version Manager)

-   Mục đích: NVM giúp quản lý nhiều phiên bản Node.js trên cùng một máy.

-   Các bước (Windows):

    1.  Tải NVM từ [GitHub](https://github.com/coreybutler/nvm-windows/releases).

    2.  Cài đặt theo hướng dẫn.

    3.  Kiểm tra cài đặt bằng lệnh:

        

        ```bash
        nvm -v
        ```

-   Các bước (Mac/Linux):

    1.  Chạy lệnh sau trong Terminal:

        

        ```bash
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        ```

    2.  Khởi động lại Terminal và kiểm tra:

        

        ```bash
        nvm --version
        ```

-   Lưu ý: NVM rất hữu ích khi làm việc với nhiều dự án yêu cầu phiên bản Node.js khác nhau.

## 1.3. Cài đặt Ionic CLI

-   Mục đích: Ionic CLI là công cụ dòng lệnh để tạo và quản lý dự án Ionic.

-   Các bước:

    1.  Chạy lệnh sau trong Command Prompt hoặc Terminal:

        

        ```bash
        npm install -g @ionic/cli
        ```

    2.  Kiểm tra phiên bản đã cài:

        

        ```bash
        ionic --version
        ```

-   Lưu ý: Sử dụng -g để cài đặt toàn cục, cho phép chạy Ionic CLI từ bất kỳ thư mục nào.

## 1.4. Cài đặt Android Studio

-   Mục đích: Android Studio là môi trường để phát triển và chạy ứng dụng Android.

-   Các bước:

    1.  Tải Android Studio từ [trang chính thức](https://developer.android.com/studio).

    2.  Cài đặt theo hướng dẫn.

    3.  Cài thêm Android SDK và tạo một AVD (Android Virtual Device) để chạy giả lập.

    4.  (Tùy chọn) Thiết lập biến môi trường ANDROID_HOME nếu cần.

-   Lưu ý: Đảm bảo máy tính có đủ RAM và dung lượng để chạy giả lập Android mượt mà.

* * * * *

# Phần 2: Tạo dự án Ionic

## 2.1. Tạo dự án bằng Ionic CLI với NgModules

-   Mục đích: Tạo một dự án Ionic mới sử dụng Angular và NgModules.

-   Các bước:

    1.  Chạy lệnh sau để tạo dự án:

        

        ```bash
        ionic start myFirstApp blank --type=angular
        ```

    2.  Chọn các tùy chọn mặc định khi được hỏi.

    3.  Di chuyển vào thư mục dự án:

        

        ```bash
        cd myFirstApp
        ```

-   Lưu ý:  --type=angular chỉ định dự án sử dụng framework Angular.

## 2.2. Chạy demo phiên bản Web

-   Mục đích: Kiểm tra ứng dụng Ionic trên trình duyệt web.

-   Các bước:

    1.  Chạy lệnh:

        

        ```bash
        ionic serve
        ```

    2.  Trình duyệt sẽ tự động mở tại http://localhost:8100 để hiển thị ứng dụng.

-   Lưu ý: Mỗi khi chỉnh sửa mã nguồn, trang web sẽ tự động cập nhật.

## 2.3. Chạy demo phiên bản Android

-   Mục đích: Chạy ứng dụng trên giả lập Android.

-   Các bước:

    1.  Thêm nền tảng Android vào dự án:

        

        ```bash
        ionic capacitor add android
        ```

    2.  Build ứng dụng:

        

        ```bash
        ionic build
        ```

    3.  Mở dự án trong Android Studio:

        

        ```bash
        npx cap open android
        ```

    4.  Trong Android Studio, chọn AVD và nhấn nút "Run" để chạy ứng dụng.

-   Lưu ý: Đảm bảo giả lập đã được cấu hình sẵn trong Android Studio.

* * * * *

# Phần 3: Thực hành tạo chương trình tính BMI đơn giản

## 3.1. Giới thiệu về BMI

-   Mục đích: Hiểu khái niệm BMI (Body Mass Index).

-   Nội dung:

    -   BMI là chỉ số đo lường độ gầy béo của cơ thể.

    -   Công thức: BMI = cân nặng / (chiều cao * chiều cao) (cân nặng: kg, chiều cao: m).

-   Lưu ý: Ứng dụng sẽ nhận đầu vào là chiều cao và cân nặng, sau đó tính và hiển thị BMI.

## 3.2. Thiết kế giao diện

-   Mục đích: Tạo giao diện để nhập liệu và hiển thị kết quả.

-   Các bước:

    1.  Mở file `src/app/home/home.page.html`.

    2.  Thay nội dung bằng mã sau:

        

        ```html
        <ion-header>
          <ion-toolbar>
            <ion-title>Tính BMI</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-item>
            <ion-label>Chiều cao (m)</ion-label>
            <ion-input [(ngModel)]="height" type="number"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Cân nặng (kg)</ion-label>
            <ion-input [(ngModel)]="weight" type="number"></ion-input>
          </ion-item>
          <ion-button expand="block" (click)="calculateBMI()">Tính BMI</ion-button>
          <ion-item *ngIf="bmi">
            <ion-label>Kết quả BMI: {{ bmi }}</ion-label>
          </ion-item>
        </ion-content>
        ```

-   Lưu ý: Đảm bảo đã import `FormsModule` vào `app.module.ts` để sử dụng ngModel.

## 3.3. Viết logic tính BMI

-   Mục đích: Thêm logic tính toán BMI vào mã nguồn.

-   Các bước:

    1.  Mở file `src/app/home/home.page.ts`.

    2.  Thay nội dung bằng mã sau:

        

        ```typescript
        import { Component } from '@angular/core';

        @Component({
          selector: 'app-home',
          templateUrl: 'home.page.html',
          styleUrls: ['home.page.scss'],
        })
        export class HomePage {
          height: number;
          weight: number;
          bmi: number;

          calculateBMI() {
            if (this.height && this.weight) {
              this.bmi = this.weight / (this.height * this.height);
            } else {
              this.bmi = null;
            }
          }
        }
        ```

-   Lưu ý: Đảm bảo khai báo các biến height, weight, và bmi đúng kiểu dữ liệu.

## 3.4. Kiểm tra ứng dụng

-   Mục đích: Chạy và kiểm tra chương trình tính BMI.

-   Các bước:

    1.  Chạy lệnh ionic serve để xem trên web.

    2.  Nhập chiều cao (ví dụ: 1.7 m), cân nặng (ví dụ: 70 kg), nhấn nút "Tính BMI".

    3.  Kiểm tra kết quả (ví dụ: BMI ≈ 24.22).

-   Lưu ý: Nếu có lỗi, kiểm tra console trình duyệt để tìm nguyên nhân.

* * * * *

# Tổng kết

-   Kiến thức đạt được:

    -   Cài đặt môi trường phát triển Ionic (Node.js, NVM, Ionic CLI, Android Studio).

    -   Tạo và chạy dự án Ionic trên web và Android.

    -   Xây dựng một ứng dụng tính BMI đơn giản.

-   Gợi ý thực hành thêm:

    -   Thêm phân loại BMI (gầy, bình thường, thừa cân) dựa trên kết quả tính được.

    -   Tùy chỉnh giao diện bằng các thành phần Ionic như ion-card hoặc ion-grid.

