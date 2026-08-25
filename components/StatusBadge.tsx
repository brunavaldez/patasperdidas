export default function StatusBadge({ status }: { status: string }) {
  const base = 'inline-flex items-center px-2 py-1 rounded text-xs font-semibold'
  if (status === 'FOUND') return <span className={`${base} bg-found/10 text-found`} aria-label="Found">FOUND</span>
  if (status === 'LOST') return <span className={`${base} bg-lost/10 text-lost`} aria-label="Lost">LOST</span>
  return <span className={base}>{status}</span>
}
