import Navbar from '../../components/Navbar'

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Log in</h1>
        <p className="text-gray-600">Login form will use Supabase Auth.</p>
      </div>
    </main>
  )
}
