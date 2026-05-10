"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoReady, setVideoReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.play().catch(() => {
        setVideoReady(false);
      });
    }
  }, []);

  function validateEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formElement = e.currentTarget;
    setError("");
    setSuccess(false);

    const form = new FormData(formElement);

    const nom = form.get("nom") as string;
    const email = form.get("email") as string;
    const telephone = form.get("telephone") as string;
    const message = form.get("message") as string;

    if (!nom || !email || !message) {
      setError("Merci de remplir les champs obligatoires.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Email invalide.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nom, email, telephone, message }),
      });

      if (res.ok) {
        setSuccess(true);
        formElement.reset();
      } else {
        setError("Erreur lors de l’envoi.");
      }
    } catch (error) {
      console.error(error);
      setError("Impossible d’envoyer le message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#F6F1E8] text-[#1B1B1B]">
      
      
      
      
      
      
      
      {/* MENU */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center gap-4 md:gap-10 py-5 md:py-6 text-white backdrop-blur-md bg-black/30 uppercase tracking-[0.12em] md:tracking-[0.2em] text-xs md:text-sm">
        <a href="/" className="hover:text-yellow-300 transition">
          Accueil
        </a>
        <a href="/prestations" className="hover:text-yellow-300 transition">
          Prestations
        </a>
        <a href="/contact" className="hover:text-yellow-300 transition">
          Contact
        </a>
      </nav>





      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center text-center text-white overflow-hidden">
       
       
       
        {/* IMAGE DE SECOURS */}
        <div
          className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: "url('/galerie-accueil/paire-chevaux.png')" }}
        />






        {/* VIDÉO */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/galerie-accueil/video.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* TEXTE */}
        <div className="relative z-10 max-w-3xl px-6">
          <p className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-xs md:text-sm text-yellow-300 mb-4">
            Mariage • Cinéma • Événementiel
          </p>

          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Les Calèches du Temps
          </h1>

          <p className="text-lg md:text-xl italic text-gray-200 mb-10">
            Tradition, élégance et émotion
          </p>

          <a
            href="/prestations"
            className="bg-yellow-600 hover:bg-yellow-500 transition px-8 py-4 rounded-full"
          >
            Découvrir les prestations
          </a>
        </div>
      </section>






      {/* PRESTATIONS */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Nos Prestations</h2>




        <div className="grid md:grid-cols-3 gap-10">
          <a
            href="/prestations#mariage"
            className="block bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-500"
          >
            <img
              src="/galerie-mariage/caleche-mariage.png"
              alt="Calèche mariage tarn près d'albi et toulouse"
              className="w-full h-72 object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-[#6E4B3A]">
                                         
                Mariage
              </h3>







              <p className="text-gray-600">
                Une arrivée élégante et inoubliable pour votre cérémonie.
              </p>
            </div>
          </a>

          <a
            href="/prestations#cinema"
            className="block bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-500"
          >
            <img
              src="/galerie-cinema/caleche-cinema.png"
              alt="Calèche pour tournage cinéma historique"
              className="w-full h-72 object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-[#6E4B3A]">
                                        
                Cinéma
              </h3>





              <p className="text-gray-600">
                Authenticité et expérience pour vos productions historiques.
              </p>
            </div>
          </a>

          <a
            href="/prestations#evenementiel"
            className="block bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-500"
          >
            <img
              src="/galerie-evenement/caleche-noel.png"
              alt="Calèche événement pour marché de Noël"
              className="w-full h-72 object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-[#6E4B3A]">
                Événementiel
              </h3>

              <p className="text-gray-600">
                Une touche magique pour vos événements et marchés.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* A PROPOS */}
      <section className="bg-[#2B2622] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/galerie-accueil/chevaux-attelage.jpg"
            alt="Chevaux attelage occitanie sud de france"
            className="rounded-3xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">À propos</h2>

            <p className="text-gray-300 leading-relaxed">
              Professionnels du milieu équestre depuis plus de vingt ans, nous
              mettons notre expérience et notre passion au service de
              prestations authentiques et raffinées.
              <br />
              <br />
              Le bien-être animal est au cœur de chacune de nos attentions. Nos
              chevaux et poneys évoluent dans un environnement respectueux,
              pensé pour leur équilibre et leur sérénité, afin de garantir des
              prestations réalisées dans les meilleures conditions.
              <br />
              <br />
              Situés dans le Tarn, à proximité d’Albi et de Toulouse, Les
              Calèches du Temps accompagnent mariages, événements et
              productions audiovisuelles avec exigence, élégance et
              savoir-faire.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact</h2>

        {success ? (
          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <h3 className="text-3xl font-bold mb-4 text-[#6E4B3A]">
              Merci pour votre message
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              Votre mail est bien envoyé.
              <br />
              Nous traiterons votre demande dans les plus brefs délais.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-3xl shadow-xl space-y-5"
          >
            <input
              name="nom"
              placeholder="Nom"
              className="w-full border p-4 rounded-xl"
            />

            <input
              name="email"
              placeholder="Email"
              className="w-full border p-4 rounded-xl"
            />

            <input
              name="telephone"
              placeholder="Téléphone"
              className="w-full border p-4 rounded-xl"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              className="w-full border p-4 rounded-xl"
            />

            {error && <p className="text-red-500 text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2B2622] text-white py-4 rounded-full hover:bg-[#463c36] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Envoi..." : "Envoyer"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}