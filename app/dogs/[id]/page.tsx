import Navbar from '../../../components/Navbar'

export default function DogDetail({ params }: { params: { id: string } }) {
  const { id } = params
  // placeholder
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Dog report {id}</h1>
        <p className="text-gray-600">Detail page scaffold. This will show images, map, comments, and contact form.</p>
      </div>
    </main>
  )
}
