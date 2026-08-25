import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">Patas Perdidas</Link>
        <div className="flex items-center gap-3">
          <Link href="/report" className="bg-primary text-white px-3 py-2 rounded-md">Report</Link>
          <Link href="/map" className="px-3 py-2 rounded-md">Map</Link>
          <Link href="/profile" className="px-3 py-2 rounded-md">Profile</Link>
        </div>
      </div>
    </nav>
  )
}
