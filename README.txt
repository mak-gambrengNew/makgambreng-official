Mak Gambreng PWA mobile-first. Halaman: index.html, produk.html, cerita.html, gerai.html, kemitraan.html.
Menu dan daftar gerai ditampilkan tanpa harga. Informasi alamat/jam/kontak gerai belum ditambahkan karena belum tersedia.
Deploy seluruh folder ke hosting HTTPS (mis. Vercel).

REVISI TERBARU
- Splash screen: hanya tampil sekali per sesi browser (sessionStorage key "mg_intro_seen"), ~4,5 detik, fade-out halus.
  Logika ada di mg-boot.js (satu sumber untuk semua halaman). Untuk menguji ulang: tutup tab / buka sesi baru,
  atau hapus key tersebut lewat DevTools > Application > Session Storage.
- Animasi masuk halaman: mg.css (fade + naik 14px, 480ms, cubic-bezier(0.22,1,0.36,1), stagger kartu 60ms,
  menghormati prefers-reduced-motion).
- Gambar kartu: folder assets/cards/ (lihat assets/cards/README.txt). Daftar path: card-assets.js.
- Service worker (sw.js): versi cache mak-gambreng-v4; kode & gambar kartu network-first agar penggantian
  gambar langsung terpakai setelah deploy.
