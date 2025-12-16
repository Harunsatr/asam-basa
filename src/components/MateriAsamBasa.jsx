
import { useState } from 'react'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'

const sections = [
  {
    title: 'Definisi Asam Basa',
    content: 'Asam adalah zat yang dapat mendonorkan proton (H⁺) kepada zat lain. Basa adalah zat yang dapat menerima proton. Teori ini dikenal sebagai teori Bronsted-Lowry.',
    details: ['Asam kuat: HCl, H₂SO₄, HNO₃', 'Basa kuat: NaOH, KOH', 'Asam lemah: CH₃COOH', 'Basa lemah: NH₃']
  },
  {
    title: 'Teori Asam Basa',
    content: 'Ada tiga teori utama asam basa yang dikembangkan oleh ilmuwan:',
    details: ['Arrhenius: Asam menghasilkan H⁺, basa menghasilkan OH⁻', 'Bronsted-Lowry: Asam donor proton, basa akseptor proton', 'Lewis: Asam akseptor elektron, basa donor elektron']
  },
  {
    title: 'Skala pH',
    content: 'pH adalah ukuran konsentrasi ion hidrogen dalam larutan. Skala pH berkisar dari 0 sampai 14 pada suhu 25°C.',
    details: ['pH 0-6: Larutan asam', 'pH 7: Larutan netral', 'pH 8-14: Larutan basa', 'Rumus: pH = -log[H⁺]']
  },
  {
    title: 'Indikator Asam Basa',
    content: 'Indikator adalah zat yang mengalami perubahan warna sesuai dengan pH larutan.',
    details: ['Lakmus: Merah (asam), Biru (basa)', 'Fenolftalein: Tak berwarna (asam), Merah muda (basa)', 'Metil jingga: Merah (asam), Kuning (basa)', 'Metil merah: Merah (asam), Kuning (basa)']
  },
  {
    title: 'Titrasi',
    content: 'Titrasi adalah metode analisis kuantitatif untuk menentukan konsentrasi suatu larutan dengan menggunakan larutan standar.',
    details: ['Titran: Larutan standar yang diketahui konsentrasinya', 'Titrat: Larutan yang akan ditentukan konsentrasinya', 'Titik ekuivalen: Jumlah mol asam = jumlah mol basa', 'Indikator digunakan untuk menentukan titik akhir titrasi']
  }
]

export default function MateriAsamBasa({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = sections[currentIndex]

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  const handleNext = () => {
    if (currentIndex < sections.length - 1) setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Kembali
        </button>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{current.title}</h1>
            <span className="text-sm font-medium text-gray-600">{currentIndex + 1}/{sections.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Card */}
        <div className="card mb-8">
          <div className="text-section">
            <p className="text-lg text-gray-800 leading-relaxed">{current.content}</p>
          </div>

          {/* Details List */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Detail:</h3>
            <ul className="space-y-2">
              {current.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4 mb-6">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="btn-secondary flex items-center gap-2"
          >
            <ChevronLeft size={20} />
            Sebelumnya
          </button>

          <div className="flex gap-2">
            {sections.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === sections.length - 1}
            className="btn-secondary flex items-center gap-2"
          >
            Selanjutnya
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Footer Info */}
        {currentIndex === sections.length - 1 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-blue-800 font-medium">✓ Materi selesai! Lanjut ke simulasi atau latihan soal untuk memperdalam pemahaman.</p>
          </div>
        )}
      </div>
    </div>
  )
}
