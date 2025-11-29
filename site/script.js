// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href=a.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const el=document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  })
});

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      // once visible, unobserve to reduce work
      observer.unobserve(entry.target);
    }
  })
},{threshold:0.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const siteNav = document.getElementById('site-nav');
if(toggle && siteNav){
  toggle.addEventListener('click', ()=>{
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.style.display = expanded ? '' : 'block';
  });
}

// Simple lightbox for figures
const overlay = document.getElementById('overlay');
document.querySelectorAll('.figure img').forEach(img=>{
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', ()=>{
    if(!overlay) return;
    overlay.innerHTML = '';
    const clone = img.cloneNode();
    clone.style.cursor = 'zoom-out';
    overlay.appendChild(clone);
    overlay.hidden = false;
    overlay.addEventListener('click', ()=>{ overlay.hidden = true; overlay.innerHTML = ''; }, {once:true});
    document.addEventListener('keydown', function esc(e){ if(e.key === 'Escape'){ overlay.hidden = true; overlay.innerHTML = ''; document.removeEventListener('keydown', esc); } });
  });
});
