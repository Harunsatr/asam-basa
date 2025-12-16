
import { useState } from 'react'
import LandingPage from './components/LandingPage'
import MateriAsamBasa from './components/MateriAsamBasa'
import SimulasiPH from './components/SimulasiPH'
import LatihanSoal from './components/LatihanSoal'
import KuisAkhir from './components/KuisAkhir'

export default function App() {
  const [page, setPage] = useState('landing')
  const navigate = setPage

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {page === 'materi' && <MateriAsamBasa onBack={() => navigate('landing')} />}
      {page === 'simulasi' && <SimulasiPH onBack={() => navigate('landing')} />}
      {page === 'latihan' && <LatihanSoal onBack={() => navigate('landing')} />}
      {page === 'kuis' && <KuisAkhir onBack={() => navigate('landing')} />}
      {page === 'landing' && <LandingPage navigate={navigate} />}
    </div>
  )
}
