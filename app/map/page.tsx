import Navbar from '../../components/Navbar'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

const DogMap = dynamic(() => import('../../components/DogMap'), { ssr: false })

export default function MapPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Map</h1>
        <div className="h-[600px] rounded-lg overflow-hidden">
          <DogMap />
        </div>
      </div>
    </main>
  )
}
