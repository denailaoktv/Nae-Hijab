## 🧕Nae Hijab 

## 1. Ringkasan Bisnis

| | |
|---|---|
| Nama bisnis | **Nae Hijab** |
| Jenis usaha | Fesyen muslimah — hijab harian (pashmina, instan, segiempat, aksesoris) |
| Berdiri | 2026 (fiktif, disusun untuk keperluan tugas) |
| Lokasi gudang | Bandung, Jawa Barat |
| Kanal utama | Website e-commerce mandiri + Instagram + WhatsApp Business |

### Deskripsi Bisnis
Nae Hijab adalah brand hijab harian yang berfokus pada tiga hal: bahan yang benar-benar adem untuk iklim tropis, konsistensi warna antar-batch produksi, dan harga yang tetap masuk akal untuk dipakai setiap hari — bukan sekadar dibeli untuk sekali unggah di media sosial.

### Value Proposition
> "Anggun bukan soal mengikuti tren, tapi menemukan versimu — dengan hijab yang adem, awet warnanya, dan harganya bersahabat."

Tiga pilar value proposition:
1. **Kurasi bahan** — setiap batch voal dan pashmina diuji jatuh kain dan daya serap sebelum naik ke katalog.
2. **Harga transparan** — satu harga untuk semua varian warna dalam kategori yang sama, tanpa biaya tersembunyi.
3. **Pengiriman cepat** — pesanan sebelum pukul 15.00 diproses hari yang sama dari gudang Bandung.

---

## 2. Target Market & Segmentasi Pelanggan

**Target utama:** perempuan berusia 18–30 tahun, tinggal di kota tier 1–2 di Indonesia, aktif berbelanja daring, dan mencari hijab harian yang praktis dipakai untuk kuliah maupun bekerja.

Segmentasi:
- **Mahasiswi & fresh graduate (18–24 tahun)** — sensitif harga, mencari hijab instan dan voal dasar untuk penggunaan rutin.
- **Pekerja muda (24–30 tahun)** — mengutamakan kualitas bahan dan tampilan rapi untuk kebutuhan kantor, bersedia membayar lebih untuk pashmina premium.
- **Reseller/dropshipper skala kecil** — membutuhkan stok konsisten, harga grosir, dan foto produk siap pakai.

## 3. Analisis Pasar Singkat & Kompetitor

Industri fesyen muslim Indonesia terus tumbuh seiring populasi muslim yang besar dan tren modest fashion yang meluas ke pasar umum, didorong oleh adopsi belanja daring dan media sosial sebagai etalase utama.

Kompetitor tidak langsung yang menjadi acuan pasar: **Buttonscarves** (segmen premium, storytelling kuat), **Elzatta** (jaringan toko luas, loyal ke pelanggan lama), dan **Heaven Lights** (harga menengah, koleksi warm-tone konsisten). Nirmala Hijab memosisikan diri di celah menengah: kualitas mendekati brand premium namun harga setara brand harian, dengan kekuatan pada transparansi harga dan kecepatan kirim.

Diferensiasi Nae Hijab:
- Fokus kategori ramping (5 kategori) agar kualitas tiap kategori terjaga, dibanding kompetitor yang melebarkan lini produk secara agresif.
- Konsistensi satu harga per kategori memudahkan keputusan beli tanpa membandingkan puluhan varian harga.

## 4. Strategi Manajemen Produk & Katalog

Katalog dibagi menjadi 5 kategori dengan peran masing-masing:

| Kategori | Peran dalam katalog | Rentang harga |
|---|---|---|
| Pashmina | Produk margin lebih tinggi, target pekerja muda | Rp 70.000 – 80.000 |
| Instan | Produk kenyamanan/kepraktisan, repeat purchase tinggi | Rp 20.000 – 30.000 |
| Segiempat | Produk gaya/motif, mendorong pembelian impulsif | Rp 45.000 – 60.000 |
| Aksesoris | Produk pelengkap, menaikkan nilai keranjang (upsell) | Rp 25.000 – 30.000 |

Setiap produk pada katalog memuat: nama, kategori, warna, harga, deskripsi manfaat (bukan sekadar spesifikasi), bahan, ukuran, dan foto. Deskripsi ditulis dari sudut pandang manfaat pemakaian (mis. "tidak menerawang", "tidak mengikat kepala") agar membantu keputusan beli, bukan hanya menjelaskan cara produk dibuat.

