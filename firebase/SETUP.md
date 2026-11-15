# Cài đặt tài khoản & bảng xếp hạng (Firebase)

Game và trang web đều là web tĩnh (GitHub Pages) nên cần một nơi lưu tài khoản và điểm. Mình dùng **Firebase** (gói Spark miễn phí, không cần tự dựng máy chủ). Làm một lần theo các bước dưới.

## 1. Tạo project
1. Vào https://console.firebase.google.com → **Add project** (tắt Google Analytics cũng được).
2. Trong project: **Project settings → Your apps → Web (`</>`)** → đặt tên → **Register app**.
3. Copy khối `firebaseConfig` và điền vào `firebase-config.js` (`apiKey`, `authDomain`, `projectId`, `appId`).
4. **Chép đúng file `firebase-config.js` đó vào cả game (osui-site) và web (osui-landing)**. Điền `webUrl` là link trang web, ví dụ `https://nhatminh6789.github.io/Osui-landing/`.

## 2. Bật đăng nhập bằng email + mật khẩu
1. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable**.
2. **Authentication → Settings → Authorized domains → Add domain**: thêm tên miền GitHub Pages của bạn (ví dụ `nhatminh6789.github.io`).
3. (Tuỳ chọn) **Authentication → Templates → Email address verification**: đổi ngôn ngữ sang Tiếng Việt và sửa nội dung thư.
   Email xác minh được gửi từ Firebase tới hộp thư người đăng ký (Gmail hoặc bất kỳ email nào). Thư có thể rơi vào mục Spam lần đầu.
4. Muốn chỉ cho phép Gmail: đặt `onlyGmail:true` trong `firebase-config.js`.

## 3. Tạo Firestore + luật + index
1. **Build → Firestore Database → Create database** (chọn Production mode, chọn vùng gần bạn, ví dụ `asia-southeast1`).
2. Tab **Rules**: dán toàn bộ nội dung `firestore.rules` → **Publish**.
3. Tab **Indexes → Composite**: tạo 3 index theo `firestore.indexes.json`
   (hoặc dùng Firebase CLI: `firebase deploy --only firestore`).
   Cách nhanh: chạy game/web, lần đầu mở bảng xếp hạng sẽ có lỗi trong Console kèm link “create index”, bấm link đó là xong.

## 4. Kiểm tra
- Trong game: góc trái trên bấm biểu tượng người → **Đăng ký** → mở email bấm liên kết xác minh → quay lại bấm **Tôi đã xác minh**.
- Chơi một map (không bật Auto/Relax/AutoPilot/Cinema/Target Practice), kết quả hiện dòng trạng thái “Kỷ lục mới! Tổng PP …”.
- Trên web: `rank.html` hiển thị Top 50, hồ sơ, kỷ lục từng map và lịch sử chơi.

## Lưu ý quan trọng
- **PP của Osui! là công thức riêng** (dựa trên độ khó sao của game, độ chính xác, miss, combo, mod), không trùng PP chính thức của osu!. Tổng PP của người chơi = tổng PP các kỷ lục tốt nhất, mỗi kỷ lục thứ *i* nhân `0.95^i` (tối đa 100 kỷ lục mỗi chế độ).
- Điểm được tính và gửi từ trình duyệt của người chơi, luật Firestore chỉ chặn giá trị phi lý (điểm, PP quá lớn, giả mạo người khác, sửa điểm thấp hơn). **Không thể chống gian lận hoàn toàn** nếu không có máy chủ kiểm tra. Nếu cần, có thể thêm Cloud Functions (cần gói Blaze) để tính lại PP phía máy chủ.
- Định danh map là SHA-256 của file `.osu`, nên cùng một map (cùng file) ở máy khác sẽ vào chung bảng xếp hạng.
- Mỗi lần chơi xong tốn vài lượt ghi Firestore; gói miễn phí đủ cho một cộng đồng nhỏ (20k lượt ghi/ngày).
