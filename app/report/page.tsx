import Navbar from '../../components/Navbar'
import DogForm from '../../components/DogForm'

export default function ReportPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Report a lost or found dog</h1>
        <DogForm />
      </div>
    </main>
  )
}
