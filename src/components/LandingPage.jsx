
import { FlaskConical, Droplet, TestTube, BookOpen, ClipboardCheck, Beaker } from 'lucide-react'

export default function LandingPage({ navigate }) {
  const features = [
    { id: 'materi', icon: BookOpen, label: 'Materi', desc: 'Pelajari teori asam basa', color: 'from-blue-500 to-blue-600' },
    { id: 'simulasi', icon: Droplet, label: 'Simulasi pH', desc: 'Eksperimen skala pH', color: 'from-purple-500 to-purple-600' },
    { id: 'latihan', icon: TestTube, label: 'Latihan', desc: 'Praktik soal', color: 'from-green-500 to-green-600' },
    { id: 'kuis', icon: ClipboardCheck, label: 'Kuis', desc: 'Evaluasi pemahaman', color: 'from-orange-500 to-orange-600' },
  ]

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 md:p-8 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <FlaskConical size={32} />
            <h1 className="text-3xl md:text-4xl font-bold">Asam Basa Interaktif</h1>
          </div>
          <p className="text-blue-100 text-sm md:text-base">Platform pembelajaran interaktif untuk memahami konsep asam basa, pH, indikator, dan titrasi</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-6 py-8">
        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Yang Bisa Kamu Pelajari</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚗️', text: 'Memahami teori asam basa' },
              { icon: '📊', text: 'Menganalisis skala pH' },
              { icon: '🧪', text: 'Menggunakan indikator' },
              { icon: '💧', text: 'Mensimulasikan titrasi' },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <p className="text-3xl mb-3">{item.icon}</p>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Pilih Menu Pembelajaran</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <button
                  key={feature.id}
                  onClick={() => navigate(feature.id)}
                  className={`card-interactive group flex flex-col items-center justify-center p-8 text-center min-h-56 bg-gradient-to-br ${feature.color} text-white`}
                >
                  <Icon size={48} className="mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2">{feature.label}</h3>
                  <p className="text-sm opacity-90">{feature.desc}</p>
                </button>
              )
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
        <p className="text-sm">© 2025 Asam Basa Interaktif | Belajar Sains dengan Cara Interaktif</p>
      </footer>
    </div>
  )
}
