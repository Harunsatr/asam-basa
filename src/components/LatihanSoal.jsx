
import { useState } from 'react'
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react'

const questions = [
  {
    q: 'pH larutan HCl 0.01 M adalah?',
    options: ['1', '2', '3', '4'],
    a: 1,
    exp: 'pH = -log[H⁺] = -log(0.01) = -log(10⁻²) = 2'
  },
  {
    q: 'Indikator terbaik untuk titrasi asam kuat dengan basa kuat adalah?',
    options: ['Lakmus', 'Fenolftalein', 'Metil jingga', 'BTB'],
    a: 1,
    exp: 'Fenolftalein cocok untuk titrasi asam-basa kuat karena perubahan warna yang tajam di pH 8-10'
  },
  {
    q: 'Berapa pH larutan basa dengan pOH = 3?',
    options: ['10', '11', '12', '13'],
    a: 2,
    exp: 'pH + pOH = 14, jadi pH = 14 - 3 = 11'
  },
  {
    q: 'Larutan dengan pH 9 termasuk larutan?',
    options: ['Asam kuat', 'Asam lemah', 'Basa lemah', 'Basa kuat'],
    a: 2,
    exp: 'pH > 7 berarti basa, dan pH 9 menunjukkan basa lemah'
  },
  {
    q: 'Yang bukan merupakan teori asam basa adalah?',
    options: ['Arrhenius', 'Bronsted-Lowry', 'Lewis', 'Newton'],
    a: 3,
    exp: 'Newton adalah ilmuwan fisika, bukan teori asam basa'
  }
]

export default function LatihanSoal({ onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const handleAnswer = () => {
    if (selected === null) return
    if (selected === questions[currentQuestion].a) {
      setScore(score + 1)
    }
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelected(null)
      setShowResult(false)
    } else {
      setCompleted(true)
    }
  }

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <div className="mb-6">
              {percentage >= 80 ? (
                <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
              ) : (
                <XCircle size={64} className="mx-auto text-orange-500 mb-4" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Hasil Latihan</h2>
            <p className="text-5xl font-bold text-blue-600 mb-4">{score}/{questions.length}</p>
            <p className="text-2xl font-semibold text-gray-700 mb-6">{percentage}%</p>
            <p className="text-lg text-gray-600 mb-8">
              {percentage >= 80 ? '🎉 Sempurna! Lanjutkan ke kuis akhir.' : '👍 Bagus! Pelajari materi lagi dan coba soal berikutnya.'}
            </p>
            <button
              onClick={onBack}
              className="btn-primary"
            >
              ← Kembali ke Landing
            </button>
          </div>
        </div>
      </div>
    )
  }

  const current = questions[currentQuestion]
  const isCorrect = selected === current.a

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Kembali
        </button>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-gray-900">Latihan Soal</h1>
            <span className="text-sm font-medium text-gray-600">Soal {currentQuestion + 1}/{questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{current.q}</h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {current.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showResult && setSelected(idx)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all font-medium ${
                  selected === idx
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-gray-200 bg-white hover:border-gray-300 text-gray-900'
                } ${showResult && idx === current.a ? 'border-green-600 bg-green-50' : ''} ${
                  showResult && selected === idx && idx !== current.a ? 'border-red-600 bg-red-50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selected === idx ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                    }`}
                  >
                    {selected === idx && <span className="text-white text-sm">✓</span>}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Result Message */}
          {showResult && (
            <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className={`font-bold mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? '✓ Jawaban Benar!' : '✗ Jawaban Salah'}
                  </p>
                  <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>{current.exp}</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            {!showResult ? (
              <button
                onClick={handleAnswer}
                disabled={selected === null}
                className="btn-primary flex-1"
              >
                Periksa Jawaban
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="btn-primary flex-1"
              >
                {currentQuestion === questions.length - 1 ? 'Selesai' : 'Soal Berikutnya'}
              </button>
            )}
          </div>
        </div>

        {/* Score Preview */}
        <div className="text-center text-gray-600">
          <p>Skor sementara: <span className="font-bold text-blue-600">{score}/{currentQuestion}</span></p>
        </div>
      </div>
    </div>
  )
}
