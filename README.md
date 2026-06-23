# Najla Digital Scrapbook — Premium Web Experience

Sebuah platform scrapbook digital premium, romantis, dan sepenuhnya interaktif khusus dibuat untuk sosok bernama **Najla**. Arsitektur ini dirancang secara khusus menggabungkan nuansa jurnal fisik Pinterest, estetika Glassmorphism iOS modern milik Apple, dan transisi animasi berkinerja tinggi (60 FPS).

---

## 🚀 Fitur Utama & Interaksi Premium

1. **Sistem Pengunci Gerbang Matematika (iOS Spring Physics)**
   * Mengamankan konten utama dengan validasi matematika dasar yang diacak setiap penyegaran halaman. Memberikan animasi tolak (*shake*) atau animasi berhasil yang mulus dengan hamburan confetti.
2. **Pinterest Masonry Grid (Aspek Rasio 3:4 Kuat)**
   * Menampilkan koleksi 8 foto secara responsif tanpa distorsi, tanpa *stretching*, terkunci ketat menggunakan standardisasi portrait rasio 3:4.
3. **Kartu Hadiah Interaktif 3D**
   * Menggunakan teknologi CSS 3D Space perspective yang akan terbalik (*flip*) dengan kehalusan tinggi saat disentuh.
4. **Surat Cinta Digital Eksklusif**
   * Amplop interaktif yang mekanismenya mensimulasikan amplop fisik terbuka, lalu secarik surat keluar dan otomatis mengetik teks batin secara *real-time* (*Typewriter Engine*).
5. **Papan Harapan Berbasis LocalStorage**
   * Formulir penulisan doa dan harapan yang datanya disimpan langsung ke dalam memori peramban (*client-side local memory*). Harapan tidak akan hilang walaupun tab ditutup.
6. **Perubahan Atmosfer Astronomis (Tema Penutup Malam)**
   * Transisi otomatis warna latar belakang berubah menjadi langit malam pekat penuh bintang bercahaya saat pengguna menggulir halaman hingga ke bagian akhir penutup.
7. **Pustaka Pemutar Musik Glassmorphism Fixed**
   * Dilengkapi kendali volume presisi, album berputar (*rotating vinyl disc*), dan visualisator bar audio CSS adaptif.

---

## 🛠️ Panduan Kustomisasi Pengguna

Aplikasi ini bersifat **siap pakai**. Anda tidak perlu memahami pemograman web yang rumit. Anda hanya perlu menyiapkan file aset personal Anda dengan ketentuan nama berkas persis sebagai berikut:

### 1. Mengganti Koleksi Foto
Siapkan 8 foto terbaik Anda bersama Najla, ubah formatnya menjadi portrait (disarankan rasio 3:4) lalu namai ulang menjadi:
* `photo1.jpg`
* `photo2.jpg`
* `photo3.jpg`
* `photo4.jpg`
* `photo5.jpg`
* `photo6.jpg`
* `photo7.jpg`
* `photo8.jpg`

Masukkan kedalam folder induk: **`assets/images/`** (Gantikan file bawaan).

### 2. Mengganti Musik Latar Belakang
Siapkan lagu romantis berformat MP3, ubah nama berkasnya menjadi:
* `lagu.mp3`

Masukkan kedalam folder induk: **`assets/audio/`** (Gantikan file bawaan).

---

## 🌐 Cara Mengunggah & Aktivasi di GitHub Pages

Langkah mudah meluncurkan website ini ke internet secara gratis menggunakan akun GitHub Anda:

1. Buat sebuah repositori baru di profil GitHub Anda (Contoh nama: `untuk-najla`).
2. Unggah seluruh struktur file di atas (`index.html`, `style.css`, `script.js`, `README.md`, `LICENSE`, dan folder `assets/`).
3. Masuk ke tab **Settings** (Pengaturan) di bagian menu atas repositori Anda.
4. Gulir ke bilah menu kiri dan pilih **Pages**.
5. Di bagian **Build and deployment**, ubah Source menjadi **Deploy from a branch**.
6. Pilih branch **`main`** atau **`master`** lalu pilih folder **`/root`**, kemudian klik tombol **Save** (Simpan).
7. Tunggu sekitar 1-2 menit, situs web premium Najla Anda telah resmi mengudara dan link tautan aktif akan tertera di bagian atas menu pengaturan Pages tersebut.

---

## 💻 Cara Menjalankan Secara Lokal (Offline)
Karena kode ini ditulis murni menggunakan Vanilla HTML5, CSS3 modern, dan ES6+ JavaScript tanpa dependensi pihak ketiga atau framework yang berat, Anda dapat menjalankannya langsung di komputer Anda dengan cara:
* Klik ganda pada berkas `index.html` menggunakan peramban favorit Anda (Chrome, Safari, Edge, Firefox).
