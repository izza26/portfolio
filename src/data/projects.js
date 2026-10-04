// Data project portfolio — Arhamiz Fegianti (izza26)
// Semua link mengarah ke repository GitHub publik.

export const profile = {
  nama: 'Arhamiz Fegianti',
  panggilan: 'Izza',
  peran: 'Mahasiswa Sistem Informasi',
  kampus: 'Universitas Trunojoyo Madura',
  nim: '230441100180',
  lokasi: 'Sidoarjo, Jawa Timur, Indonesia',
  tagline: 'Membangun solusi digital dari AI, Web, Mobile, sampai Database.',
  deskripsi:
    'Mahasiswa Sistem Informasi yang tertarik pada pengembangan aplikasi end-to-end. ' +
    'Terbiasa mengerjakan proyek mulai dari Computer Vision & AI (OCR, RAG), ' +
    'pengembangan Web (Laravel, PHP), aplikasi Mobile (Flutter), sampai perancangan Basis Data (MySQL).',
  email: 'izzafegianti@gmail.com',
  whatsapp: '085607198136', // format lokal
  waLink: 'https://wa.me/6285607198136', // format internasional untuk link
  github: 'https://github.com/izza26',
  linkedin: '', // isi kalau ada
}

export const keahlian = [
  {
    kategori: 'AI & Computer Vision',
    items: ['Python', 'FastAPI', 'YOLOv8', 'Tesseract OCR', 'OpenCV', 'LangChain', 'ChromaDB', 'Ollama'],
  },
  {
    kategori: 'Web Development',
    items: ['Laravel 12', 'PHP 8.2', 'Blade', 'PostgreSQL', 'MySQL', 'Supabase', 'Gemini API', 'REST API'],
  },
  {
    kategori: 'Mobile & Desktop',
    items: ['Flutter', 'Dart', 'Java', 'Java Swing', 'NetBeans', 'JDBC'],
  },
  {
    kategori: 'Basis Data & Tools',
    items: ['MySQL', 'PostgreSQL', 'ERD Design', 'Git & GitHub', 'Vercel', 'Docker (dasar)'],
  },
]

