// Menu 3 gạch (script thường, không phụ thuộc Firebase để menu luôn mở được).
// Trang cần có: <button id="mb" class="mb">…</button> và <html data-page="home|rank|profile|login">.
// Firebase gọi OSUI_MENU.set({li:true/false, badge:n}) khi biết trạng thái đăng nhập.
(function(){
var btn=document.getElementById('mb');if(!btn)return;
var page=document.documentElement.getAttribute('data-page')||'';
var st={li:false,badge:0};
try{st.li=localStorage.getItem('osui_li')==='1'}catch(e){} // nhớ lần trước để khỏi nháy "Đăng nhập" khi đã đăng nhập
var ov=document.createElement('div');ov.id='mo';
var dr=document.createElement('div');dr.id='md';dr.setAttribute('role','navigation');dr.setAttribute('aria-hidden','true');
document.body.appendChild(ov);document.body.appendChild(dr);
var T=function(k){return window.I18N?I18N.t(k):k};
function cur(){var h=location.hash;
 if(page==='profile')return /^#friends/.test(h)?'friends':'profile';
 if(page==='login')return /^#up/.test(h)?'signup':'login';
 return page}
function render(){var c=cur();dr.setAttribute('aria-label',T('menuLbl'));
 function it(id,href,label,b){return'<a class="mi'+(c===id?' on':'')+'" href="'+href+'">'+label+(b?'<span class="bdg">'+b+'</span>':'')+'</a>'}
 var h='<div class="mh"><img src="assets/logo.png" alt=""><b>Osui!</b><button type="button" class="mx" aria-label="'+T('close')+'">✕</button></div>';
 h+=it('home','index.html',T('home'))+it('rank','rank.html',T('ranking'));
 if(st.li)h+=it('profile','profile.html#me',T('profile'))+it('friends','profile.html#friends',T('friends'),st.badge);
 h+='<div class="ms"></div>';
 if(st.li)h+='<button type="button" class="mi dg" data-lo="1">'+T('logout')+'</button>';
 else h+=it('login','login.html#in',T('login'))+it('signup','login.html#up',T('signup'));
 dr.innerHTML=h;
 var d=btn.querySelector('.dot');if(d)d.style.display=(st.li&&st.badge)?'block':'none';
 btn.setAttribute('aria-label',T('menuLbl'))}
function open(){render();document.documentElement.classList.add('mopen');dr.classList.add('on');ov.classList.add('on');dr.setAttribute('aria-hidden','false');btn.setAttribute('aria-expanded','true')}
function close(){document.documentElement.classList.remove('mopen');dr.classList.remove('on');ov.classList.remove('on');dr.setAttribute('aria-hidden','true');btn.setAttribute('aria-expanded','false')}
btn.addEventListener('click',function(){dr.classList.contains('on')?close():open()});
ov.addEventListener('click',close);
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
dr.addEventListener('click',function(e){var x=e.target.closest&&e.target.closest('.mx,[data-lo],a');if(!x)return;
 close();if(x.hasAttribute&&x.hasAttribute('data-lo')&&window.OSUI_MENU&&typeof OSUI_MENU.onLogout==='function')OSUI_MENU.onLogout()});
addEventListener('hashchange',render);
if(window.I18N)I18N.onChange(render);
window.OSUI_MENU={onLogout:null,
 set:function(o){if('li' in o){st.li=!!o.li;try{localStorage.setItem('osui_li',st.li?'1':'0')}catch(e){}}
  if('badge' in o)st.badge=o.badge|0;render()}};
render();
})();
