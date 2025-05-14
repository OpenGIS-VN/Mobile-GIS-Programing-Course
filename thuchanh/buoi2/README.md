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