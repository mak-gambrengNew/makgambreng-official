/* Mak-Gambreng — splash, animasi masuk, dan pemuat gambar kartu. */
(function () {
  var d = document, h = d.documentElement;
  var sp = d.getElementById('splash');

  function ready() { h.classList.add('mg-ready'); }

  /* ---- Splash: hanya bila belum pernah tampil di sesi ini (diputuskan di mg-boot.js) ---- */
  if (sp && !h.classList.contains('mg-no-intro')) {
    setTimeout(function () {
      sp.classList.add('hide');        /* fade-out halus (CSS) */
      ready();                          /* animasi halaman mulai saat splash memudar */
      setTimeout(function () { sp.style.display = 'none'; }, 800);
    }, 4500);
  } else {
    if (sp) sp.style.display = 'none';
    ready();
  }

  /* ---- Gambar kartu dari konfigurasi terpusat ---- */
  var ver = (typeof cardAssetVersion !== 'undefined' && cardAssetVersion) ? '?v=' + cardAssetVersion : '';
  [].forEach.call(d.querySelectorAll('img[data-card]'), function (img) {
    var key = img.getAttribute('data-card'), box = img.parentNode;
    var src = typeof cardAssets !== 'undefined' ? cardAssets[key] : '';
    if (!src) { box.classList.add('is-fallback'); return; }
    var f = typeof cardFocus !== 'undefined' ? cardFocus[key] : '';
    if (f) box.style.setProperty('--card-pos', f);
    img.addEventListener('load', function () {
      box.classList.add(img.naturalWidth > 0 ? 'is-loaded' : 'is-fallback');
    });
    img.addEventListener('error', function () { box.classList.add('is-fallback'); });
    img.src = src + ver;
  });

  /* ---- Service worker ---- */
  if ('serviceWorker' in navigator) {
    addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').catch(function () {});
    });
  }
})();
