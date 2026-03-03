function App() {
  return (
    <>
      {/* Skip Navigation - Erisilebilik icin */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      {/* ===== HEADER ===== */}
      <header>
        <span className="site-title">Emir Bulut</span>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== MAIN ===== */}
      <main id="main-content">

        {/* --- Hakkimda --- */}
        <section id="hakkimda">
          <h1>Emir Bulut - Kisisel Portfolyo</h1>
          <div className="about-content">
            <figure>
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=EB&backgroundColor=1e3a8a&textColor=ffffff"
                alt="Emir Bulut profil gorseli"
              />
              <figcaption>Emir Bulut</figcaption>
            </figure>
            <div className="about-text">
              <h2>Hakkimda</h2>
              <p>
                Merhaba! Ben Emir Bulut. Web Tasarimi ve Programlama dersi kapsaminda
                modern web teknolojilerini ogreniyor ve uyguluyorum. React, TypeScript
                ve modern CSS ile kullanici dostu, erisilebilir web uygulamalari
                gelistirmeye ilgi duyuyorum.
              </p>
              <p>
                Suan universite ogrencisiyim ve yazilim gelistirme alaninda kendimi
                surekli gelistiriyorum. Amacim, kullanicilara deger katan projeler
                uretmek ve profesyonel bir yazilim gelistirici olmaktir.
              </p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Projelerim --- */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">

            <article className="project-card">
              <img
                className="card-image"
                src="https://api.dicebear.com/7.x/shapes/svg?seed=ecommerce&backgroundColor=e5e7eb"
                alt="E-Ticaret sitesi anasayfa ekran goruntusu"
              />
              <h3>E-Ticaret Sitesi</h3>
              <p>
                React ve Node.js ile gelistirilmis tam kapsamli bir e-ticaret
                uygulamasi. Kullanici girisi, urun listeleme ve sepet ozellikleri icerir.
              </p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                className="card-image"
                src="https://api.dicebear.com/7.x/shapes/svg?seed=blog&backgroundColor=e5e7eb"
                alt="Blog uygulamasi yazi listesi gorunumu"
              />
              <h3>Blog Uygulamasi</h3>
              <p>
                Kisisel blog platformu. Markdown destekli yazi editoru ve
                kategori filtreleme ozellikleri sunmaktadir.
              </p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                className="card-image"
                src="https://api.dicebear.com/7.x/shapes/svg?seed=weather&backgroundColor=e5e7eb"
                alt="Hava durumu uygulamasi arayuzu"
              />
              <h3>Hava Durumu</h3>
              <p>
                OpenWeather API ile anlik hava durumu bilgisi sunan web uygulamasi.
                Konum bazli arama ve 5 gunluk tahmin ozellikleri bulunur.
              </p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
                <li>CSS3</li>
              </ul>
            </article>

          </div>
        </section>

        {/* --- Iletisim --- */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="Adinizi ve soyadinizi girin"
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ornek@mail.com"
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  placeholder="Mesajinizi buraya yazin (en az 10 karakter)"
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer>
        <p>&copy; 2025 Emir Bulut. Tum haklari saklidir.</p>
        <p>
          <a href="https://github.com/EmirCartman" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