export const projects = [
  {
    id: 'ai-ktp-ocr-alpr',
    judul: 'AI KTP OCR & ALPR',
    tipe: 'AI / Computer Vision',
    tahun: '2025',
    ringkas:
      'Sistem manajemen tamu dengan OCR KTP, pengenalan plat nomor (ALPR), enkripsi NIK AES-256, chatbot, dan integrasi CCTV.',
    deskripsi:
      'Aplikasi yang menggabungkan Computer Vision dan Web untuk pencatatan tamu otomatis. ' +
      'KTP di-scan dan datanya diekstrak dengan OCR, plat nomor kendaraan dikenali dengan YOLOv8, ' +
      'NIK tamu diamankan dengan enkripsi AES-256, dan tersedia chatbot berbasis AI untuk membantu petugas.',
    fitur: [
      'OCR KTP otomatis (Tesseract + OpenCV)',
      'Deteksi plat nomor (ALPR) dengan YOLOv8',
      'Enkripsi NIK dengan AES-256',
      'Chatbot asisten berbasis AI',
      'Integrasi kamera CCTV',
      'Dashboard manajemen tamu',
    ],
    tech: ['Python', 'FastAPI', 'YOLOv8', 'Tesseract', 'OpenCV', 'AES-256'],
    screenshots: [
      // Taruh file di public/screenshots/ lalu isi path-nya di sini, contoh:/n      // '/screenshots/ktp-1.png',
      // '/screenshots/ktp-2.png',
    ],
    repo: 'https://github.com/izza26/ai-ktp-ocr-alpr',
    utama: true,
  },
  {
    id: 'ai-rag-regulasi-bank',
    judul: 'AI RAG — Regulasi Perbankan',
    tipe: 'AI / NLP',
    tahun: '2025',
    ringkas:
      'Chatbot berbasis Retrieval-Augmented Generation (RAG) untuk tanya-jawab dokumen regulasi perbankan.',
    deskripsi:
      'Sistem tanya-jawab dokumen yang memakai pendekatan RAG: dokumen regulasi dipecah menjadi chunk, ' +
      'diubah jadi embedding, disimpan di ChromaDB, lalu diambil kembali sebagai konteks untuk model LLM lokal (Ollama). ' +
      'Hasilnya jawaban yang relevan dan berbasis sumber dokumen.',
    fitur: [
      'Pipeline RAG lengkap (load → split → embed → retrieve)',
      'Vector database ChromaDB',
      'LLM lokal via Ollama (llama3.2)',
      'Antarmuka Streamlit',
      'Login sederhana untuk demo',
      'Jawaban berbasis dokumen (grounded)',
    ],
    tech: ['Python', 'LangChain', 'ChromaDB', 'Streamlit', 'Ollama'],
    screenshots: [
      // Taruh file di public/screenshots/ lalu isi path-nya di sini, contoh:/n      // '/screenshots/rag-1.png',
      // '/screenshots/rag-2.png',
    ],
    repo: 'https://github.com/izza26/ai-rag-regulasi-bank',
    utama: true,
  },
  {
    id: 'web-geotrax-penilaian-sdm',
    judul: 'Geotrax — Penilaian Kompetensi SDM',
    tipe: 'Web Development',
    tahun: '2025',
    ringkas:
      'Aplikasi web berbasis Laravel untuk penilaian kompetensi SDM dengan skoring SKKNI dan integrasi AI.',
    deskripsi:
      'Aplikasi penilaian kompetensi karyawan dengan alur asesmen, perhitungan skor sesuai standar SKKNI, ' +
      'manajemen pengguna multi-role, serta integrasi Google Gemini API untuk analisis. ' +
      'Dibangun dengan Laravel 12, PostgreSQL (Supabase), dan penyimpanan file di S3-compatible storage.',
    fitur: [
      'Penilaian & skoring kompetensi sesuai SKKNI',
      'Manajemen pengguna multi-role',
      'Integrasi Gemini API untuk analisis',
      'Penyimpanan file di Supabase S3',
      'Dashboard pimpinan & admin',
      'Database PostgreSQL (Supabase)',
    ],
    tech: ['Laravel 12', 'PHP 8.2', 'PostgreSQL', 'Supabase', 'Gemini API'],
    screenshots: [
      // Taruh file di public/screenshots/ lalu isi path-nya di sini, contoh:/n      // '/screenshots/geotrax-1.png',
      // '/screenshots/geotrax-2.png',
    ],
    repo: 'https://github.com/izza26/web-geotrax-penilaian-sdm',
    utama: true,
  },
  {
    id: 'praktikum-flutter-pemrograman-bergerak',
    judul: 'Praktikum Flutter — Pemrograman Bergerak',
    tipe: 'Mobile Development',
    tahun: '2025',
    ringkas:
      'Kumpulan modul praktikum pemrograman mobile dengan Flutter/Dart, dari dasar sampai tugas ujian.',
    deskripsi:
      'Repositori berisi seluruh modul praktikum mata kuliah Pemrograman Bergerak: ' +
      'mulai dari dasar Dart, widget, layout, navigasi, state management, sampai tugas ujian. ' +
      'Menunjukkan kemampuan membangun aplikasi mobile lintas platform dengan Flutter.',
    fitur: [
      'Modul 1–6 praktikum lengkap',
      'Tugas ujian Dart (4 soal)',
      'Contoh penggunaan widget & layout',
      'Navigasi antar halaman',
      'Manajemen state dasar',
      'Struktur proyek Flutter rapi',
    ],
    tech: ['Flutter', 'Dart', 'Android'],
    screenshots: [
      // Taruh file di public/screenshots/ lalu isi path-nya di sini, contoh:/n      // '/screenshots/flutter-1.png',
      // '/screenshots/flutter-2.png',
    ],
    repo: 'https://github.com/izza26/praktikum-flutter-pemrograman-bergerak',
    utama: false,
  },
  {
    id: 'pemrograman-visual-3B-2024',
    judul: 'Pemrograman Visual — Java Desktop',
    tipe: 'Desktop Development',
    tahun: '2024',
    ringkas:
      'Kumpulan praktikum Java Swing: game Tebak Angka serta aplikasi Karyawan/Proyek/Transaksi dengan JDBC.',
    deskripsi:
      'Repositori praktikum Pemrograman Visual yang mencakup aplikasi desktop berbasis Java Swing & NetBeans. ' +
      'Poin utama: game Tebak Angka sebagai latihan logika, serta sistem data Karyawan, Proyek, dan Transaksi ' +
      'yang terhubung ke database melalui JDBC.',
    fitur: [
      'Modul 1–6 praktikum Java',
      'Game Tebak Angka (logika & GUI)',
      'Aplikasi Karyawan / Proyek / Transaksi',
      'Koneksi database via JDBC',
      'GUI dengan Java Swing',
      'Proyek NetBeans rapi',
    ],
    tech: ['Java', 'Java Swing', 'NetBeans', 'JDBC', 'MySQL'],
    screenshots: [
      // Taruh file di public/screenshots/ lalu isi path-nya di sini, contoh:/n      // '/screenshots/java-1.png',
      // '/screenshots/java-2.png',
    ],
    repo: 'https://github.com/izza26/pemrograman-visual-3B-2024',
    utama: false,
  },
  {
    id: 'praktikum-smbd-mysql',
    judul: 'Praktikum SMBD — Sistem Manajemen Basis Data',
    tipe: 'Database',
    tahun: '2025',
    ringkas:
      'Perancangan basis data relasional: skema akademik prodi dan sistem fast food, lengkap dengan ERD.',
    deskripsi:
      'Repositori praktikum Sistem Manajemen Basis Data berisi skema dan query SQL ' +
      'untuk dua studi kasus: sistem akademik program studi (akademik_prodi) dan sistem fast food (db_fastfood). ' +
      'Fokus pada perancangan tabel, relasi, constraint, dan query.',
    fitur: [
      'Skema akademik prodi',
      'Skema sistem fast food',
      'Perancangan ERD',
      'Query SQL relasional',
      'Constraint & relasi antar tabel',
      'Dokumentasi struktur database',
    ],
    tech: ['MySQL', 'SQL', 'ERD'],
    screenshots: [
      // Taruh file di public/screenshots/ lalu isi path-nya di sini, contoh:/n      // '/screenshots/smbd-1.png',
      // '/screenshots/smbd-2.png',
    ],
    repo: 'https://github.com/izza26/praktikum-smbd-mysql',
    utama: false,
  },
]
