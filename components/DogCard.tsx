import Image from 'next/image'
import Link from 'next/link'

export default function DogCard({ dog }: { dog: any }) {
  return (
    <article className="bg-white rounded-lg shadow p-4">
      <div className="h-40 w-full bg-gray-100 rounded overflow-hidden mb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dog.image} alt={`${dog.name} photo`} className="object-cover w-full h-full" />
      </div>
      <h3 className="text-lg font-semibold">{dog.name}</h3>
      <p className="text-sm text-gray-600">{dog.breed}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className={`px-2 py-1 text-xs font-medium rounded ${dog.status === 'FOUND' ? 'bg-found/10 text-found' : 'bg-lost/10 text-lost'}`}>{dog.status}</span>
        <Link href={`/dogs/${dog.id}`} className="text-sm text-primary">View details</Link>
      </div>
    </article>
  )
}
