/* Mak-Gambreng — boot (dimuat di <head>, sebelum render).
   Menentukan apakah splash perlu tampil, memakai sessionStorage "mg_intro_seen".
   Satu sumber logika untuk semua halaman. */
(function () {
  var h = document.documentElement, seen = false;
  try {
    seen = !!sessionStorage.getItem('mg_intro_seen');
    if (!seen) sessionStorage.setItem('mg_intro_seen', '1');
  } catch (e) { seen = true; } /* storage tidak tersedia: lewati splash, jangan berulang */
  if (seen) h.classList.add('mg-no-intro');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) h.classList.add('mg-anim');
  /* Pengaman: konten tidak akan pernah tertahan tersembunyi bila mg.js gagal dimuat */
  setTimeout(function () { h.classList.add('mg-ready'); }, seen ? 1500 : 6500);
})();
