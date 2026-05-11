const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.innerHTML=nav.classList.contains('open')?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.site-nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('.faq-item button').forEach(btn=>btn.addEventListener('click',()=>{btn.parentElement.classList.toggle('open')}));
const login=document.getElementById('loginForm');if(login){login.addEventListener('submit',e=>{e.preventDefault();alert('Login successful!');location.href='index.html'})}
const signup=document.getElementById('signupForm');if(signup){signup.addEventListener('submit',e=>{e.preventDefault();const p=document.getElementById('pwd').value,c=document.getElementById('confirm-pwd').value;if(p!==c){alert('Passwords do not match!');return}alert('Sign-up successful!');location.href='index.html'})}


const whatsappForm=document.getElementById('whatsappBookingForm');
if(whatsappForm){whatsappForm.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(whatsappForm);const message=`Hello LuxeLens, I want to book a photography session.%0A%0AName: ${data.get('firstName')} ${data.get('lastName')}%0AEmail: ${data.get('email')}%0APhone: ${data.get('phone')}%0AService: ${data.get('service')}%0APreferred Date: ${data.get('date')||'Not decided yet'}%0ALocation: ${data.get('location')||'Not decided yet'}%0AMessage: ${data.get('message')}`;window.open(`https://wa.me/2349138465408?text=${message}`,'_blank');whatsappForm.reset();})}
document.querySelectorAll('form:not(#loginForm):not(#signupForm):not(#whatsappBookingForm)').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Sent successfully!');f.reset()}));
