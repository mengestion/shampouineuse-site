export default function Home() {
  return (
    <div className="bg-[#F9FAFB] text-gray-800 font-sans antialiased min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="text-[#F3C300] text-2xl">💧</span>
              <span className="font-bold text-xl text-gray-900">Shampouineuse Annecy</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#tarifs" className="text-gray-600 hover:text-[#F3C300] transition font-medium">Tarifs & Formules</a>
              <a href="#comment-ca-marche" className="text-gray-600 hover:text-[#F3C300] transition font-medium">Comment ça marche ?</a>
              <a href="#galerie" className="text-gray-600 hover:text-[#F3C300] transition font-medium">Galerie</a>
              <a href="#avis" className="text-gray-600 hover:text-[#F3C300] transition font-medium">Avis Clients</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* On peut facilement changer ce lien d'image plus tard pour une vraie photo de prestation */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Redonnez vie à vos textiles. <br />
            <span className="text-[#F3C300]">Propre, simple, sans stress.</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mb-8">
            Location de matériel professionnel Kärcher et prestations de nettoyage à domicile sur le bassin d'Annecy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.cal.eu/shampouineuse-annecy-fwsbqq" target="_blank" rel="noopener noreferrer" className="bg-[#F3C300] text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 text-center">
               📅 Réserver une Location
            </a>
            <a href="https://cal.eu/shampouineuse-annecy-fwsbqq/prestation" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 text-center">
              Demander une Prestation
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400 font-medium">
            <span>🔒 Caution sécurisée (non débitée)</span>
            <span>⭐ Matériel Pro</span>
          </div>
        </div>
      </div>

      {/* Détails Services & Tarifs (Restauré avec l'ancien style de cartes) */}
      <div id="tarifs" className="py-16 bg-white scroll-mt-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Formules</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Des solutions adaptées à vos besoins, en toute transparence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-16 h-16 bg-yellow-100 text-[#F3C300] rounded-full flex items-center justify-center mb-6 text-3xl font-bold">
                📦
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Location de Matériel</h3>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start"><span className="text-green-500 mr-3 text-lg">✓</span> <b>Principe de retrait :</b> Vous récupérez le matériel au point de rendez-vous gratuitement.</li>
                <li className="flex items-start"><span className="text-[#F3C300] mr-3 text-lg">📍</span> <b>Option Livraison (+10€) :</b> Possible dans un rayon de 10 à 15km autour du point de retrait.</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 text-lg">✓</span> Machine Kärcher entretenue, caution sécurisée en ligne.</li>
              </ul>
            </div>

            {/* Prestation Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-16 h-16 bg-yellow-100 text-[#F3C300] rounded-full flex items-center justify-center mb-6 text-3xl font-bold">
                ✨
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prestation de Nettoyage</h3>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start"><span className="text-green-500 mr-3 text-lg">✓</span> <b>1 Prestation</b> = 1 Meuble, 1 Tapis OU 1 Habitacle de Voiture.</li>
                <li className="flex items-start"><span className="text-[#F3C300] mr-3 text-lg">➕</span> <b>Chaque élément supplémentaire :</b> +20€ (canapé additionnel, etc).</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 text-lg">✓</span> <b>Déplacement inclus</b> dans un rayon de 10-15km (au-delà : sur devis).</li>
                <li className="flex items-start"><span className="text-red-500 mr-3 text-lg">⚠️</span> <b>Important :</b> Nous avons impérativement besoin d'un accès à une prise électrique sur place.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How it works (Style restauré) */}
      <div id="comment-ca-marche" className="py-16 bg-[#F9FAFB] scroll-mt-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">La propreté en 3 étapes simples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 text-[#F3C300] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Réservez en ligne</h3>
              <p className="text-gray-600">Sélectionnez la date pour une location ou une prestation directement sur notre calendrier.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 text-[#F3C300] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurisez la caution</h3>
              <p className="text-gray-600">Une simple empreinte bancaire (non débitée) valide instantanément votre créneau.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 text-[#F3C300] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Profitez du résultat</h3>
              <p className="text-gray-600">Nous intervenons chez vous ou vous récupérez la machine. Résultat bluffant garanti !</p>
            </div>
          </div>
        </div>
      </div>

      {/* Galerie Photo (Refaite proprement) */}
      <div id="galerie" className="py-16 bg-white scroll-mt-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Résultats Avant / Après</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">L'efficacité professionnelle sur vos textiles du quotidien.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end justify-center pb-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none">
                <span className="text-white font-bold text-xl drop-shadow-md">Canapés</span>
              </div>
              <img src="/canape.jpg" alt="Nettoyage Canapé" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Image 2 */}
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end justify-center pb-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none">
                <span className="text-white font-bold text-xl drop-shadow-md">Intérieurs Auto</span>
              </div>
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" alt="Nettoyage Auto" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Image 3 (Tapis) avec effet Avant / Après */}
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group shadow-sm">
              <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-bold z-20 shadow-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                Avant
              </div>
              <div className="absolute top-4 right-4 bg-[#F3C300] text-gray-900 px-3 py-1 rounded-full text-xs font-bold z-20 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Après
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end justify-center pb-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none">
                <span className="text-white font-bold text-xl drop-shadow-md">Tapis & Moquettes</span>
              </div>
              <img src="/tapis-avant.jpg" alt="Nettoyage Tapis Avant" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
              <img src="/tapis-apres.jpg" alt="Nettoyage Tapis Après" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 transform group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      {/* Avis Clients (Cartes élégantes) */}
      <div id="avis" className="py-16 bg-[#F9FAFB] scroll-mt-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Ils nous recommandent</h2>
            <div className="text-[#F3C300] text-2xl tracking-widest">★★★★★</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-[#F3C300] text-lg mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"J'ai loué la machine pour mon canapé et mes sièges de voiture. Tout est revenu nickel. Le système de caution en ligne est super rassurant, matériel pro et au top."</p>
              <div className="font-bold text-gray-900 border-t border-gray-100 pt-4">- Sarah L.</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-[#F3C300] text-lg mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"Prestation complète pour un grand tapis très taché. Résultat incroyable. Personne ponctuelle et efficace, la prise de rendez-vous est ultra simple, je recommande !"</p>
              <div className="font-bold text-gray-900 border-t border-gray-100 pt-4">- Julien M.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
          <span className="text-[#F3C300] text-3xl mb-4">💧</span>
          <p className="mb-2 text-white font-bold text-lg">Shampouineuse Annecy</p>
          <p className="text-sm">© {new Date().getFullYear()} Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}