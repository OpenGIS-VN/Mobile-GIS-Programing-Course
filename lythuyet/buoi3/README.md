# Buổi 3: Giới thiệu Ionic, setup môi trường làm việc

-   Kiến trúc Ijonic
-   Các thành phần của Ionic
-   Setup môi trường (Nodejs, Ionic CLI,..)
-   Tạo ứng dụng Ionic đầu tiên

# Note một số lệnh, các thành phần của 1 dự án Ionic

## Tạo project Ionic

-   Lệnh tạo project:

    -   Chúng ta sẽ tạo một ứng dụng đơn giản với template "blank":

        bash

        ```bash
        ionic start myFirstApp blank --type=angular
        ```

    -   Giải thích:

        -   myFirstApp: Tên dự án (bạn có thể đổi thành tên khác).

        -   blank: Template cơ bản, không có sẵn nhiều nội dung.

        -   --type=angular: Sử dụng framework Angular (bạn cũng có thể chọn react hoặc vue).

-   Di chuyển vào thư mục project:

    bash

    ```bash
    cd myFirstApp
    ```

-   Kết quả:

    -   Bạn sẽ có một thư mục myFirstApp chứa toàn bộ mã nguồn của dự án Ionic, sẵn sàng để phát triển.

* * * * *

## Chạy ứng dụng trên trình duyệt

-   Lệnh chạy:

    bash

    ```bash
    ionic serve
    ```

-   Giải thích:

    -   Lệnh này khởi động một máy chủ web cục bộ (localhost).

    -   Trình duyệt mặc định sẽ tự động mở (thường là http://localhost:8100) và hiển thị ứng dụng.

    -   Mỗi khi bạn thay đổi mã nguồn, trang web sẽ tự động reload.

## Debug ứng dụng

-   Sử dụng DevTools trên trình duyệt:

    1.  Mở DevTools:

        -   Nhấn F12 hoặc Ctrl+Shift+I (Windows/Linux) / Cmd+Option+I (Mac).

    2.  Các tab hữu ích:

        -   Console: Xem thông báo lỗi hoặc log (ví dụ: console.log).

        -   Elements: Kiểm tra cấu trúc HTML và CSS.

        -   Network: Theo dõi các yêu cầu API (nếu có).

-   Ví dụ debug:

    1.  Mở file src/app/home/home.page.ts.

    2.  Thêm dòng sau vào hàm constructor():

        typescript

        ```
        console.log("Hello from Ionic");
        ```

    3.  Chạy ionic serve và mở DevTools để xem thông báo "Hello from Ionic" trong tab Console.

* * * * *

## Giới thiệu các thành phần trong thư mục project Ionic (45 phút)

### Cấu trúc thư mục project

Khi bạn tạo một project Ionic, bạn sẽ thấy các thư mục và file sau:

-   src/: Chứa toàn bộ mã nguồn ứng dụng.

    -   app/: Chứa các modules, pages, components.

    -   assets/: Lưu trữ hình ảnh, icon.

    -   theme/: Chứa file CSS tùy chỉnh (như variables.scss).

    -   index.html: File HTML chính của ứng dụng.

    -   main.ts: Điểm bắt đầu của ứng dụng.

-   node_modules/: Chứa các thư viện dependencies.

-   package.json: Quản lý dependencies và scripts.

-   ionic.config.json: Cấu hình Ionic (tên project, tích hợp Capacitor).

-   Chi tiết thư mục src/app/ (với template blank):

    -   app.component.ts: Component chính (thường chứa menu hoặc toolbar).

    -   app.module.ts: Module chính, khai báo các thành phần và dịch vụ.

    -   app-routing.module.ts: Quản lý điều hướng giữa các trang.

-   Thư mục pages (ví dụ: src/app/home/):

    -   Mỗi page gồm 3 file:

        -   .page.ts: Logic của trang.

        -   .page.html: Giao diện HTML.

        -   .page.scss: CSS tùy chỉnh.

### Giải thích chi tiết các file quan trọng

-   src/index.html:

    -   File HTML gốc, nơi các script và style được nhúng.

    -   Chứa thẻ <ion-app> là điểm bắt đầu của ứng dụng Ionic.

-   src/app/app.component.ts:

    -   Định nghĩa component chính:

        typescript

        ```ts
        import { Component } from '@angular/core';
        @Component({
          selector: 'app-root',
          templateUrl: 'app.component.html'
        })
        export class AppComponent {}
        ```

-   src/app/app.module.ts:

    -   Khai báo các modules, components, services:

        typescript

        ```ts
        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { IonicModule } from '@ionic/angular';
        import { AppComponent } from './app.component';
        import { AppRoutingModule } from './app-routing.module';

        @NgModule({
          declarations: [AppComponent],
          imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
          bootstrap: [AppComponent]
        })
        export class AppModule {}
        ```

-   src/app/home/home.page.ts:

    -   Logic của trang Home:

        typescript

        ```ts
        import { Component } from '@angular/core';
        @Component({
          selector: 'app-home',
          templateUrl: 'home.page.html',
          styleUrls: ['home.page.scss']
        })
        export class HomePage {
          constructor() {
            console.log("Home page loaded");
          }
        }
        ```

-   src/app/home/home.page.html:

    -   Template giao diện:

        html

        ```ts
        <ion-header>
          <ion-toolbar>
            <ion-title>Home</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <h1>Welcome to Ionic!</h1>
        </ion-content>
        ```

### Thêm một page mới

-   Tạo page mới:

    bash

    ```bash
    ionic generate page about
    ```

    -   Lệnh này tạo thư mục about/ với các file .ts, .html, .scss, và cập nhật routing.

-   Chỉnh sửa page:

    -   Mở src/app/about/about.page.html và thêm:

        html

        ```html
        <ion-content>
          <h2>About Us</h2>
          <p>This is the about page.</p>
        </ion-content>
        ```

-   Điều hướng đến page:

    -   Mở src/app/home/home.page.html, thêm nút:


        ```html
        <ion-button routerLink="/about">Go to About</ion-button>
        ```

-   Kiểm tra:

    -   Chạy ionic serve, nhấp nút "Go to About" và xem trang mới.
