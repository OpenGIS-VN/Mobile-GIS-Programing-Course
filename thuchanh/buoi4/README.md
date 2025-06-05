# Buổi 4: Điều hướng giữa các trang

* Thiết lập Routing giữa các page.
* Demo: Tạo app trường Nông Lâm, tạo các page thông tin toà nhà, điều hướng giữa các page

## Tạo Page, Component, Service

Lệnh:

```bash
ionic generate page [tên_page]  

ionic generate component [tên_component]  

ionic generate service [tên_service]
```

Các lệnh trên giúp tạo nhanh các thành phần như Page, Component hoặc Service với cấu trúc file tiêu chuẩn.

### Khái niệm page, component, service

1\. Page

-   Định nghĩa: Page là một thành phần đặc biệt trong Ionic, đại diện cho một màn hình hoặc một trang cụ thể trong ứng dụng. Mỗi page thường có một URL riêng và được sử dụng trong hệ thống điều hướng (routing) của Angular.

-   Vai trò và chức năng:

    -   Hiển thị nội dung chính của ứng dụng, ví dụ: trang chủ, trang chi tiết, hoặc trang cài đặt.

    -   Quản lý các sự kiện vòng đời (lifecycle events) như ionViewWillEnter, ionViewDidEnter, để thực hiện các hành động khi trang được tải hoặc rời đi.

    -   Thường chứa các component nhỏ hơn để xây dựng giao diện.

-   Ví dụ: Trong ứng dụng quản lý công việc, bạn có thể có HomePage (danh sách công việc), TaskDetailPage (chi tiết công việc), hoặc SettingsPage (cài đặt).

-   Cách tạo: Sử dụng lệnh `ionic generate page [tên_page]`, ví dụ: `ionic generate page home`. Lệnh này tạo ra một thư mục chứa các tệp như home.page.ts, home.page.html, và home.page.scss.

* * * * *

2\. Component

-   Định nghĩa: Component là một khối xây dựng cơ bản trong Angular, đại diện cho một phần nhỏ của giao diện người dùng. Trong Ionic, component thường được sử dụng trong các page để tạo ra các phần tử giao diện có thể tái sử dụng.

-   Vai trò và chức năng:

    -   Tạo các phần tử giao diện nhỏ như header, footer, card, hoặc nút tùy chỉnh.

    -   Có thể nhận dữ liệu từ page hoặc component cha qua @Input() và gửi sự kiện ra ngoài qua @Output().

    -   Sử dụng các lifecycle hooks của Angular như ngOnInit, ngOnDestroy, nhưng không có sự kiện vòng đời đặc biệt như page.

-   Ví dụ: Trong ứng dụng quản lý công việc, bạn có thể tạo TaskCardComponent để hiển thị thông tin một công việc, và tái sử dụng component này trong HomePage.

-   Cách tạo: Sử dụng lệnh `ionic generate component [tên_component]`, ví dụ: `ionic generate component task-card`. Lệnh này tạo ra các tệp như task-card.component.ts, task-card.component.html, và task-card.component.scss.

* * * * *

3\. Service

-   Định nghĩa: Service là một lớp trong Angular, được dùng để xử lý logic nghiệp vụ, quản lý dữ liệu, hoặc tương tác với backend. Service không liên quan trực tiếp đến giao diện người dùng.

-   Vai trò và chức năng:

    -   Cung cấp các phương thức để thực hiện tác vụ như gọi API, xử lý dữ liệu, hoặc quản lý trạng thái ứng dụng.

    -   Được inject vào page hoặc component để sử dụng các phương thức của nó.

    -   Có thể tái sử dụng trong nhiều phần của ứng dụng.

-   Ví dụ: Trong ứng dụng quản lý công việc, TaskService có thể chứa các phương thức để lấy danh sách công việc từ server, thêm, sửa, hoặc xóa công việc.

-   Cách tạo: Sử dụng lệnh `ionic generate service [tên_service]`, ví dụ: `ionic generate service task`. Lệnh này tạo ra tệp như task.service.ts.

* * * * *

### Phân biệt giữa Page, Component, và Service

* * * * *

Giả sử bạn xây dựng một ứng dụng quản lý công việc:

-   Page: HomePage hiển thị danh sách công việc.

-   Component: TaskCardComponent hiển thị thông tin của từng công việc trong danh sách.

-   Service: TaskService cung cấp các phương thức để lấy hoặc cập nhật danh sách công việc từ server.

Trong HomePage, bạn inject TaskService để lấy dữ liệu công việc, sau đó dùng TaskCardComponent để hiển thị từng công việc trong danh sách.

* * * * *

Kết luận

-   Page: Là nơi người dùng tương tác chính, đại diện cho một màn hình hoàn chỉnh.

-   Component: Là các khối giao diện nhỏ, giúp tái sử dụng và tổ chức mã tốt hơn.

-   Service: Là nơi xử lý logic và dữ liệu, hỗ trợ page và component.

Hy vọng giải thích này giúp bạn hiểu rõ sự khác biệt và cách sử dụng các lệnh ionic generate để tạo page, component, và service trong Ionic!

## Điều hưóng trong IONIC

Để sử dụng Angular Router, chúng ta cần thực hiện một số bước cơ bản để định nghĩa các route và sử dụng chúng trong template HTML.

1\. Định nghĩa các route

Trước tiên, cần định nghĩa các route trong file app-routing.module.ts. Đây là nơi bạn khai báo đường dẫn (path) và component tương ứng.

**Nếu dùng lệnh cli để gen page thì ionic cli sẽ tự động định nghĩa các route trong file app-routing.module.ts cho chúng ta**

Ví dụ:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

-   Trong ví dụ này, khi truy cập /home, ứng dụng sẽ hiển thị HomeComponent, và /about sẽ hiển thị AboutComponent.

2\. Sử dụng routerLink trong HTML

Trong giao diện HTML, bạn sử dụng directive routerLink để tạo các liên kết điều hướng đến các route đã định nghĩa. Directive này có thể được dùng với các thẻ như `<a>`, `<button>`, hoặc bất kỳ thành phần nào khác.

Ví dụ cơ bản:

```html
<a routerLink="/home">Trang chủ</a>
<a routerLink="/about">Giới thiệu</a>
```

-   Khi người dùng nhấp vào liên kết, Angular Router sẽ điều hướng đến route tương ứng mà không tải lại trang.

**Ví dụ với tham số**:

Nếu bạn cần truyền tham số (ví dụ: ID của một sản phẩm), bạn có thể sử dụng cú pháp mảng:

```html
<a [routerLink]="['/product', productId]">Xem sản phẩm</a>
```

-   productId là một biến trong component chứa giá trị tham số (ví dụ: productId = 123).

Để nhận tham số productId trong ProductPage khi dùng `[routerLink]="['/product', productId]"`:

1.  Định nghĩa route: `{ path: 'product/:id', component: ProductPage }`.

2.  Inject ActivatedRoute vào ProductPage.

```ts
import { ActivatedRoute } from '@angular/router';

....

constructor(private route: ActivatedRoute) {}

```

3.  Lấy tham số:

    -   Dùng `this.route.snapshot.paramMap.get('id')` nếu tham số không thay đổi.

    ```ts
        ngOnInit() {
            this.productId = this.route.snapshot.paramMap.get('id');
            console.log('Product ID:', this.productId);
        }
    ```

    -   Dùng `this.route.paramMap.subscribe` nếu cần theo dõi sự thay đổi.
    ```ts
        ngOnInit() {
            this.route.paramMap.subscribe(params => {
            this.productId = params.get('id');
            console.log('Product ID:', this.productId);
            });
        }
    ```