export default function Home() {
  return (
    <div className="bg-cream text-gray-800 font-sans antialiased min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="text-karcher text-2xl">💧</span>
              <span className="font-bold text-xl text-charcoal">Shampouineuse Annecy</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-karcher transition">Location</a>
              <a href="#" className="text-gray-600 hover:text-karcher transition">Prestations</a>
              <a href="#" className="text-gray-600 hover:text-karcher transition">Comment ça marche ?</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Redonnez vie à vos textiles. <br />
            <span className="text-karcher">Propre, simple, sans stress.</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mb-8">
            Location de matériel professionnel Kärcher et prestations de nettoyage à domicile sur le bassin d'Annecy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-karcher text-charcoal font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1">
               📅 Louer une machine
            </button>
            <button className="bg-white text-charcoal font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition">
              Demander une prestation
            </button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
            <span>🔒 Caution sécurisée (non débitée)</span>
            <span>⭐ Matériel Pro</span>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-12">La propreté en 3 étapes simples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 text-karcher rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Choisissez votre créneau</h3>
              <p className="text-gray-600">Sélectionnez la date et l'heure de retrait qui vous arrangent sur notre calendrier en direct.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 text-karcher rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Sécurisez la réservation</h3>
              <p className="text-gray-600">Une simple empreinte bancaire (non débitée) valide votre réservation instantanément.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 text-karcher rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Nettoyez comme un pro</h3>
              <p className="text-gray-600">Récupérez la machine et redonnez l'éclat du neuf à vos canapés, tapis et sièges auto.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}