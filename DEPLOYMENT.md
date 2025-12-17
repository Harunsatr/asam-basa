# 🚀 Panduan Deployment ke Netlify

Dokumen ini berisi langkah-langkah lengkap untuk deploy website Asam & Basa ke Netlify.

## ✅ Pre-Requisites

1. **Account GitHub** - untuk menyimpan kode
2. **Account Netlify** - untuk hosting (gratis)
3. **Google Gemini API Key** - untuk AI features
4. **Node.js 18+** - untuk development

## 📝 Langkah 1: Persiapan Repository

### 1.1 Setup Git Repository (Jika belum ada)

```bash
# Di folder project
git init
git add .
git commit -m "Initial commit - Asam Basa Learning Platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/basaabaru.git
git push -u origin main
```

### 1.2 Pastikan .env sudah di .gitignore

```bash
# Verifikasi
cat .gitignore | grep ".env"
# Output harus berisi: .env
```

## 🔑 Langkah 2: Setup Google Gemini API Key

### 2.1 Dapatkan API Key

1. Buka https://aistudio.google.com/app/apikeys
2. Login dengan Google Account
3. Klik "Create API Key" atau "Get API Key"
4. Copy API Key yang dihasilkan

### 2.2 Simpan untuk Nanti

Simpan API Key di tempat aman, akan digunakan di Netlify.

## 🌐 Langkah 3: Deploy ke Netlify

### Metode A: Menggunakan Netlify Web Interface (Recommended)

#### 3A.1 Connect GitHub ke Netlify

1. Buka https://app.netlify.com
2. Klik "Add new site" → "Import an existing project"
3. Pilih "GitHub" sebagai git provider
4. Authorize Netlify untuk akses GitHub Anda
5. Pilih repository `basaabaru`

#### 3A.2 Konfigurasi Build Settings

Netlify akan otomatis mendeteksi Vite, tapi kita perlu verifikasi:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `20.x` (set di Build & deploy → Environment)

#### 3A.3 Set Environment Variables

1. Di Netlify dashboard, pergi ke **Site settings** → **Build & deploy** → **Environment**
2. Klik "Edit variables"
3. Tambahkan:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** (paste API Key dari Step 2.1)

```
GEMINI_API_KEY=sk-xxx...xxx
```

4. Click "Save"

#### 3A.4 Deploy

1. Klik "Deploy site" atau automatic deploy akan trigger
2. Tunggu build process selesai (biasanya 2-3 menit)
3. Setelah sukses, buka Live Site

### Metode B: Menggunakan Netlify CLI

Untuk developer yang lebih familiar dengan terminal:

#### 3B.1 Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### 3B.2 Login ke Netlify

```bash
netlify login
```

Browser akan terbuka untuk authentication.

#### 3B.3 Deploy

```bash
# Deploy ke preview (untuk testing)
netlify deploy

# Deploy ke production
netlify deploy --prod
```

#### 3B.4 Set Environment Variables (via CLI)

```bash
netlify env:set GEMINI_API_KEY "your_api_key_here"
```

## ✨ Langkah 4: Verifikasi Deployment

### 4.1 Check Build Status

1. Di Netlify dashboard, buka "Deploys"
2. Lihat status deploy terakhir
3. Jika ada error, buka deploy details untuk melihat logs

### 4.2 Test Website

1. Klik "Live Site" atau copy URL di dashboard
2. Test setiap halaman:
   - ✓ Halaman Beranda
   - ✓ Halaman Materi
   - ✓ Lab Virtual
   - ✓ Aktivitas
   - ✓ Cerita
   - ✓ Kuis
   - ✓ AI Editor (requires API key)

### 4.3 Test Button Clicks

- Pastikan semua button responsif saat diklik
- Test navigation bar di mobile dan desktop
- Verifikasi loading state dan error handling

## 🔧 Troubleshooting

### Masalah: Build Failed

**Solusi:**
1. Check netlify.toml konfigurasi
2. Buka deploy log di Netlify dashboard
3. Cari error message
4. Common issues:
   - Missing dependencies → `npm install`
   - TypeScript error → `npm run type-check`
   - Missing API key → set di environment variables

### Masalah: 404 Not Found saat refresh halaman

**Solusi:**
- Sudah ada di `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Masalah: AI Editor tidak berfungsi

**Solusi:**
1. Pastikan GEMINI_API_KEY ada di environment variables
2. API Key harus valid (test di https://aistudio.google.com)
3. Check browser console untuk error details

## 📊 Monitoring

### Setup Analytics (Optional)

1. Di Netlify dashboard → Analytics
2. Netlify menyediakan analytics gratis
3. Monitor traffic dan performance

### Setup Error Tracking (Optional)

Dalam `netlify.toml` sudah ada konfigurasi untuk error tracking.

## 🔄 Update & Re-deploy

Setiap kali push ke `main` branch di GitHub, Netlify otomatis akan:

1. Pull kode terbaru
2. Install dependencies
3. Run build
4. Deploy ke live site

Proses ini biasanya 2-3 menit.

## 📱 Custom Domain (Optional)

Jika ingin domain custom (.com, .id, dll):

1. Di Netlify dashboard → Domain settings
2. Add custom domain
3. Update DNS settings di registrar
4. Netlify akan auto provision SSL certificate

## 🎉 Done!

Website Anda sekarang sudah live di Netlify!

**URL:** `https://yoursite.netlify.app`

---

## 📞 Tips & Tricks

- **Force Rebuild:** Di Netlify dashboard, Production Deploys → Trigger deploy
- **Rollback:** Di Netlify dashboard, Deploys tab → Buka versi lama → Publish
- **Custom Headers:** Edit di `netlify.toml` section `[[headers]]`
- **Redirects:** Edit di `netlify.toml` section `[[redirects]]`

## 🆘 Butuh Bantuan?

Cek documentation:
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com/docs
- Google Gemini: https://ai.google.dev/docs

Happy Deploying! 🚀
