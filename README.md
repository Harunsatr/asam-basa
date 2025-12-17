# 🧪 Platform Pembelajaran Asam & Basa Interaktif

Platform pembelajaran web interaktif untuk memahami konsep asam, basa, dan pH scale dengan visualisasi yang menarik dan aktivitas interaktif.

## ✨ Fitur

- **🏠 Beranda**: Halaman sambutan dengan navigasi lengkap
- **📚 Materi Konsep**: Penjelasan lengkap tentang asam, basa, dan pH scale
- **🧪 Laboratorium Virtual**: Simulasi interaktif percobaan kimia
- **🧩 Aktivitas Edukatif**: Berbagai kegiatan pembelajaran praktis
- **📖 Cerita Edukatif**: Narasi menarik untuk memahami konsep
- **📝 Kuis Interaktif**: Evaluasi pemahaman dengan feedback langsung
- **👨‍🏫 Dashboard Guru**: Analisis hasil pembelajaran siswa
- **✨ AI Editor**: Asisten AI berbasis Google Gemini untuk membantu belajar

## 🚀 Setup Lokal

### Prerequisites
- **Node.js** 18+ (download dari [nodejs.org](https://nodejs.org))
- **npm** atau **yarn**
- **Google Gemini API Key** (dapatkan di https://aistudio.google.com/app/apikeys)

### Instalasi & Menjalankan

1. **Clone repository atau download project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   ```bash
   # Buat file .env di root directory
   cp .env.example .env
   
   # Edit .env dan tambahkan Gemini API Key
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   
   Akses di: http://localhost:3000

5. **Build untuk production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment ke Netlify

### Metode 1: Menggunakan Netlify Web Interface

1. **Push project ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourname/yourrepo.git
   git push -u origin main
   ```

2. **Buka [Netlify](https://app.netlify.com)**
   - Klik "Add new site" → "Import an existing project"
   - Pilih GitHub dan authorize
   - Pilih repository Anda

3. **Konfigurasi build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

4. **Set environment variables di Netlify:**
   - Buka Site Settings → Environment
   - Tambahkan variable:
     - Key: `GEMINI_API_KEY`
     - Value: `your_actual_api_key`

5. **Deploy!** Netlify otomatis build dan deploy

### Metode 2: Menggunakan Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login ke Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## 📋 Struktur Project

```
basaabaru/
├── components/           # React components
│   ├── Navigation.tsx    # Bottom navigation bar
│   ├── PageHome.tsx      # Halaman beranda
│   ├── PageConcepts.tsx  # Materi konsep
│   ├── PageVirtualLab.tsx # Lab virtual
│   ├── PageActivity.tsx   # Aktivitas
│   ├── PageStory.tsx      # Cerita
│   ├── PageQuiz.tsx       # Kuis
│   ├── PageTeacher.tsx    # Dashboard guru
│   ├── AiEditor.tsx       # AI Editor
│   └── BackgroundParticles.tsx # Animasi background
├── services/
│   └── geminiService.ts  # Google Gemini API integration
├── styles.css            # Tailwind CSS dan custom styles
├── App.tsx               # Root component
├── types.ts              # TypeScript interfaces
├── index.tsx             # Entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS config
├── postcss.config.js     # PostCSS config
├── netlify.toml          # Netlify configuration
└── package.json          # Dependencies
```

## 🛠️ Technologies Used

- **React 19** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **D3.js** - Data visualization
- **Google Gemini API** - AI assistant
- **Netlify** - Hosting & deployment

## 📱 Responsive Design

Website fully responsive untuk:
- 📱 Mobile (320px and up)
- 📱 Tablet (768px and up)
- 💻 Desktop (1024px and up)
- 🖥️ Large screens (1280px and up)

## ⚙️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run type-check # Check TypeScript errors
```

## 🔐 Environment Variables

Diperlukan untuk production:
```env
GEMINI_API_KEY=your_google_gemini_api_key
```

## 📝 Catatan Penting

- API Key Gemini hanya digunakan di server-side untuk keamanan
- Pastikan API Key tidak di-commit ke repository (sudah ada di .gitignore)
- Untuk development, gunakan .env.local
- Untuk Netlify, set environment variable di UI

## 🎓 Konsep yang Diajarkan

- ✓ Asam Kuat & Asam Lemah
- ✓ Basa Kuat & Basa Lemah
- ✓ Skala pH (0-14)
- ✓ Netralitas
- ✓ Reaksi Asam-Basa
- ✓ Indikator & Perubahan Warna

## 📞 Support

Untuk pertanyaan atau issue:
1. Cek documentation
2. Buka GitHub issues
3. Hubungi developer

## 📄 License

Lihat file LICENSE untuk informasi lisensi.

---

**Happy Learning! 🎉**
