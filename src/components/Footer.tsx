export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Apex Racing</h3>
            <p>Seu portal de notícias sobre automobilismo</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>Fórmula 1</li>
              <li>WEC</li>
              <li>WRC</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            {/* Adicionar ícones e links de redes sociais */}
          </div>
        </div>
      </div>
    </footer>
  )
}