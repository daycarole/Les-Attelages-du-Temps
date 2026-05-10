"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Prestations() {
  return (
    <main className="min-h-screen bg-[#F6F1E8] pt-32 px-6">





      {/* MENU */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center gap-10 py-6 text-white backdrop-blur-md bg-black/20 uppercase tracking-[0.2em] text-sm">
        <a href="/" className="hover:text-yellow-300 transition">Accueil</a>
        <a href="/prestations" className="hover:text-yellow-300 transition">Prestations</a>
        <a href="/contact" className="hover:text-yellow-300 transition">Contact</a>
      </nav>





      {/* TITRE */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Prestations
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Des expériences élégantes et intemporelles pour vos événements.
        </p>
      </section>






      {/* 💍 MARIAGE */}
      <section id="mariage" className="scroll-mt-32 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-32">

        {/* GALERIE */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            effect="fade"
            navigation={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <SwiperSlide>
              <img src="/galerie-mariage/poneys-mariage.jpg" className="h-[380px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/galerie-mariage/chevaux-mariage.jpg" className="h-[380px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/galerie-mariage/poneys-caleche.webp" className="h-[380px] w-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* TEXTE */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#6E4B3A]">
            Mariage
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Offrez à votre mariage une entrée inoubliable avec nos calèches d’exception, pensées pour sublimer chaque instant de votre journée.
            <br /><br />
            Les Attelages du Temps vous accompagnent dans les moments les plus précieux : l’arrivée des mariés, mais aussi l’arrivée des enfants d’honneur, apportant douceur et poésie à la cérémonie.
            <br /><br />
            Nos différentes calèches, soigneusement sélectionnées, s’adaptent à l’ambiance de votre événement — du style romantique au plus authentique — pour créer une mise en scène élégante et cohérente.
            <br /><br />
            Chaque attelage devient également un décor idéal pour vos photos, offrant un cadre naturel, vivant et intemporel pour immortaliser vos souvenirs.
          </p>
        </div>

      </section>





      {/* 🎥 CINÉMA */}
      <section id="cinema" className="scroll-mt-32 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-32">

        {/* TEXTE */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#6E4B3A]">
            Cinéma
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Forts d’une solide expérience dans le milieu du cinéma et de l’audiovisuel, Les Attelages du Temps collaborent régulièrement avec des équipes de tournage pour donner vie à des scènes authentiques et immersives.
            <br /><br />
            Nos attelages s’adaptent à toutes les époques grâce à une large variété de calèches, chevaux et poneys soigneusement sélectionnés et entraînés pour le travail sur plateau.
            <br /><br />
            Habitués aux exigences du métier, nous assurons fiabilité, précision et adaptabilité sur chaque tournage, en respectant les contraintes artistiques et techniques des productions.
            <br /><br />
            Chaque détail est pensé pour s’adapter à l’univers visuel du cinéma et des reconstitutions.
          </p>
        </div>

        {/* CARROUSEL */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            effect="fade"
            navigation={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <SwiperSlide>
              <img src="/galerie-cinema/attelage-medieval.jpg" className="h-[380px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/galerie-cinema/attelage-renaissance.webp" className="h-[380px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/galerie-cinema/attelage-tandem.webp" className="h-[380px] w-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>

      </section>






      {/* 🎉 ÉVÉNEMENTIEL */}
      <section id="evenementiel" className="scroll-mt-32 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center pb-20">

        {/* CARROUSEL */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            effect="fade"
            navigation={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <SwiperSlide>
              <img src="/galerie-evenement/caleche-noel.png" className="h-[380px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/galerie-evenement/caleche-evenement.png" className="h-[380px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/galerie-evenement/attelage-evenement.png" className="h-[380px] w-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* TEXTE */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#6E4B3A]">
            Événementiel
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Pour vos événements, Les Attelages du Temps apportent une touche d’authenticité, de magie et d’élégance qui marque les esprits.
            <br /><br />
            Marchés de Noël, animations de fin d’année, arrivée du Père Noël en calèche, fêtes de village ou événements privés : nos attelages s’adaptent à chaque ambiance pour créer un moment vivant et mémorable.
            <br /><br />
            Nos chevaux et poneys, habitués au contact du public, participent à l’animation avec calme et prestance, offrant une expérience à la fois immersive et chaleureuse pour petits et grands.
            <br /><br />
            Nous adaptons chaque attelage à l’ambiance et au style de votre événement.
          </p>
        </div>

      </section>

    </main>
  );
}