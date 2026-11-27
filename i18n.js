// ============ Đa ngôn ngữ (vi / en) cho trang web ============
// Ngôn ngữ lưu ở localStorage 'osw_lang' (cùng khóa với game). Mặc định: tiếng Việt.
(function(){
var D={
vi:{
 /* chung */
 langBtn:'EN', langTip:'Switch to English', loading:'Đang tải…', top50:'Top 50', friends:'Bạn bè', logout:'Đăng xuất', loginUp:'Đăng nhập / Đăng ký',
 login:'Đăng nhập', signup:'Đăng ký', home:'Trang chủ', verifyBadge:'chưa xác minh email',
 /* trang chủ */
 pageTitle:'Osui! - game nhịp điệu cho iPhone',
 metaDesc:'Osui! là game nhịp điệu chạy ngay trên Safari của iPhone, có thể chơi offline, hỗ trợ standard và mania 4K.',
 welcome:'Chào mừng bạn đến với osui!',
 sub:'Nó được viết tắt cho osu!, tựa game nhịp điệu mà tôi thích, và nó dành cho iPhone.',
 playNow:'Chơi trực tiếp', addHome:'Thêm vào màn hình chính', ranking:'Bảng xếp hạng',
 whatH:'Osui! là gì?',
 whatP:'Osui! là một game nhịp điệu được phát triển và chạy ngay trên Safari của iPhone. Game cũng có thể chạy offline khi bạn đã thêm vào màn hình chính. Hiện tại game có 2 chế độ chơi là standard và mania 4K.',
 compatH:'Tương thích',
 compatP:'Game tương thích với mọi dòng iPhone. Tất nhiên bạn có thể bật chế độ thấp để có FPS tốt hơn, và có thể chơi tốt trên màn hình cảm ứng. Tôi có hỗ trợ cả bàn phím và chuột Bluetooth.',
 modesH:'Thêm chế độ chơi',
 modesP:'Hiện tại game có thể thêm các chế độ như Touhosu, Sentakki, Hitokori, miễn là bạn có file <code>.dll</code> của chúng.',
 noteH:'Lưu ý',
 n1:'Tựa game này không hỗ trợ các chế độ như taiko, catch. Khi dùng chúng sẽ bị lỗi hiển thị skin, và sẽ có một số lỗi ngớ ngẩn khác.',
 n2:'Nếu máy bạn có thể tải osu!lazer, tôi khuyên bạn nên ủng hộ phiên bản osu!lazer của peppy. Dù sao thì osui! cũng chỉ là một bản clone, nên tôi khuyến khích bạn ủng hộ osu! nguyên bản của peppy.',
 footer:'Osui! · chạy hoàn toàn trên trình duyệt của bạn',
 mT:'Thêm game vào màn hình chính',
 i1:'Bấm <b>Mở game</b> bên dưới, game sẽ mở bằng <b>Safari</b>.', i2:'Bấm nút <b>Chia sẻ</b> (ô vuông có mũi tên) ở thanh dưới Safari.', i3:'Kéo xuống và chọn <b>Thêm vào MH chính</b>, rồi bấm <b>Thêm</b>.',
 a1:'Bấm <b>Mở game</b> bên dưới, game sẽ mở bằng <b>Chrome</b>.', a2:'Bấm nút <b>⋮</b> ở góc trên bên phải.', a3:'Chọn <b>Thêm vào màn hình chính</b> (hoặc <b>Cài đặt ứng dụng</b>), rồi xác nhận.',
 openGame:'Mở game', close:'Đóng',
 /* bảng xếp hạng / hồ sơ */
 rankTitle:'Bảng xếp hạng - Osui!', notCfg:'Chưa cấu hình', notCfgP:'Hãy điền thông tin Firebase vào <code>firebase-config.js</code> (xem <code>firebase/SETUP.md</code> trong thư mục game).',
 top50H:'Top 50 người chơi', player:'Người chơi', pp:'PP', plays:'Lần chơi', noRank:'Chưa có ai trên bảng xếp hạng.',
 ppNote:'PP là công thức riêng của Osui!, không phải PP chính thức của osu!. Tổng PP = tổng PP các kỷ lục tốt nhất, kỷ lục thứ i nhân 0.95^i.',
 notFound:'Không tìm thấy người chơi', ppStd:'PP osu!', ppMania:'PP mania 4K', playCount:'Số lần chơi', osu:'osu!', mania:'mania 4K', records:'Kỷ lục', history:'Lịch sử chơi',
 map:'Map', score:'Điểm', acc:'Chính xác', rank:'Hạng', mod:'Mod', counted:'Tính vào tổng', time:'Thời gian',
 noRec:'Chưa có kỷ lục nào ở chế độ này.', noPlay:'Chưa có lượt chơi nào ở chế độ này.',
 errIndex:'Thiếu index Firestore (xem firebase/SETUP.md, bước 3).', errLoad:'Không tải được dữ liệu. ',
 /* tài khoản */
 account:'Tài khoản', email:'Email', username:'Tên người chơi (3–16 ký tự: chữ, số, _ . -)', password:'Mật khẩu', password2:'Nhập lại mật khẩu', createAcc:'Tạo tài khoản', forgot:'Quên mật khẩu?',
 signupNote:'Sau khi đăng ký, một email xác minh sẽ được gửi tới hộp thư của bạn.', typeEmailFirst:'Nhập email trước', resetSent:'Đã gửi email đặt lại mật khẩu',
 onlyGmail:'Chỉ nhận địa chỉ @gmail.com', nameRule:'Tên 3–16 ký tự: chữ, số, _ . -', pwMin:'Mật khẩu tối thiểu 6 ký tự', pwMismatch:'Mật khẩu nhập lại không khớp', nameTaken:'Tên này đã có người dùng',
 profileFail:'Không tạo được hồ sơ (tên có thể vừa bị người khác lấy)',
 verifyH:'Xác minh email', verifyP:'Chúng mình đã gửi một email xác minh tới <b>{email}</b>. Hãy mở hộp thư (Gmail), bấm vào liên kết xác minh (kiểm tra cả thư rác), rồi bấm nút bên dưới.',
 verified:'Tôi đã xác minh', resend:'Gửi lại email', notVerified:'Chưa thấy xác minh. Hãy bấm liên kết trong email rồi thử lại.', resent:'Đã gửi lại email xác minh',
 'auth/email-already-in-use':'Email này đã được đăng ký','auth/invalid-email':'Email không hợp lệ','auth/weak-password':'Mật khẩu quá yếu (tối thiểu 6 ký tự)','auth/wrong-password':'Sai email hoặc mật khẩu','auth/invalid-credential':'Sai email hoặc mật khẩu','auth/user-not-found':'Sai email hoặc mật khẩu','auth/too-many-requests':'Thử quá nhiều lần, hãy đợi một lúc','auth/network-request-failed':'Không có mạng',
 errGeneric:'Có lỗi xảy ra',
 /* ảnh đại diện */
 changeAv:'Đổi ảnh đại diện', removeAv:'Xóa ảnh', avHint:'Ảnh được cắt vuông và thu nhỏ trước khi lưu. Ảnh hiển thị trong game ở góc trái màn hình chính.', avNeedVerify:'Hãy xác minh email để đổi ảnh đại diện.',
 avSaving:'Đang lưu ảnh…', avSaved:'Đã cập nhật ảnh đại diện', avRemoved:'Đã xóa ảnh đại diện', avBadFile:'Hãy chọn một file ảnh (JPG, PNG, WebP…)', avTooBig:'Ảnh quá lớn (tối đa 10 MB)', avFail:'Không lưu được ảnh. Hãy thử ảnh khác. ', avRules:'Chưa cho phép lưu ảnh: hãy đăng luật Firestore mới (firebase/firestore.rules).',
 /* bạn bè */
 friendsH:'Bạn bè', addFriendH:'Thêm bạn', addFriendPh:'Nhập tên người chơi', addFriendBtn:'Gửi lời mời', reqIn:'Lời mời kết bạn', reqOut:'Lời mời đã gửi', myFriends:'Danh sách bạn bè',
 noFriends:'Chưa có bạn bè nào. Hãy thêm bạn bằng tên người chơi!', noReqIn:'Không có lời mời nào.', noReqOut:'Không có lời mời đang chờ.', accept:'Chấp nhận', decline:'Từ chối', cancel:'Hủy lời mời', unfriend:'Hủy kết bạn', since:'Kết bạn từ',
 fAdd:'Kết bạn', fSent:'Đã gửi lời mời', fAcceptBtn:'Chấp nhận lời mời', fFriends:'Bạn bè', fSelf:'Đây là bạn',
 fNeedLogin:'Đăng nhập để dùng tính năng kết bạn.', fNeedVerify:'Hãy xác minh email để kết bạn.', fNotFound:'Không tìm thấy người chơi tên "{name}"', fSelfErr:'Bạn không thể kết bạn với chính mình', fAlready:'Hai bạn đã là bạn bè', fAlreadySent:'Bạn đã gửi lời mời cho người này rồi',
 fSentOk:'Đã gửi lời mời kết bạn cho {name}', fAcceptOk:'Bạn và {name} đã là bạn bè', fRules:'Chưa dùng được kết bạn: hãy đăng luật Firestore mới (firebase/SETUP.md).', confirmUnf:'Hủy kết bạn với {name}?',
 /* menu + trang riêng + biểu đồ */
 menuLbl:'Menu', profTitle:'Hồ sơ - Osui!', loginTitle:'Tài khoản - Osui!',
 dayH:'Lịch sử ngày chơi', r7:'7 ngày', r30:'30 ngày', r90:'90 ngày', totPlays:'Tổng lượt chơi', daysPlayed:'Số ngày có chơi', bestDay:'Ngày chơi nhiều nhất',
 noPlayRange:'Chưa có lượt chơi nào trong khoảng này.', tapBar:'Chạm vào một cột để xem ngày và số lần chơi.', nPlays:'{n} lần chơi', chartCap:'Chỉ tính {n} lượt chơi gần nhất.',
 profile:'Hồ sơ'
},
en:{
 langBtn:'VI', langTip:'Chuyển sang tiếng Việt', loading:'Loading…', top50:'Top 50', friends:'Friends', logout:'Log out', loginUp:'Log in / Sign up',
 login:'Log in', signup:'Sign up', home:'Home', verifyBadge:'email not verified',
 pageTitle:'Osui! - a rhythm game for iPhone',
 metaDesc:'Osui! is a rhythm game that runs right in Safari on iPhone, works offline, and supports standard and mania 4K.',
 welcome:'Welcome to osui!',
 sub:'It\'s short for osu!, the rhythm game I love, and it\'s made for iPhone.',
 playNow:'Play now', addHome:'Add to Home Screen', ranking:'Leaderboard',
 whatH:'What is Osui!?',
 whatP:'Osui! is a rhythm game developed for, and running right in, Safari on iPhone. It can also run offline once you add it to your Home Screen. Right now it has 2 game modes: standard and mania 4K.',
 compatH:'Compatibility',
 compatP:'The game works on every iPhone model. You can of course turn on low mode for better FPS, and it plays well on a touchscreen. I also support Bluetooth keyboards and mice.',
 modesH:'Adding game modes',
 modesP:'The game can add modes such as Touhosu, Sentakki and Hitokori, as long as you have their <code>.dll</code> files.',
 noteH:'Notes',
 n1:'This game does not support modes like taiko and catch. Using them will cause skin display bugs and some other silly bugs.',
 n2:'If your device can run osu!lazer, I recommend supporting peppy\'s osu!lazer. After all, osui! is only a clone, so I encourage you to support peppy\'s original osu!.',
 footer:'Osui! · runs entirely in your browser',
 mT:'Add the game to your Home Screen',
 i1:'Tap <b>Open game</b> below; the game opens in <b>Safari</b>.', i2:'Tap the <b>Share</b> button (the square with an arrow) in Safari\'s bottom bar.', i3:'Scroll down and choose <b>Add to Home Screen</b>, then tap <b>Add</b>.',
 a1:'Tap <b>Open game</b> below; the game opens in <b>Chrome</b>.', a2:'Tap the <b>⋮</b> button at the top right.', a3:'Choose <b>Add to Home screen</b> (or <b>Install app</b>), then confirm.',
 openGame:'Open game', close:'Close',
 rankTitle:'Leaderboard - Osui!', notCfg:'Not configured', notCfgP:'Fill in your Firebase details in <code>firebase-config.js</code> (see <code>firebase/SETUP.md</code> in the game folder).',
 top50H:'Top 50 players', player:'Player', pp:'PP', plays:'Plays', noRank:'Nobody is on the leaderboard yet.',
 ppNote:'PP uses Osui!\'s own formula and is not official osu! PP. Total PP = sum of your best records, where the i-th record is weighted by 0.95^i.',
 notFound:'Player not found', ppStd:'osu! PP', ppMania:'mania 4K PP', playCount:'Play count', osu:'osu!', mania:'mania 4K', records:'Records', history:'Play history',
 map:'Map', score:'Score', acc:'Accuracy', rank:'Rank', mod:'Mods', counted:'Weighted PP', time:'Time',
 noRec:'No records in this mode yet.', noPlay:'No plays in this mode yet.',
 errIndex:'Missing Firestore index (see firebase/SETUP.md, step 3).', errLoad:'Could not load data. ',
 account:'Account', email:'Email', username:'Username (3–16 chars: letters, digits, _ . -)', password:'Password', password2:'Repeat password', createAcc:'Create account', forgot:'Forgot password?',
 signupNote:'After signing up, a verification email will be sent to your inbox.', typeEmailFirst:'Enter your email first', resetSent:'Password reset email sent',
 onlyGmail:'Only @gmail.com addresses are accepted', nameRule:'Name: 3–16 chars, letters, digits, _ . -', pwMin:'Password must be at least 6 characters', pwMismatch:'Passwords do not match', nameTaken:'This name is already taken',
 profileFail:'Could not create the profile (the name may have just been taken)',
 verifyH:'Verify your email', verifyP:'We sent a verification email to <b>{email}</b>. Open your inbox (Gmail), click the verification link (check spam too), then press the button below.',
 verified:'I\'ve verified', resend:'Resend email', notVerified:'Not verified yet. Click the link in the email, then try again.', resent:'Verification email sent again',
 'auth/email-already-in-use':'This email is already registered','auth/invalid-email':'Invalid email','auth/weak-password':'Password too weak (min 6 characters)','auth/wrong-password':'Wrong email or password','auth/invalid-credential':'Wrong email or password','auth/user-not-found':'Wrong email or password','auth/too-many-requests':'Too many attempts, please wait a moment','auth/network-request-failed':'No network connection',
 errGeneric:'Something went wrong',
 changeAv:'Change profile picture', removeAv:'Remove picture', avHint:'Pictures are cropped to a square and shrunk before saving. It is shown in-game at the top-left of the main menu.', avNeedVerify:'Verify your email to change your profile picture.',
 avSaving:'Saving picture…', avSaved:'Profile picture updated', avRemoved:'Profile picture removed', avBadFile:'Please choose an image file (JPG, PNG, WebP…)', avTooBig:'Image too large (max 10 MB)', avFail:'Could not save the picture. Try another one. ', avRules:'Saving pictures is not allowed yet: publish the new Firestore rules (firebase/firestore.rules).',
 friendsH:'Friends', addFriendH:'Add a friend', addFriendPh:'Enter a username', addFriendBtn:'Send request', reqIn:'Friend requests', reqOut:'Sent requests', myFriends:'Friend list',
 noFriends:'No friends yet. Add someone by username!', noReqIn:'No requests.', noReqOut:'No pending requests.', accept:'Accept', decline:'Decline', cancel:'Cancel request', unfriend:'Unfriend', since:'Friends since',
 fAdd:'Add friend', fSent:'Request sent', fAcceptBtn:'Accept request', fFriends:'Friends', fSelf:'This is you',
 fNeedLogin:'Log in to use friends.', fNeedVerify:'Verify your email to add friends.', fNotFound:'No player named "{name}"', fSelfErr:'You can\'t add yourself', fAlready:'You are already friends', fAlreadySent:'You already sent this player a request',
 fSentOk:'Friend request sent to {name}', fAcceptOk:'You and {name} are now friends', fRules:'Friends are not available yet: publish the new Firestore rules (firebase/SETUP.md).', confirmUnf:'Unfriend {name}?',
 menuLbl:'Menu', profTitle:'Profile - Osui!', loginTitle:'Account - Osui!',
 dayH:'Play history by day', r7:'7 days', r30:'30 days', r90:'90 days', totPlays:'Total plays', daysPlayed:'Days played', bestDay:'Most active day',
 noPlayRange:'No plays in this period.', tapBar:'Tap a bar to see the date and number of plays.', nPlays:'{n} plays', chartCap:'Only the latest {n} plays are counted.',
 profile:'Profile'
}};
var L='vi';try{L=localStorage.getItem('osw_lang')==='en'?'en':'vi'}catch(e){}
var cbs=[];
function t(k,v){var s=(D[L]&&D[L][k]);if(s==null)s=D.vi[k];if(s==null)s=k;if(v)for(var x in v)s=s.split('{'+x+'}').join(v[x]);return s}
function apply(root){root=root||document;document.documentElement.lang=L;
 root.querySelectorAll('[data-i]').forEach(function(e){e.innerHTML=t(e.getAttribute('data-i'))});
 root.querySelectorAll('[data-ip]').forEach(function(e){e.setAttribute('placeholder',t(e.getAttribute('data-ip')))});
 var d=document.querySelector('meta[name=description]');if(d&&root===document)d.setAttribute('content',t('metaDesc'));
 var pt=document.documentElement.getAttribute('data-title');if(pt)document.title=t(pt);
 document.querySelectorAll('.langbtn').forEach(function(b){b.textContent=t('langBtn');b.title=t('langTip')})}
function set(l){L=l==='en'?'en':'vi';try{localStorage.setItem('osw_lang',L)}catch(e){}apply();cbs.forEach(function(f){try{f(L)}catch(e){}})}
window.I18N={t:t,apply:apply,set:set,get lang(){return L},onChange:function(f){cbs.push(f)},toggle:function(){set(L==='vi'?'en':'vi')}};
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.langbtn');if(b){e.preventDefault();I18N.toggle()}});
})();
