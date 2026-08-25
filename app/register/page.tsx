import Navbar from '../../components/Navbar'

export default function RegisterPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Create account</h1>
        <p className="text-gray-600">Registration form will use Supabase Auth.</p>
      </div>
    </main>
  )
}
