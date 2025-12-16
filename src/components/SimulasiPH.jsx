
import { useState } from 'react'
import { ArrowLeft, RotateCcw } from 'lucide-react'

function calcPH(H) {
  return -Math.log10(H)
}

export default function SimulasiPH({ onBack }) {
  const [H, setH] = useState(0.01)
  const pH = calcPH(H).toFixed(2)

  const getAcidityLevel = (pH) => {
    if (pH < 3) return { label: 'Sangat Asam', color: 'text-danger-600', bg: 'bg-danger-50' }
    if (pH < 7) return { label: 'Asam', color: 'text-orange-600', bg: 'bg-orange-50' }
    if (pH === 7) return { label: 'Netral', color: 'text-green-600', bg: 'bg-green-50' }
    if (pH <= 11) return { label: 'Basa', color: 'text-blue-600', bg: 'bg-blue-50' }
    return { label: 'Sangat Basa', color: 'text-indigo-600', bg: 'bg-indigo-50' }
  }

  const acidity = getAcidityLevel(parseFloat(pH))
  const positionPercent = (pH / 14) * 100

  const handleReset = () => {
    setH(0.01)
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

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Simulasi Skala pH</h1>

        {/* Main Content Card */}
        <div className="card mb-8">
          {/* pH Display */}
          <div className={`rounded-lg p-8 text-center mb-8 ${acidity.bg}`}>
            <p className={`text-4xl font-bold ${acidity.color} mb-2`}>{pH}</p>
            <p className={`text-lg font-semibold ${acidity.color}`}>{acidity.label}</p>
          </div>

          {/* H+ Concentration Input */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-4">Konsentrasi H⁺ (M): {H.toFixed(4)}</label>
            <input
              type="range"
              min="0.00001"
              max="1"
              step="0.001"
              value={H}
              onChange={(e) => setH(Number(e.target.value))}
              className="input-field w-full h-2 accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>10⁻⁵</span>
              <span>10⁻³</span>
              <span>10⁻¹</span>
              <span>1</span>
            </div>
          </div>

          {/* pH Scale Visualization */}
          <div className="mb-8">
            <p className="text-gray-700 font-semibold mb-3">Skala pH</p>
            <div className="relative h-16 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 rounded-lg overflow-hidden shadow-md">
              <div
                className="absolute top-0 bottom-0 w-1 bg-black transition-all duration-100"
                style={{ left: `${positionPercent}%` }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 whitespace-nowrap bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold">
                  {pH}
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2 font-semibold">
              <span>0 (Sangat Asam)</span>
              <span>7 (Netral)</span>
              <span>14 (Sangat Basa)</span>
            </div>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm font-medium mb-1">Konsentrasi H⁺</p>
              <p className="text-lg font-bold text-gray-900">{H.toExponential(2)} M</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm font-medium mb-1">Nilai pH</p>
              <p className="text-lg font-bold text-gray-900">{pH}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm font-medium mb-1">Sifat Larutan</p>
              <p className="text-lg font-bold text-gray-900">{acidity.label}</p>
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="btn-secondary w-full flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            Reset Simulasi
          </button>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 font-medium mb-2">💡 Tips:</p>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Geser slider untuk mengubah konsentrasi H⁺</li>
            <li>• Perhatikan perubahan warna pada skala pH</li>
            <li>• pH &lt; 7 = Asam, pH = 7 = Netral, pH &gt; 7 = Basa</li>
            <li>• Semakin rendah konsentrasi H⁺, semakin tinggi pH-nya</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
