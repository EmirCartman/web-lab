# CSS Kararlari

## 1. Breakpoint Secimi
- **640px (tablet)** ve **1024px (masaustu)** breakpoint'lerini sectim. Bu degerler icerige gore belirlendi: 640px'de navigasyon yatay hale geciyor ve "Hakkimda" bolumu yan yana diziliyor. 1024px'de icerik genisligi sinirlanarak okunabilirlik artiriliyor ve proje kartlari 3 sutuna geciriyor.
- Mobile-first yaklasim uyguladim: Varsayilan stiller mobil icin yazildi, buyuk ekranlar icin `min-width` media query'leri ile genisletildi.

## 2. Layout Tercihleri
- **Header icin Flexbox:** Navigasyon cubugu tek boyutlu bir duzenleme gerektiriyor (logo sol, menu sag). Flexbox bu is icin ideal.
- **Proje kartlari icin CSS Grid:** Kartlar iki boyutlu bir izgara duzeni olusturuyor. `repeat(auto-fit, minmax(280px, 1fr))` ile media query yazmadan responsive grid elde ettim.
- **auto-fit** kullandim cunku bos sutunlarin daralmasini ve mevcut kartlarin genislemesini istedim.

## 3. Design Tokens
- **Renk paleti:** Koyu mavi (#1E3A8A) birincil renk olarak secildi; profesyonel ve guvenilir bir izlenim veriyor. Vurgu rengi olarak mor (#7C3AED) eklendi.
- **Spacing skalasi:** 4px tabani ile carpanlar (4, 8, 16, 24, 32, 48, 64px) kullanildi. Bu tutarli bosluk sistemi gorsel uyum sagliyor.
- **Fluid typography:** `clamp()` fonksiyonu ile minimum ve maksimum font boyutlari belirlendi. `rem + vw` karisimi kullanarak hem ekran genisligine uyum hem de zoom erisilebirligi saglandigi.

## 4. Responsive Stratejiler
- **Mobile-first:** Tum stiller once dar ekran icin yazildi. `min-width` query'leri ile tablet ve masaustu icin ek kurallar eklendi.
- **Degisen elemanlar:** Header mobilde dikey, tablette yatay. About bolumu mobilde tek sutun, tablette yan yana. Proje kartlari mobilde tek sutun, tablette 2, masaustunde 3 sutun. Gonder butonu mobilde tam genislik, tablette otomatik genislik.
- **Gorsel boyutlari:** `max-width: 100%` ve `object-fit: cover` ile gorseller her ekranda orantili kaliyor.
