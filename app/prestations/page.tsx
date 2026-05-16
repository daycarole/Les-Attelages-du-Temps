"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Prestations() {
  return (
    <main className="min-h-screen bg-[#F6F1E8] pt-28 md:pt-32 px-5 md:px-6">
 
 
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

      {/* TITRE */}
      <section className="text-center mb-14 md:mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#6E4B3A]">
          Nos Prestations
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Des expériences élégantes et intemporelles pour vos événements.
        </p>
      </section>




      {/* MARIAGE */}
<section
  id="mariage"
  className="scroll-mt-28 md:scroll-mt-32 max-w-6xl mx-auto mb-24 md:mb-32"
>
  {/* TITRE */}
  <div className="mb-4">
    <h2 className="text-3xl md:text-4xl font-bold text-[#6E4B3A]">
      Mariage
    </h2>
  </div>

  {/* ARRIVÉE EN CALÈCHE */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
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
          <img
            src="/galerie-mariage/poneys-mariage.jpg"
            alt="Arrivée en calèche pour mariage"
            className="h-[260px] md:h-[380px] w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/galerie-mariage/chevaux-mariage.jpg"
            alt="Chevaux attelés pour mariage"
            className="h-[260px] md:h-[380px] w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/galerie-mariage/poneys-caleche.webp"
            alt="Calèche de mariage avec poneys"
            className="h-[260px] md:h-[380px] w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <div>
      <p className="uppercase tracking-[0.25em] text-yellow-700 text-2xl mb-4">
        Arrivée en calèche
      </p>

    

      <p className="text-base text-gray-700 leading-relaxed">
        Offrez à votre mariage une arrivée inoubliable avec nos calèches
        d’exception, pensées pour sublimer chaque instant de votre journée.
        <br />
        <br />
        Les Calèches du Temps vous accompagnent dans les moments les plus
        précieux : l’arrivée des mariés, l’arrivée des enfants d’honneur ou
        encore les séances photo.
        <br />
        <br />
        Nos différentes calèches s’adaptent à l’ambiance de votre événement,
        du style romantique au plus authentique, pour créer une mise en scène
        élégante et cohérente.
      </p>
    </div>
  </div>

  {/* ARRIVÉE À CHEVAL */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
    <div className="order-2 md:order-1">
      <p className="uppercase tracking-[0.25em] text-yellow-700 text-2xl mb-4">
        Arrivée à cheval
      </p>

     

      <p className="text-base text-gray-700 leading-relaxed">
        Pour les mariés souhaitant une arrivée encore plus unique, nous
        proposons également des chevaux montés spécialement préparés pour les
        cérémonies.
        <br />
        <br />
        Chaque cheval est sélectionné pour son calme, son élégance et son
        tempérament afin de créer un moment fort, sécurisé et parfaitement
        adapté à l’ambiance de votre mariage.
        <br />
        <br />
        Cette prestation peut accompagner une entrée de cérémonie, une séance
        photo ou un moment privilégié lors de votre événement.
      </p>

      <a
        href="/chevaux"
        className="inline-block mt-8 bg-[#2B2622] text-white px-8 py-4 rounded-full hover:bg-[#463c36] transition"
      >
        Découvrir nos chevaux
      </a>
    </div>

    <div className="w-full order-1 md:order-2">
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
          <img
            src="/galerie-monte/princesse.webp"
            alt="Cheval monté pour mariage"
            className="h-[260px] md:h-[380px] w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/galerie-monte/espagnol.webp"
            alt="Arrivée à cheval pour les mariés"
            className="h-[260px] md:h-[380px] w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/galerie-monte/berbere.webp"
            alt="Cheval de cérémonie pour mariage"
            className="h-[260px] md:h-[380px] w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/galerie-monte/marie.webp"
            alt="Cheval de cérémonie pour mariage"
            className="h-[260px] md:h-[380px] w-full object-cover"
          />
        </SwiperSlide>


      </Swiper>
    </div>
  </div>
</section>



      {/* CINÉMA */}
      <section
        id="cinema"
        className="scroll-mt-28 md:scroll-mt-32 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-24 md:mb-32"
      >
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6E4B3A]">
            Cinéma
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Forts d’une solide expérience dans le milieu du cinéma et de
            l’audiovisuel, Les Attelages du Temps collaborent régulièrement avec
            des équipes de tournage pour donner vie à des scènes authentiques et
            immersives.
            <br />
            <br />
            Nos attelages s’adaptent à toutes les époques grâce à une large
            variété de calèches, chevaux et poneys soigneusement sélectionnés et
            entraînés pour le travail sur plateau.
            <br />
            <br />
            Habitués aux exigences du métier, nous assurons fiabilité, précision
            et adaptabilité sur chaque tournage, en respectant les contraintes
            artistiques et techniques des productions.
            <br />
            <br />
            Chaque détail est pensé pour s’adapter à l’univers visuel du cinéma
            et des reconstitutions.
          </p>
        </div>

        <div className="w-full order-1 md:order-2">
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
              <img
                src="/galerie-cinema/attelage-medieval.jpg"
                alt="Attelage médiéval"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/galerie-cinema/attelage-renaissance.webp"
                alt="Attelage Renaissance"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/galerie-cinema/attelage-tandem.webp"
                alt="Attelage en tandem"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/galerie-cinema/char-noirblanc.jpg"
                alt="Attelage char romain"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/galerie-cinema/char-profil.jpg"
                alt="Course de char romain"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/galerie-cinema/charette.jpg"
                alt="Charette paysane pour bestiaux"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/galerie-cinema/fayton.jpg"
                alt="Caleche break fayton"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/galerie-cinema/marathon.jpg"
                alt="Attelage en tmarathon"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </section>

      {/* ÉVÉNEMENTIEL */}
      <section
        id="evenementiel"
        className="scroll-mt-28 md:scroll-mt-32 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center pb-20"
      >
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
              <img
                src="/galerie-evenement/caleche-noel.png"
                alt="Calèche de Noël"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/galerie-evenement/caleche-evenement.png"
                alt="Calèche événementielle"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/galerie-evenement/attelage-evenement.png"
                alt="Attelage événementiel"
                className="h-[260px] md:h-[380px] w-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6E4B3A]">
            Événementiel
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Pour vos événements, Les Attelages du Temps apportent une touche
            d’authenticité, de magie et d’élégance qui marque les esprits.
            <br />
            <br />
            Marchés de Noël, animations de fin d’année, arrivée du Père Noël en
            calèche, fêtes de village ou événements privés : nos attelages
            s’adaptent à chaque ambiance pour créer un moment vivant et
            mémorable.
            <br />
            <br />
            Nos chevaux et poneys, habitués au contact du public, participent à
            l’animation avec calme et prestance, offrant une expérience à la fois
            immersive et chaleureuse pour petits et grands.
            <br />
            <br />
            Nous adaptons chaque attelage à l’ambiance et au style de votre
            événement.
          </p>
        </div>
      </section>
    </main>
  );
}