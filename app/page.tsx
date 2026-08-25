import Link from 'next/link'
import SearchBar from '../../components/SearchBar'
import Navbar from '../../components/Navbar'
import DogCard from '../../components/DogCard'

export default function Page() {
  // Static demo data for scaffold
  const groups = [
    {
      location: 'Avenida San Martin',
      dogs: [
        { id: '1', name: 'Max', breed: 'Golden Retriever', status: 'FOUND', date: '2026-09-04', address: 'Avenida San Martin', image: 'https://picsum.photos/seed/max/400/300' },
        { id: '2', name: 'Luna', breed: 'Pug', status: 'LOST', date: '2026-09-02', address: 'Avenida San Martin', image: 'https://picsum.photos/seed/luna/400/300' }
      ]
    },
    {
      location: 'Avenida Beni',
      dogs: [
        { id: '3', name: 'Rocky', breed: 'Mixed', status: 'FOUND', date: '2026-09-01', address: 'Avenida Beni', image: 'https://picsum.photos/seed/rocky/400/300' }
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Patas Perdidas</h1>
          <p className="text-gray-600 mt-2">Help bring lost dogs home.</p>
          <div className="mt-4">
            <SearchBar />
          </div>
        </header>

        <section>
          {groups.map((g) => (
            <div key={g.location} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{g.location}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {g.dogs.map((d) => (
                  <DogCard key={d.id} dog={d} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
