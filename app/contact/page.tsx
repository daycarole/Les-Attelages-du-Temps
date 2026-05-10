"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
        body: JSON.stringify({
          nom,
          email,
          telephone,
          message,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        formElement.reset();
      } else {
        setError("Erreur lors de l’envoi.");
      }
    } catch (error) {
      console.error(error);
      setError("Impossible d’envoyer le message pour le moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#1B1B1B] pt-32 px-6">
      {/* MENU */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center gap-10 py-6 text-white backdrop-blur-md bg-black/20 uppercase tracking-[0.2em] text-sm">
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

      {/* TITRE */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Contact</h1>

        <p className="text-gray-600 text-lg">
          Une demande, un projet ou un événement ?
        </p>
      </section>

      {/* CONTENU */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 pb-24">
        {/* FORMULAIRE */}
        <div>
          {success ? (
            <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#6E4B3A]">
                Merci pour votre message
              </h2>

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

              {error && (
                <p className="text-red-500 text-center">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2B2622] text-white py-4 rounded-full hover:bg-[#463c36] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Envoi..." : "Envoyer"}
              </button>
            </form>
          )}
        </div>

        {/* CARTE */}
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-[#6E4B3A]">
            Notre localisation
          </h2>

          <p className="mb-6 text-gray-600">
            Domaine Quitano
            <br />
            Occitanie, France
          </p>

          <div className="h-[450px] rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full"
              loading="lazy"
              src="https://maps.google.com/maps?q=Domaine%20Quitano&z=7&output=embed"
            />
          </div>
        </div>
      </section>
    </main>
  );
}