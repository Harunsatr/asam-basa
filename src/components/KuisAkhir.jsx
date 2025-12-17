
import { useState, useEffect } from 'react'
import { ArrowLeft, Clock, CheckCircle, XCircle } from 'lucide-react'

const questions = [
  { q: 'Definisi asam menurut teori Arrhenius?', options: ['Donor H⁺', 'Akseptor e⁻', 'Pelepas OH⁻', 'Akseptor H⁺'], a: 0 },
  { q: 'Berapa pH larutan dengan [H⁺] = 10⁻⁵ M?', options: ['5', '4', '6', '7'], a: 0 },
  { q: 'Larutan dengan pH 11 bersifat?', options: ['Asam', 'Netral', 'Basa lemah', 'Basa kuat'], a: 3 },
  { q: 'Indikator yang tepat untuk titrasi asam-basa kuat?', options: ['Lakmus', 'Fenolftalein', 'Metil jingga', 'BTB'], a: 1 },
  { q: 'Apa itu titrasi?', options: ['Pencampuran dua larutan', 'Analisis konsentrasi', 'Pemanasan larutan', 'Penyaringan larutan'], a: 1 },
]

export default function KuisAkhir({ onBack }) {
  const [started, setStarted] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!started || submitted) return
    
    if (timeLeft <= 0) {
      setSubmitted(true)
      return
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, started, submitted])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Kembali
          </button>

          <div className="card">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Kuis Akhir - Asam Basa</h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-semibold text-gray-900">{questions.length} Soal</p>
                  <p className="text-gray-600">Evaluasi menyeluruh tentang asam basa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <p className="font-semibold text-gray-900">5 Menit</p>
                  <p className="text-gray-600">Waktu terbatas untuk menjawab</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-semibold text-gray-900">Passing Grade 60%</p>
                  <p className="text-gray-600">Minimum nilai untuk lulus</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800 font-medium">⚠️ Perhatian:</p>
              <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                <li>• Jawab semua pertanyaan dengan cermat</li>
                <li>• Waktu akan otomatis berakhir setelah 5 menit</li>
                <li>• Tidak bisa kembali ke pertanyaan sebelumnya</li>
              </ul>
            </div>

            <button
              onClick={() => setStarted(true)}
              className="btn-primary w-full text-lg py-3"
            >
              Mulai Kuis
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (submitted) {
    const correctAnswers = Object.keys(answers).filter(k => {
      const qIdx = parseInt(k)
      return answers[k] === questions[qIdx].a
    }).length
    const percentage = Math.round((correctAnswers / questions.length) * 100)
    const passed = percentage >= 60

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <div className="mb-6">
              {passed ? (
                <CheckCircle size={80} className="mx-auto text-green-500 mb-4" />
              ) : (
                <XCircle size={80} className="mx-auto text-red-500 mb-4" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Hasil Kuis</h2>
            <p className="text-6xl font-bold text-blue-600 mb-2">{percentage}%</p>
            <p className="text-2xl font-semibold text-gray-700 mb-8">
              {passed ? '🎉 LULUS' : '📚 TIDAK LULUS'}
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mb-8">
              <p className="text-gray-700 font-medium">
                Jawaban Benar: <span className="text-lg text-blue-600 font-bold">{correctAnswers}/{questions.length}</span>
              </p>
            </div>

            {!passed && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
                <p className="text-orange-800 font-medium mb-2">💡 Saran:</p>
                <p className="text-orange-700 text-sm">Pelajari kembali materi asam basa dan coba latihan soal sebelum mengikuti kuis berikutnya.</p>
              </div>
            )}

            <button
              onClick={onBack}
              className="btn-primary w-full"
            >
              ← Kembali ke Landing
            </button>
          </div>
        </div>
      </div>
    )
  }

  const current = questions[currentIdx]
  const isAnswered = currentIdx in answers

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header with Timer */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Kuis Akhir</h1>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold ${
            timeLeft <= 60 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
          }`}>
            <Clock size={20} />
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Soal {currentIdx + 1}/{questions.length}</span>
            <span>{Object.keys(answers).length} dijawab</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{current.q}</h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {current.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setAnswers({ ...answers, [currentIdx]: idx })}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all font-medium ${
                  answers[currentIdx] === idx
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-gray-200 bg-white hover:border-gray-300 text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      answers[currentIdx] === idx ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                    }`}
                  >
                    {answers[currentIdx] === idx && <span className="text-white text-sm">✓</span>}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
              disabled={currentIdx === 0}
              className="btn-secondary flex-1"
            >
              ← Sebelumnya
            </button>

            {currentIdx === questions.length - 1 ? (
              <button
                onClick={() => setSubmitted(true)}
                className="btn-primary flex-1"
              >
                Selesai & Submit
              </button>
            ) : (
              <button
                onClick={() => setCurrentIdx(currentIdx + 1)}
                className="btn-primary flex-1"
              >
                Selanjutnya →
              </button>
            )}
          </div>
        </div>

        {/* Question Preview */}
        <div className="bg-white rounded-lg p-4">
          <p className="text-sm font-medium text-gray-700 mb-3">Navigasi Cepat:</p>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-10 rounded font-medium text-sm transition-all ${
                  idx === currentIdx
                    ? 'bg-blue-600 text-white'
                    : idx in answers
                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
