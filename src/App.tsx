import { useState, useEffect } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import UIKit from './pages/UIKit';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showUIKit, setShowUIKit] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  if (showUIKit) {
    return (
      <div className="relative">
        <Button
          variant="secondary"
          size="sm"
          className="fixed bottom-4 right-4 z-50"
          onClick={() => setShowUIKit(false)}
        >
          Portfolyoya Don
        </Button>
        <UIKit />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana icerige atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      {/* UI Kit Toggle */}
      <button
        onClick={() => setShowUIKit(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-sm font-bold"
      >
        UI Kit
      </button>

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-2xl font-bold text-blue-800 dark:text-blue-400">Emir Bulut</span>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-4">
              <li><a href="#hakkimda" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Hakkimda</a></li>
              <li><a href="#projeler" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projeler</a></li>
              <li><a href="#iletisim" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Iletisim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main id="main-content" className="max-w-6xl mx-auto px-4">

        {/* --- Hakkimda --- */}
        <section id="hakkimda" className="py-20">
          <h1 className="sr-only">Emir Bulut - Kisisel Portfolyo</h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <figure className="shrink-0 group">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=EB&backgroundColor=1e3a8a&textColor=ffffff"
                alt="Emir Bulut profil gorseli"
                className="w-48 h-48 rounded-full object-cover shadow-xl group-hover:scale-105 transition-transform"
              />
              <figcaption className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">Emir Bulut</figcaption>
            </figure>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold dark:text-white">Hakkimda</h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Merhaba! Ben Emir Bulut. Web Tasarimi ve Programlama dersi kapsaminda
                  modern web teknolojilerini ogreniyor ve uyguluyorum. React, TypeScript
                  ve Tailwind CSS ile kullanici dostu, erisilebilir web uygulamalari
                  gelistirmeye ilgi duyuyorum.
                </p>
                <p>
                  Suan universite ogrencisiyim ve yazilim gelistirme alaninda kendimi
                  surekli gelistiriyorum. Amacim, kullanicilara deger katan projeler
                  uretmek ve profesyonel bir yazilim gelistirici olmaktir.
                </p>
              </div>
              <ul className="flex flex-wrap gap-3" role="list" aria-label="Beceri etiketleri">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'].map(skill => (
                  <li key={skill} className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- Projelerim --- */}
        <section id="projeler" className="py-20 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Projelerim</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              variant="elevated"
              title="E-Ticaret Sitesi"
              image="https://api.dicebear.com/7.x/shapes/svg?seed=ecommerce&backgroundColor=1e3a8a"
              imageAlt="E-Ticaret sitesi"
            >
              React ve Node.js ile gelistirilmis tam kapsamli bir e-ticaret uygulamasi.
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">React</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Node.js</span>
              </div>
            </Card>

            <Card
              variant="elevated"
              title="Blog Uygulamasi"
              image="https://api.dicebear.com/7.x/shapes/svg?seed=blog&backgroundColor=2563eb"
            >
              Kisisel blog platformu. Markdown destekli yazi editoru ve kategori filtreleme.
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">TS</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Next.js</span>
              </div>
            </Card>

            <Card
              variant="elevated"
              title="Hava Durumu"
              image="https://api.dicebear.com/7.x/shapes/svg?seed=weather&backgroundColor=3b82f6"
            >
              OpenWeather API ile anlik hava durumu bilgisi sunan web uygulamasi.
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">API</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">CSS3</span>
              </div>
            </Card>
          </div>
        </section>

        {/* --- Iletisim --- */}
        <section id="iletisim" className="py-20 border-t border-gray-100 dark:border-gray-800 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Iletisim</h2>
          <form action="#" method="POST" className="space-y-6" noValidate>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl space-y-4">
              <Input
                id="name"
                label="Ad Soyad"
                placeholder="Adinizi ve soyadinizi girin"
                required
              />
              <Input
                id="email"
                label="E-posta"
                type="email"
                placeholder="ornek@mail.com"
                required
              />
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajiniz
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Mesajinizi buraya yazin..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                ></textarea>
              </div>
              <Button variant="primary" size="lg" className="w-full py-4 text-lg">
                Gonder
              </Button>
            </div>
          </form>
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 border-t border-gray-100 dark:border-gray-800 text-center">
        <p className="text-gray-500 dark:text-gray-400">&copy; 2025 Emir Bulut. Tum haklari saklidir.</p>
        <div className="mt-4">
          <a
            href="https://github.com/EmirCartman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
