import { useState, useEffect } from 'react'
import { profile, projects, keahlian } from './data/projects.js'

const NAV = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'keahlian', label: 'Keahlian' },
  { id: 'kontak', label: 'Kontak' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="brand">
          <span className="brand__mark">A</span>
          <span className="brand__text">{profile.panggilan}</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--small btn--ghost header__cta" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        <button className="burger" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="pill">Tersedia untuk kerja sama</span>
          <h1 className="hero__title">
            Hai, saya <span className="grad">{profile.nama}</span>
          </h1>
          <p className="hero__role">
            {profile.peran} · {profile.kampus}
          </p>
          <p className="hero__desc">{profile.deskripsi}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#proyek">
              Lihat Proyek
            </a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
              Kunjungi GitHub
            </a>
          </div>
          <ul className="hero__meta">
            <li>
              <strong>{projects.length}</strong>
              <span>Proyek</span>
            </li>
            <li>
              <strong>4</strong>
              <span>Bidang</span>
            </li>
            <li>
              <strong>2024–2025</strong>
              <span>Pengalaman</span>
            </li>
          </ul>
        </div>

        <div className="hero__card">
          <div className="codecard">
            <div className="codecard__bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="codecard__file">profil.js</span>
            </div>
            <pre className="codecard__body">
{`const izza = {
  nama: "${profile.nama}",
  peran: "${profile.peran}",
  fokus: [
    "AI & OCR",
    "Web Dev",
    "Mobile",
    "Database"
  ],
  kode: "ngoding → belajar → ulangi"
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tentang() {
  return (
    <section id="tentang" className="section">
      <div className="container">
        <div className="section__head">
          <span className="section__kicker">Tentang</span>
          <h2>Sedikit Cerita</h2>
        </div>
        <div className="about">
          <p>
            Saya <strong>{profile.nama}</strong> ({profile.panggilan}), mahasiswa{' '}
            <strong>{profile.peran}</strong> di <strong>{profile.kampus}</strong>, NIM {profile.nim}.
          </p>
          <p>
            Saya suka membangun hal yang benar-benar bisa dipakai — dari model AI yang mengenali KTP dan plat
            nomor, chatbot yang menjawab dari dokumen, aplikasi web untuk penilaian SDM, aplikasi mobile,
            sampai merancang basis data yang rapi.
          </p>
          <p>
            Selama kuliah saya mengerjakan banyak proyek praktikum dan satu proyek magang. Website ini
            saya buat sebagai ringkasan karya, supaya lebih mudah dilihat oleh HRD atau perusahaan.
          </p>
          <div className="about__badges">
            <span>📍 {profile.lokasi}</span>
            <span>🎓 Sistem Informasi</span>
            <span>💼 Terbuka kerja sama</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p, onOpen }) {
  return (
    <article className={`card ${p.utama ? 'card--featured' : ''}`}>
      {p.utama && <span className="card__ribbon">Andalan</span>}
      <div className="card__top">
        <span className="card__type">{p.tipe}</span>
        <span className="card__year">{p.tahun}</span>
      </div>
      <h3 className="card__title">{p.judul}</h3>
      <p className="card__desc">{p.ringkas}</p>
      <ul className="card__tech">
        {p.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="card__bottom">
        <button className="card__link card__link--btn" onClick={() => onOpen(p)}>
          Detail &amp; Screenshot →
        </button>
        <a className="card__repo" href={p.repo} target="_blank" rel="noreferrer">
          Repo
        </a>
      </div>
    </article>
  )
}

function ProjectModal({ p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!p) return null
  const shots = p.screenshots && p.screenshots.length ? p.screenshots : []

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Tutup">
          ×
        </button>
        <span className="card__type">{p.tipe} · {p.tahun}</span>
        <h3 className="modal__title">{p.judul}</h3>
        <p className="modal__desc">{p.deskripsi}</p>

        <h4 className="modal__sub">Fitur Utama</h4>
        <ul className="modal__features">
          {p.fitur.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h4 className="modal__sub">Teknologi</h4>
        <ul className="card__tech">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <h4 className="modal__sub">Screenshot</h4>
        {shots.length > 0 ? (
          <div className="shots">
            {shots.map((s, i) => (
              <img key={i} src={s} alt={`${p.judul} — tampilan ${i + 1}`} loading="lazy" />
            ))}
          </div>
        ) : (
          <p className="shots__empty">
            Screenshot belum tersedia. (Ganti gambar dengan menaruh file di{' '}
            <code>public/screenshots/</code> lalu isi daftarnya di{' '}
            <code>src/data/projects.js</code>.)
          </p>
        )}

        <div className="modal__actions">
          <a className="btn btn--primary" href={p.repo} target="_blank" rel="noreferrer">
            Buka di GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

function Proyek() {
  const [active, setActive] = useState(null)
  return (
    <section id="proyek" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <span className="section__kicker">Portfolio</span>
          <h2>Proyek Pilihan</h2>
          <p className="section__sub">
            Kumpulan karya yang sudah saya publikasikan di GitHub. Klik kartu untuk melihat detail,
            fitur, dan screenshot tampilannya.
          </p>
        </div>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={setActive} />
          ))}
        </div>
      </div>
      {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function Keahlian() {
  return (
    <section id="keahlian" className="section">
      <div className="container">
        <div className="section__head">
          <span className="section__kicker">Keahlian</span>
          <h2>Teknologi yang Saya Pakai</h2>
        </div>
        <div className="skills">
          {keahlian.map((group) => (
            <div key={group.kategori} className="skills__group">
              <h3>{group.kategori}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Kontak() {
  return (
    <section id="kontak" className="section section--alt">
      <div className="container">
        <div className="cta">
          <h2>Mari Terhubung</h2>
          <p>
            Saya terbuka untuk kerja sama, proyek freelance, atau sekadar berdiskusi tentang teknologi.
            Silakan hubungi saya lewat WhatsApp, email, atau GitHub.
          </p>
          <div className="cta__actions">
            <a className="btn btn--primary" href={profile.waLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              Kirim Email
            </a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
              Profil GitHub
            </a>
          </div>
          <div className="cta__contact">
            <a href={profile.waLink} target="_blank" rel="noreferrer">
              📱 {profile.whatsapp}
            </a>
            <a href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.nama} · Dibuat dengan React + Vite
        </p>
        <a href="#top">Kembali ke atas ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tentang />
        <Proyek />
        <Keahlian />
        <Kontak />
      </main>
      <Footer />
    </>
  )
}
