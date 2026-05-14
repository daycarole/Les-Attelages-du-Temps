export default function ChevauxPage() {
  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#1B1B1B]">
      {/* MENU */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center gap-4 md:gap-10 py-5 md:py-6 text-white backdrop-blur-md bg-black/30 uppercase tracking-[0.12em] md:tracking-[0.2em] text-xs md:text-sm">
        <a href="/" className="hover:text-yellow-300 transition">
          Accueil
        </a>

        <a href="/prestations" className="hover:text-yellow-300 transition">
          Nos Prestations
        </a>

        <a href="/chevaux" className="hover:text-yellow-300 transition">
          Nos Chevaux
        </a>

        <a href="/contact" className="hover:text-yellow-300 transition">
          Contact
        </a>
      </nav>

      {/* CONTENU */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-yellow-700 text-sm mb-6">
            Page en préparation
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#6E4B3A]">
            Nos Chevaux
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
            Ce site est encore en construction.
            <br />
            <br />
            Découvrez dans les prochaines heures le portrait de nos magnifiques
            chevaux.
          </p>
        </div>
      </section>
    </main>
  );
}