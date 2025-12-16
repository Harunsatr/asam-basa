# Asam Basa Interaktif

Platform pembelajaran interaktif untuk memahami konsep asam basa, pH, indikator, dan titrasi.

## 🌟 Fitur

- **Materi Pembelajaran**: Pelajari teori asam basa dengan penjelasan mendalam
- **Simulasi pH**: Eksperimen interaktif dengan skala pH dan konsentrasi ion hidrogen
- **Latihan Soal**: Praktik soal dengan feedback langsung
- **Kuis Akhir**: Evaluasi pemahaman dengan sistem penilaian otomatis
- **Responsive Design**: Bekerja sempurna di semua perangkat
- **Interface Interaktif**: UI yang menarik dan mudah digunakan

## 🚀 Teknologi

- **React 18** - JavaScript library untuk UI
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Hooks** - State management

## 📋 Prasyarat

- Node.js 16+ dan npm

## 🔧 Instalasi

1. Clone atau download project
2. Install dependencies:
```bash
npm install
```

## 💻 Pengembangan

Jalankan development server:
```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`

## 🏗️ Build untuk Production

Buat production build:
```bash
npm run build
```

Hasil build tersimpan di folder `dist/`

## 📤 Deployment di Netlify

### Cara Cepat (Recommended)

1. Push project ke GitHub
2. Buka [Netlify](https://app.netlify.com)
3. Klik "New site from Git"
4. Hubungkan GitHub repository
5. Deploy otomatis!

### Via Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Via Drag & Drop

1. Run `npm run build`
2. Buka [Netlify Drop](https://app.netlify.com/drop)
3. Drag folder `dist/` ke area drop zone

## 📖 Struktur Project

```
asam-basa/
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── MateriAsamBasa.jsx
│   │   ├── SimulasiPH.jsx
│   │   ├── LatihanSoal.jsx
│   │   └── KuisAkhir.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
├── package.json
└── README.md
```

## 🎓 Konten Pembelajaran

### 1. Materi Asam Basa
- Definisi asam basa
- Teori Arrhenius, Bronsted-Lowry, Lewis
- Skala pH
- Indikator asam basa
- Titrasi

### 2. Simulasi pH
- Eksperimen dengan slider konsentrasi
- Visualisasi skala pH
- Perhitungan pH real-time

### 3. Latihan Soal
- 5 pertanyaan dengan berbagai tingkat kesulitan
- Feedback dan penjelasan untuk setiap jawaban
- Tracking skor

### 4. Kuis Akhir
- 5 pertanyaan evaluasi
- Timer 5 menit
- Sistem penilaian dengan passing grade 60%
- Analisis hasil lengkap

## 🎨 Desain Responsif

- Mobile-first approach
- Optimal di breakpoint: mobile, tablet, desktop
- Smooth animations dan transitions
- Accessible color scheme

## 🔐 Best Practices

- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Mobile responsive
- ✅ Clean code structure
- ✅ Error handling
- ✅ Progressive enhancement

## 📝 Lisensi

MIT License - Bebas digunakan dan dimodifikasi

## 👨‍💻 Support

Jika ada pertanyaan atau saran, silakan buat issue di repository ini.

---

**Happy Learning!** 🎉
