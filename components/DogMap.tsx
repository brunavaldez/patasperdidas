import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

export default function DogMap() {
  const position: [number, number] = [-16.5, -68.1]
  const iconLost = L.icon({ iconUrl: '/marker-red.png', iconSize: [25, 41], iconAnchor: [12, 41] })
  const iconFound = L.icon({ iconUrl: '/marker-green.png', iconSize: [25, 41], iconAnchor: [12, 41] })

  const sample = [
    { id: '1', name: 'Max', lat: -16.5, lng: -68.1, status: 'FOUND' },
    { id: '2', name: 'Luna', lat: -16.49, lng: -68.11, status: 'LOST' }
  ]

  return (
    <MapContainer center={position} zoom={13} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {sample.map((s) => (
        <Marker key={s.id} position={[s.lat, s.lng]} icon={s.status === 'FOUND' ? iconFound : iconLost as any}>
          <Popup>
            <strong>{s.name}</strong>
            <div>{s.status}</div>
            <a href={`/dogs/${s.id}`} className="text-blue-600">View details</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
