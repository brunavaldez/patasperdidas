import Navbar from '../../components/Navbar'

export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Your profile</h1>
        <p className="text-gray-600">Profile and current reports will be shown here.</p>
      </div>
    </main>
  )
}