Rencana pengembangan katalog: menambah varian ukuran pada pashmina, dan paket bundling voal + ciput sebagai produk hemat.

## 5. Model Bisnis & Revenue Stream

- **Direct-to-consumer (D2C)** melalui website sendiri — margin lebih besar dibanding menjual lewat marketplace pihak ketiga.
- **Reseller/dropship program** — harga grosir mulai pembelian 12 pcs campur, revenue stream tambahan dengan volume tinggi, margin per unit lebih tipis.
- **Bundling & cross-sell** — aksesoris (ciput, bros) dipasang sebagai penawaran tambahan saat checkout untuk menaikkan rata-rata nilai transaksi (AOV).

## 6. Strategi Harga, Promosi, dan Diskon

**Strategi harga:** cost-plus pricing dengan margin disesuaikan per kategori (margin lebih tipis di kategori Voal sebagai penarik trafik, margin lebih tebal di Pashmina).

**Promosi:**
- Diskon peluncuran 10% untuk pembeli baru (kode `NAE10`).
- Gratis ongkir untuk pembelian minimal Rp 150.000.
- Promo bundling "Beli 2 Voal, Gratis 1 Ciput" pada momen tertentu (hari besar, akhir bulan gajian).

**Diskon reseller:** potongan harga bertingkat berdasarkan jumlah kodi/lusin yang dibeli, dievaluasi tiap kuartal berdasarkan data penjualan.

## 7. Proses Checkout & Simulasi Payment Gateway

Alur checkout pada prototipe ini:
1. Pengguna menambahkan produk ke keranjang (tersimpan di `localStorage`, bertahan meski browser ditutup).
2. Pengguna membuka keranjang, meninjau kuantitas dan total, lalu menekan **Lanjut ke Checkout**.
3. Formulir checkout meminta data pengiriman (nama, email, HP, alamat, kota, kode pos) dengan validasi langsung di sisi klien.
4. Pengguna memilih metode pembayaran simulasi: **Transfer Virtual Account**, **E-Wallet (QRIS)**, atau **Kartu Kredit/Debit** — merepresentasikan integrasi nyata dengan **Midtrans Snap/Sandbox**.
5. Setelah submit dan validasi lolos, sistem membuat kode pesanan acak dan menampilkan halaman sukses. Tidak ada transaksi uang sungguhan; ini adalah simulasi untuk keperluan akademik.

**Rencana integrasi nyata (pasca-akademik):** menghubungkan endpoint Midtrans Snap API di sisi backend, memindahkan validasi harga ke server (mencegah manipulasi harga dari sisi klien), dan mencatat status pembayaran melalui webhook notifikasi Midtrans.

## 8. Keamanan Transaksi (Rencana Produksi)

Karena prototipe ini murni front-end, seluruh "pembayaran" hanya simulasi. Untuk versi produksi, rencana keamanannya:
- Migrasi ke HTTPS penuh dan penyimpanan kunci API Midtrans di environment variable sisi server, tidak pernah di kode klien.
- Validasi ulang harga dan stok di server sebelum transaksi dibuat (server-side price recalculation).
- Tokenisasi data kartu (mengikuti standar PCI-DSS) sepenuhnya diserahkan ke payment gateway, situs tidak pernah menyimpan nomor kartu.
- Rate limiting pada endpoint checkout untuk mencegah percobaan transaksi otomatis (bot).

## 9. Rencana SEO & Pemeliharaan

**SEO:**
- Meta title & description unik per halaman (sudah diterapkan pada `<head>` index.html).
- Struktur heading (H1 hero, H2 per seksi) yang konsisten untuk keterbacaan mesin pencari.
- Alt text deskriptif pada setiap gambar produk (nama produk + warna).
- Rencana lanjutan: sitemap.xml, schema markup `Product` untuk rich snippet harga di hasil pencarian.

**Pemeliharaan:**
- Update katalog dan stok mingguan.
- Audit tautan rusak dan kecepatan muat halaman (Lighthouse) setiap bulan.
- Backup data pesanan (saat backend nyata sudah berjalan) harian.
