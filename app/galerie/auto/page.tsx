import Link from 'next/link';

export default function Gallery() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen font-sans text-gray-800">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/#galerie" className="text-gray-600 hover:text-[#F3C300] font-bold transition flex items-center gap-2">
            <span>←</span> Retour à l'accueil
          </Link>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Intérieurs Auto</h1>
          <p className="text-xl text-gray-600">Rénovation des sièges, moquettes et portières de vos véhicules.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <img src="/auto-avant.jpg" alt="Intérieurs Auto" className="w-full h-full object-cover rounded-xl shadow-sm aspect-square hover:scale-105 transition-transform duration-300" />
          <img src="/auto-apres.jpg" alt="Intérieurs Auto" className="w-full h-full object-cover rounded-xl shadow-sm aspect-square hover:scale-105 transition-transform duration-300" />
        </div>
        
        <div className="text-center">
          <a href="https://cal.eu/shampouineuse-annecy-fwsbqq/prestation" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#F3C300] text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1">
            📅 Réserver une prestation
          </a>
        </div>
      </div>
    </div>
  );
}
