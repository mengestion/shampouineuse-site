export default function Home() {
  return (
    <div className="bg-cream text-gray-800 font-sans antialiased min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="text-[#F3C300] text-2xl">💧</span>
              <span className="font-bold text-xl text-gray-900">Shampouineuse Annecy</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-600 hover:text-[#F3C300] transition font-medium">Nos Services</a>
              <a href="#comment-ca-marche" className="text-gray-600 hover:text-[#F3C300] transition font-medium">Comment ça marche ?</a>
              <a href="#galerie" className="text-gray-600 hover:text-[#F3C300] transition font-medium">Galerie</a>
              <a href="#avis" className="text-gray-600 hover:text-[#F3C300] transition font-medium">Avis</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Redonnez vie à vos textiles. <br />
            <span className="text-[#F3C300]">Propre, simple, sans stress.</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mb-8">
            Location de matériel professionnel Kärcher et prestations de nettoyage à domicile sur le bassin d'Annecy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.cal.eu/shampouineuse-annecy-fwsbqq" target="_blank" rel="noopener noreferrer" className="bg-[#F3C300] text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 text-center">
               📅 Réserver une Location
            </a>
            <a href="https://cal.eu/shampouineuse-annecy-fwsbqq/prestation" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 text-center border-2 border-transparent">
              Demander une Prestation
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-300 font-medium">
            <span>🔒 Caution sécurisée (non débitée)</span>
            <span>⭐ Matériel Pro</span>
          </div>
        </div>
      </div>

      {/* Détails Services & Tarifs */}
      <div id="services" className="py-16 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nos Formules</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Des solutions adaptées à vos besoins, en toute transparence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location Card */}
            <div className="border border-gray-100 bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#F3C300] text-gray-900 rounded-lg flex items-center justify-center text-xl font-bold">
                  📦
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Location de Matériel</h3>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Retrait gratuit au point de rendez-vous.</li>
                <li className="flex items-start"><span className="text-[#F3C300] mr-2">📍</span> <b>Option Livraison :</b> +10€ dans un rayon de 10 à 15km.</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Machine professionnelle Kärcher.</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Produits de nettoyage inclus ou en supplément (selon formule).</li>
              </ul>
              <a href="https://www.cal.eu/shampouineuse-annecy-fwsbqq" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition">
                Voir les tarifs de location
              </a>
            </div>

            {/* Prestation Card */}
            <div className="border border-gray-100 bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#F3C300] text-gray-900 rounded-lg flex items-center justify-center text-xl font-bold">
                  ✨
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Prestation de Nettoyage</h3>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> <b>1 Prestation</b> = 1 Canapé OU 1 Tapis OU 1 Habitacle Auto.</li>
                <li className="flex items-start"><span className="text-[#F3C300] mr-2">➕</span> <b>Élément supplémentaire :</b> +20€ par pièce.</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Déplacement inclus (rayon de 10-15km). Au-delà : sur devis.</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> <b>Prérequis :</b> Nécessite un accès à une prise électrique.</li>
              </ul>
              <a href="https://cal.eu/shampouineuse-annecy-fwsbqq/prestation" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition">
                Réserver une prestation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div id="comment-ca-marche" className="py-16 bg-[#F9FAFB] scroll-mt-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">La propreté en 3 étapes simples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-16 h-16 bg-yellow-100 text-[#F3C300] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choisissez votre créneau</h3>
              <p className="text-gray-600">Sélectionnez la date pour une location ou une prestation directement sur notre calendrier en ligne.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-16 h-16 bg-yellow-100 text-[#F3C300] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurisez la réservation</h3>
              <p className="text-gray-600">Une simple empreinte bancaire (non débitée) valide votre demande instantanément.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-16 h-16 bg-yellow-100 text-[#F3C300] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Profitez du résultat</h3>
              <p className="text-gray-600">Nous intervenons chez vous, ou vous récupérez la machine pour redonner l'éclat du neuf à vos textiles.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Galerie Photo (Avant / Après) */}
      <div id="galerie" className="py-16 bg-white scroll-mt-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Galerie Avant / Après</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Les résultats parlent d'eux-mêmes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder images (To be replaced with real ones) */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-bold">Canapé Tissu</span>
              </div>
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" alt="Nettoyage Canapé" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-bold">Sièges Auto</span>
              </div>
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" alt="Nettoyage Auto" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-bold">Tapis Salon</span>
              </div>
              <img src="https://images.unsplash.com/photo-1528343132644-fb8bb994d509?auto=format&fit=crop&q=80&w=800" alt="Nettoyage Tapis" className="w-full h-full object-cover" />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6 italic">Ces photos d'illustration seront bientôt remplacées par nos propres réalisations.</p>
        </div>
      </div>

      {/* Avis Clients */}
      <div id="avis" className="py-16 bg-[#F9FAFB] scroll-mt-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Avis Clients</h2>
            <div className="flex justify-center items-center gap-1 mt-4 text-[#F3C300] text-xl">
              ★★★★★
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-[#F3C300] text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 italic mb-4">"Super service ! J'ai loué la machine pour mon canapé et mes sièges de voiture. Tout est revenu nickel. Le système de caution en ligne est super rassurant et très pro."</p>
              <p className="font-bold text-gray-900">- Sarah L.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-[#F3C300] text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 italic mb-4">"J'ai pris la prestation complète pour un tapis très taché. Le résultat est incroyable. Personne ponctuelle et efficace, je recommande à 100%."</p>
              <p className="font-bold text-gray-900">- Julien M.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Shampouineuse Annecy. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}