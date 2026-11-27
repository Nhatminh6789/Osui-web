// Phần dùng chung (ES module) cho index / rank / profile / login
const CFG=window.OSUI_FIREBASE||{},CDN='https://www.gstatic.com/firebasejs/10.14.1/';
export const S={CFG,A:null,D:null,au:null,fs:null,CU:null,PROF:null,
 ready:!!(CFG.apiKey&&CFG.projectId&&!/^YOUR_/.test(CFG.apiKey))};
export const t=(k,v)=>I18N.t(k,v);
export const $=id=>document.getElementById(id);
export const esc=x=>String(x==null?'':x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const loc=()=>I18N.lang==='en'?'en-US':'vi-VN';
export const num=(x,d=0)=>Number(x||0).toLocaleString(loc(),{minimumFractionDigits:d,maximumFractionDigits:d});
export const ago=ts=>{const d=new Date(ts);return d.toLocaleDateString(loc())+' '+d.toLocaleTimeString(loc(),{hour:'2-digit',minute:'2-digit'})};
export const NAME_RE=/^[A-Za-z0-9_.\-]{3,16}$/;
export const AVRE=/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+\/=]+$/;
// avatar: chỉ nhận data URL ảnh hợp lệ
export const av=(u,s)=>{s=s||32;const a=u&&typeof u.avatar==='string'&&AVRE.test(u.avatar)?u.avatar:'';return'<i class="av" style="--s:'+s+'px'+(a?";background-image:url('"+a+"')":'')+'">'+(a?'':esc(((u&&u.name)||'?').charAt(0).toUpperCase()))+'</i>'};
export const emsg=e=>{const k=e&&e.code;if(k&&k.indexOf('auth/')===0){const m=t(k);if(m!==k)return m}return(e&&e.code==='permission-denied')?t('fRules'):(e&&e.message)||t('errGeneric')};
export const ERR=e=>e&&e.code==='failed-precondition'?t('errIndex'):t('errLoad')+(e&&e.message?esc(e.message):'');
export const sec=h=>{$('app').innerHTML='<section>'+h+'</section>'};
export function notCfg(){const f=()=>{sec('<h1>'+t('notCfg')+'</h1><p class="dim">'+t('notCfgP')+'</p>')};f();I18N.onChange(f)}

// Khởi tạo Firebase (Auth; thêm Firestore nếu cần). Trả về false nếu chưa cấu hình.
export async function init(o){o=o||{};if(!S.ready)return false;
 const mods=[import(CDN+'firebase-app.js'),import(CDN+'firebase-auth.js')];if(o.fs)mods.push(import(CDN+'firebase-firestore.js'));
 const[{initializeApp},au,fs]=await Promise.all(mods);
 S.au=au;S.fs=fs||null;S.A=au.getAuth(initializeApp(CFG));S.D=fs?fs.getFirestore(S.A.app):null;
 const setLang=()=>{try{S.A.languageCode=I18N.lang}catch(e){}};setLang();I18N.onChange(setLang);
 if(window.OSUI_MENU)OSUI_MENU.onLogout=()=>au.signOut(S.A); // nút "Đăng xuất" trong menu
 return true}
export async function loadProf(){S.PROF=null;if(!S.CU||!S.fs)return;try{const s=await S.fs.getDoc(S.fs.doc(S.D,'users',S.CU.uid));S.PROF=s.exists()?s.data():null}catch(e){}}
// Theo dõi đăng nhập: cập nhật menu (Đăng nhập/Đăng ký <-> Đăng xuất) rồi gọi cb(user)
export function watch(cb){S.au.onAuthStateChanged(S.A,async u=>{S.CU=u;S.PROF=null;
 if(window.OSUI_MENU)OSUI_MENU.set({li:!!u});
 await loadProf();try{await cb(u)}catch(e){console.error(e)}})}
