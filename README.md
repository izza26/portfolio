# Portfolio Website — Arhamiz Fegianti

Website portofolio pribadi yang menampilkan proyek-proyek saya di bidang AI/OCR, Web Development, Mobile, dan Database.

Dibuat dengan **React 18 + Vite 6**. Ringan, tanpa backend, dan bisa di-deploy gratis.

## 🚀 Menjalankan di Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## 📦 Build Produksi

```bash
npm run build
npm run preview
```

Hasil build ada di folder `dist/`.

## ☁️ Deploy Gratis

### Opsi 1 — Vercel (paling gampang) ⭐

1. Push folder ini ke GitHub (repo baru, mis. `izza26/portfolio`).
2. Buka [vercel.com](https://vercel.com) → login pakai akun GitHub.
3. Klik **Add New → Project** → pilih repo `portfolio`.
4. Vercel otomatis mendeteksi Vite. Klik **Deploy**.
5. Selesai — dapat URL gratis seperti `https://portfolio-izza.vercel.app`.

> Setiap kali kamu `git push`, Vercel otomatis build ulang.

### Opsi 2 — aaPanel / VPS sendiri

```bash
npm install
npm run build
# upload isi folder dist/ ke public_html lewat aaPanel
```

Pastikan web server mengarah ke `dist/index.html`.

### Opsi 3 — Netlify / GitHub Pages

Sama seperti Vercel: hubungkan repo, build command `npm run build`, output `dist`.

## ✏️ Mengubah Isi

Semua data (nama, proyek, keahlian, link) ada di satu file:

```
src/data/projects.js
```

- `profile` → nama, email, GitHub, deskripsi
- `projects` → daftar proyek + link repo
- `keahlian` → daftar teknologi

Ubah di situ, simpan, dan website otomatis ikut berubah.

## 🗂️ Struktur

```
website/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    └── data/
        └── projects.js
```

---

© Arhamiz Fegianti — [github.com/izza26](https://github.com/izza26)
