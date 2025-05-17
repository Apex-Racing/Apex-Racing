import Link from 'next/link'

// Componente de cabeçalho
export default function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Apex Racing
          </Link>
          <ul className="flex space-x-6">
            <li><Link href="/f1" className="hover:text-red-500 transition">F1</Link></li>
            <li><Link href="/wec" className="hover:text-red-500 transition">WEC</Link></li>
            <li><Link href="/wrc" className="hover:text-red-500 transition">WRC</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}