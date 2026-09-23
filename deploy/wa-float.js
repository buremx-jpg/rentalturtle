(function(){
  if (window.__rtWaFloat) return; window.__rtWaFloat = true;
  var PHONE = '5521975855044';
  var p = location.pathname;
  var lang = /\/es(\/|$)/.test(p) ? 'es' : /\/en(\/|$)/.test(p) ? 'en' : 'pt';
  var T = {
    es:{bubble:'¿Dudas? Escríbenos 👋', prod:'Hola Rental Turtle 🐢 Quiero alquilar: {p}. Mis fechas son: ', gen:'Hola Rental Turtle 🐢 Quiero información para alquilar equipo de bebé en Río.'},
    pt:{bubble:'Dúvidas? Fale com a gente 👋', prod:'Olá Rental Turtle 🐢 Quero alugar: {p}. Minhas datas são: ', gen:'Olá Rental Turtle 🐢 Quero informações para alugar equipamento de bebê no Rio.'},
    en:{bubble:'Questions? Chat with us 👋', prod:"Hi Rental Turtle 🐢 I'd like to rent: {p}. My dates are: ", gen:"Hi Rental Turtle 🐢 I'd like info about renting baby gear in Rio."}
  }[lang];

  var css = '#rt-wa,#rt-wa-bubble{display:none}' +
  '@media (max-width:768px){' +
  '#rt-wa{display:flex;position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom) + var(--rt-wa-lift,0px));z-index:2147483000;width:58px;height:58px;border-radius:50%;background:#25D366;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.25);transition:transform 150ms ease,box-shadow 150ms ease;-webkit-tap-highlight-color:transparent;text-decoration:none}' +
  '#rt-wa:active{transform:scale(1.05);box-shadow:0 6px 18px rgba(0,0,0,.32)}' +
  '#rt-wa svg{width:30px;height:30px;display:block}' +
  '#rt-wa.rt-wa-pulse::after{content:"";position:absolute;inset:0;border-radius:50%;border:3px solid #25D366;animation:rt-wa-ring 1.2s ease-out 2;pointer-events:none}' +
  '#rt-wa-bubble.rt-show{display:block;position:fixed;right:86px;bottom:calc(27px + env(safe-area-inset-bottom) + var(--rt-wa-lift,0px));z-index:2147483000;background:#fff;color:#264653;font:600 14px/1.3 Nunito,system-ui,-apple-system,sans-serif;padding:9px 14px;border-radius:14px;box-shadow:0 4px 12px rgba(0,0,0,.18);white-space:nowrap;cursor:pointer;animation:rt-wa-in 200ms ease-out}' +
  '#rt-wa-bubble.rt-show::after{content:"";position:absolute;right:-6px;top:50%;margin-top:-6px;border-style:solid;border-width:6px 0 6px 7px;border-color:transparent transparent transparent #fff}' +
  'html.rt-wa-hide #rt-wa,html.rt-wa-hide #rt-wa-bubble{display:none !important}' +
  '}' +
  '@keyframes rt-wa-ring{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.6);opacity:0}}' +
  '@keyframes rt-wa-in{from{opacity:0;transform:translateX(6px)}to{opacity:1;transform:none}}';

  var ICON = '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="#fff" d="M16.004 3C8.826 3 3.004 8.82 3.004 15.997c0 2.294.6 4.535 1.74 6.51L3 29l6.66-1.745a12.96 12.96 0 0 0 6.34 1.65h.005C23.18 28.905 29 23.083 29 15.906 29 12.43 27.648 9.16 25.19 6.7A12.9 12.9 0 0 0 16.004 3zm0 23.71h-.004a10.77 10.77 0 0 1-5.49-1.504l-.393-.234-3.953 1.036 1.055-3.853-.256-.395a10.73 10.73 0 0 1-1.648-5.763c0-5.94 4.835-10.772 10.78-10.772 2.878 0 5.583 1.122 7.617 3.158a10.7 10.7 0 0 1 3.154 7.62c-.003 5.94-4.838 10.707-10.862 10.707zm5.908-8.066c-.324-.162-1.917-.946-2.214-1.054-.297-.108-.513-.162-.729.162-.216.325-.837 1.054-1.026 1.27-.189.217-.378.244-.702.082-.324-.163-1.368-.505-2.606-1.608-.963-.859-1.613-1.92-1.802-2.244-.189-.325-.02-.5.142-.662.146-.145.324-.379.486-.568.162-.19.216-.325.324-.541.108-.217.054-.406-.027-.568-.081-.163-.729-1.759-.999-2.408-.263-.632-.53-.546-.729-.556l-.621-.011a1.19 1.19 0 0 0-.864.406c-.297.325-1.134 1.108-1.134 2.703s1.161 3.136 1.323 3.353c.162.216 2.285 3.49 5.536 4.894.774.334 1.378.533 1.849.683.777.247 1.484.212 2.043.129.623-.093 1.917-.784 2.187-1.54.27-.758.27-1.407.189-1.542-.08-.136-.297-.217-.621-.38z"/></svg>';

  function productName(){
    var h = document.querySelector('.rt-detail h1');
    return h ? (h.textContent || '').replace(/\s+/g,' ').trim() : '';
  }
  function checkoutOpen(){ return !!document.querySelector('aside'); }

  function init(){
    var st = document.createElement('style'); st.id = 'rt-wa-style'; st.textContent = css; document.head.appendChild(st);
    var a = document.createElement('a');
    a.id = 'rt-wa'; a.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(T.gen);
    a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('aria-label','WhatsApp'); a.setAttribute('title','WhatsApp');
    a.innerHTML = ICON;
    var b = document.createElement('div');
    b.id = 'rt-wa-bubble'; b.setAttribute('role','status'); b.textContent = T.bubble;
    document.body.appendChild(b); document.body.appendChild(a);

    a.addEventListener('click', function(){
      var name = productName();
      a.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(name ? T.prod.replace('{p}', name) : T.gen);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event:'click_whatsapp', method:'whatsapp_float', page_language:lang, item_name:name || '', page_path:location.pathname });
      hideBubble();
    });

    var hideT;
    function hideBubble(){ clearTimeout(hideT); b.classList.remove('rt-show'); }
    b.addEventListener('click', hideBubble);

    var seen = false;
    try { seen = sessionStorage.getItem('rt-wa-bubble') === '1'; } catch(e) {}
    if (!seen) {
      setTimeout(function(){
        if (!window.matchMedia('(max-width:768px)').matches || checkoutOpen()) return;
        try { sessionStorage.setItem('rt-wa-bubble','1'); } catch(e) {}
        b.classList.add('rt-show');
        a.classList.add('rt-wa-pulse');
        setTimeout(function(){ a.classList.remove('rt-wa-pulse'); }, 2600);
        hideT = setTimeout(hideBubble, 5000);
      }, 6000);
    }

    var html = document.documentElement, queued = false;
    function sync(){
      queued = false;
      var open = checkoutOpen();
      html.classList.toggle('rt-wa-hide', open);
      if (open) hideBubble();
      var lift = 0, bars = document.querySelectorAll('[data-rt-bottom-bar]');
      for (var i = 0; i < bars.length; i++) {
        var r = bars[i].getBoundingClientRect();
        if (r.height && r.bottom >= window.innerHeight - 2) lift = Math.max(lift, r.height + 8);
      }
      html.style.setProperty('--rt-wa-lift', lift + 'px');
    }
    new MutationObserver(function(){ if (!queued) { queued = true; requestAnimationFrame(sync); } })
      .observe(document.body, { childList:true, subtree:true });
    window.addEventListener('resize', sync);
    sync();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
