CARA MENGGANTI GAMBAR KARTU
===========================
1. Siapkan gambar baru (disarankan rasio 4:3, mis. 800x600 px atau 1200x900 px, format PNG).
2. Beri NAMA FILE YANG SAMA persis dengan file lama di folder ini.
3. Timpa file lama (di GitHub: Add file > Upload files, atau ganti lewat commit).
4. Deploy. Website otomatis memakai gambar baru - tanpa mengubah HTML/CSS/JS.

Catatan:
- File di folder ini saat ini adalah GAMBAR PENGGANTI (placeholder) bermerek Mak-Gambreng.
  Ganti dengan foto produk/gerai asli.
- Daftar kartu dan path-nya ada di card-assets.js (satu-satunya tempat path gambar kartu).
- Titik fokus gambar (agar objek utama tidak terpotong) dapat diatur di card-assets.js pada
  "cardFocus", contoh: menuTehSolo: "50% 30%".
- Jika file hilang/gagal dimuat, kartu otomatis menampilkan fallback warna brand + logo.
- Service worker memakai strategi network-first untuk folder ini, jadi gambar baru langsung
  terpakai setelah deploy (cache hanya cadangan saat offline).

DAFTAR FILE
-----------
Beranda - kategori : card-produk-teh-solo.png, card-cappuccino-squash.png, card-minuman-viral.png
Menu (Beranda+Produk): card-menu-teh-ekstra.png, card-menu-teh-solo.png, card-menu-teh-jumbo.png,
                       card-menu-teh-susu.png, card-menu-teh-milo.png, card-menu-teh-lemon.png
Gerai (Beranda+Gerai): card-gerai-sunter.png, card-gerai-gampol.png, card-gerai-biru.png,
                       card-gerai-bengkel.png, card-gerai-pasar.png, card-gerai-18.png,
                       card-gerai-walang.png, card-gerai-bugis.png, card-gerai-alur-laut.png
