export default function SearchBar() {
  return (
    <form className="flex gap-2">
      <input aria-label="Search reports" placeholder="Search by name, breed, location or keywords" className="flex-1 rounded-md border px-3 py-2" />
      <button className="bg-primary text-white px-4 rounded-md">Search</button>
    </form>
  )
}
