/* Mak-Gambreng — daftar aset kartu (satu-satunya tempat path gambar kartu).
   Ganti gambar: timpa file di folder assets/cards/ dengan NAMA FILE YANG SAMA.
   Tidak perlu mengubah HTML/CSS/JS. */
const cardAssets = {
  /* Beranda — kategori produk */
  produkTehSolo:    "assets/cards/card-produk-teh-solo.png",
  cappuccinoSquash: "assets/cards/card-cappuccino-squash.png",
  minumanViral:     "assets/cards/card-minuman-viral.png",
  /* Menu (Beranda & Produk) */
  menuTehEkstra:    "assets/cards/card-menu-teh-ekstra.png",
  menuTehSolo:      "assets/cards/card-menu-teh-solo.png",
  menuTehJumbo:     "assets/cards/card-menu-teh-jumbo.png",
  menuTehSusu:      "assets/cards/card-menu-teh-susu.png",
  menuTehMilo:      "assets/cards/card-menu-teh-milo.png",
  menuTehLemon:     "assets/cards/card-menu-teh-lemon.png",
  /* Gerai (Beranda & Temukan Gerai) */
  geraiSunter:      "assets/cards/card-gerai-sunter.png",
  geraiGampol:      "assets/cards/card-gerai-gampol.png",
  geraiBiru:        "assets/cards/card-gerai-biru.png",
  geraiBengkel:     "assets/cards/card-gerai-bengkel.png",
  geraiPasar:       "assets/cards/card-gerai-pasar.png",
  gerai18:          "assets/cards/card-gerai-18.png",
  geraiWalang:      "assets/cards/card-gerai-walang.png",
  geraiBugis:       "assets/cards/card-gerai-bugis.png",
  geraiAlurLaut:    "assets/cards/card-gerai-alur-laut.png"
};

/* Opsional: titik fokus gambar (object-position), mis. { menuTehSolo: "50% 30%" }.
   Kosong = tengah. */
const cardFocus = {};

/* Opsional: isi mis. "2" bila ingin memaksa browser memuat ulang semua gambar kartu. */
const cardAssetVersion = "";
