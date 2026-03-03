# Web LAB-1 - Hello Project

## Hakkinda
Bu proje, Web Tasarimi ve Programlama dersi LAB-1, LAB-2 ve LAB-3 kapsaminda
Vite + React + TypeScript kullanilarak olusturulmus kisisel portfolyo sayfasidir.

Proje semantik HTML5, erisilebilirlik (a11y) ilkeleri ve modern responsive CSS
teknikleri (Flexbox, Grid, mobile-first) kullanilarak gelistirilmistir.

## Gelistirici
- **Ad Soyad:** Emir Bulut
- **GitHub:** [EmirCartman](https://github.com/EmirCartman)

## Kullanilan Teknolojiler
- React 18
- TypeScript
- Vite
- Semantik HTML5
- CSS3 (Flexbox, Grid, Custom Properties, Fluid Typography)

## Kurulum
```bash
npm install
```

## Calistirma
```bash
npm run dev
```
Tarayicida http://localhost:5173 adresini ac.

## Proje Yapisi
```
web-lab-hello/
├── public/           # Statik dosyalar
├── src/
│   ├── styles/
│   │   └── tokens.css   # CSS design tokens
│   ├── App.tsx          # Ana portfolyo bileseni
│   ├── App.css          # (bos - stiller index.css'te)
│   ├── index.css        # Tum stiller (responsive)
│   └── main.tsx         # Uygulama giris noktasi
├── index.html           # HTML giris dosyasi (lang="tr")
├── package.json         # Proje bagimliliklari
├── tsconfig.json        # TypeScript ayarlari
├── vite.config.ts       # Vite ayarlari
├── CSS-KARARLARI.md     # CSS tasarim kararlari dokumani
└── README.md            # Bu dosya
```

## Ozellikler
- Semantik HTML5 yapisi (header, nav, main, section, article, footer)
- Erisilebilirlik (a11y): ARIA etiketleri, skip link, heading hiyerarsisi, alt metinler
- Responsive tasarim: 3 breakpoint (mobil, tablet, masaustu)
- CSS Design Tokens ile tutarli tasarim sistemi
- Fluid typography (clamp() fonksiyonu)
- Flexbox navigasyon ve beceri etiketleri
- CSS Grid proje kart duzeni
- Dogrulamali iletisim formu

## Ekran Goruntusu
(ekran goruntusunu buraya ekle)
