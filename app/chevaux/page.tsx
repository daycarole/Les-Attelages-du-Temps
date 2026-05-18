"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const chevaux = [
  {
    nom: "Crème",
    portrait: "/galerie-chevaux/creme-portrait.png",
    description: `
Crème attire immédiatement les regards avec sa robe blanche éclatante et ses yeux bleus uniques. Élégant et délicat, il apporte à votre mariage une atmosphère digne des plus beaux contes, pour une arrivée pleine de magie et d’émotion.`, 

images: [        
  "/galerie-chevaux/creme/oeil.jpg",
      "/galerie-chevaux/creme/assis.jpg",
      "/galerie-chevaux/creme/roi.jpg",
      "/galerie-chevaux/creme/berbere.jpg",
      "/galerie-chevaux/creme/tete.jpg"
    ],
  },

  {
    nom: "Camaleon",
    portrait: "/galerie-chevaux/cama-portrait.jpg",
    description:
"Avec sa grande taille et son allure imposante, Camaleon dégage une présence naturelle qui marque les esprits. À la fois noble et calme, il accompagne les mariés avec élégance pour créer un moment fort et inoubliable." ,   
images: [
      "/galerie-chevaux/Cama/piaffe.jpg",
      "/galerie-chevaux/Cama/parc.webp",
      "/galerie-chevaux/Cama/cabre.png",
      "/galerie-chevaux/Cama/fumee.webp",
    ],
  },

  {
    nom: "Smart",
    portrait: "/galerie-chevaux/smart-portrait.png",
    description:
"Smart séduit par sa jolie robe alezane et son regard plein de douceur. Gentil et proche de l’humain, il apporte une ambiance chaleureuse et sincère, parfaite pour un mariage rempli d’émotion et de simplicité.",
    images: [
      "/galerie-chevaux/Smart/monte.webp",
      "/galerie-chevaux/Smart/couche.jpg",
      "/galerie-chevaux/Smart/cabre.png",
      "/galerie-chevaux/Smart/assis.jpg",
    ],
  },

  {
    nom: "Sito",
    portrait: "/galerie-chevaux/Sito-portrait.jpg",
    description:
"Sito impressionne par son élégance naturelle et sa superbe robe noire. Chic et raffiné, il accompagne les mariés avec calme et prestance pour une entrée pleine de charme et de caractère.",
    images: [
      "/galerie-chevaux/Sito/monte.webp",
      "/galerie-chevaux/Sito/assis.webp",
      "/galerie-chevaux/Sito/public.webp",
      "/galerie-chevaux/Sito/trot.webp",
    ],
  },

  {
    nom: "Quimero",
    portrait: "/galerie-chevaux/Quimero/portrait.webp",
    description:
"Quimero est un magnifique cheval bai au regard doux et à l’allure harmonieuse. Attelé aux côtés de son frère Banderin, il apporte beaucoup d’élégance et d’authenticité aux mariages, dans une ambiance à la fois raffinée et naturelle.",
    images: [
      "/galerie-chevaux/Quimero/bride.webp",
      "/galerie-chevaux/Quimero/monte.webp",
      "/galerie-chevaux/Quimero/studio.jpg",
      "/galerie-chevaux/Quimero/trot.webp",
    ],
  },

  {
    nom: "Banderin",
    portrait: "/galerie-chevaux/Banderin/portrait.jpg",
    description:
"Plein d’énergie et de présence, Banderin attire immédiatement l’attention par son élégance et son tempérament expressif. Aux côtés de Quimero, il apporte rythme, caractère et intensité pour une arrivée qui ne laisse personne indifférent.",
    images: [
      "/galerie-chevaux/Banderin/monte.webp",
      "/galerie-chevaux/Banderin/trot.webp",
      "/galerie-chevaux/Banderin/portrait.jpg",
     
    ],
  },

{
    nom: "Flash",
    portrait: "/galerie-chevaux/Flash/portrait.jpg",
    description:
"Avec sa robe claire et ses yeux bleus apaisants, Flash dégage beaucoup de douceur. Gentil et lumineux, il accompagne les mariés avec calme et délicatesse pour créer un moment tendre et rempli d’émotion.",
    images: [
      "/galerie-chevaux/Flash/balade.jpg",
      "/galerie-chevaux/Flash/profil.jpg",
      "/galerie-chevaux/Flash/monte.jpg",
      
    ],
  },

  {
    nom: "Marcel",
    portrait: "/galerie-chevaux/Marcel/portrait.jpg",
    description:
"Grand cheval noir au tempérament paisible, Marcel séduit par sa présence rassurante et son élégance naturelle. Calme et attentif, il apporte beaucoup de sérénité et de prestance lors des cérémonies et des séances photo.",
    images: [  
      "/galerie-chevaux/Marcel/liberte.jpg",
      "/galerie-chevaux/Marcel/chevalier.jpg",
      "/galerie-chevaux/Marcel/voltige.jpg",
     
    ],
  },

  {
    nom: "Guizmo",
    portrait: "/galerie-chevaux/Guizmo/portrait.jpg",
    description:
"Guizmo est un adorable poney palomino au tempérament joueur et malicieux. Attelé avec Mogwaï, il accompagne les enfants d’honneur dans une ambiance joyeuse et pleine de tendresse, pour des souvenirs aussi drôles qu’inoubliables.",
    images: [
      "/galerie-chevaux/Guizmo/attelage.png",
      "/galerie-chevaux/Guizmo/liberte.jpg",
      
    ],
  },

  {
    nom: "Mogwaï",
    portrait: "/galerie-chevaux/Mogwai/portrait.jpg",
    description:
"Mogwaï est un poney palomino doux et patient, particulièrement apprécié des enfants. Aux côtés de Guizmo, il participe avec calme et gentillesse aux mariages en apportant une touche chaleureuse et pleine de poésie.",
    images: [  
      "/galerie-chevaux/Mogwai/attelage.jpg",
      "/galerie-chevaux/Mogwai/liberte.jpg",
      "/galerie-chevaux/Mogwai/dos.jpg",
     
    ],
  },

];

export default function ChevauxPage() {
  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#1B1B1B] pt-28 md:pt-32 px-5 md:px-6">
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
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#6E4B3A]">
          Nos Chevaux
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Découvrez les chevaux qui accompagnent nos prestations de mariage.
         Habitués aux spectacles, à la foule et à l’ambiance des événements, nos chevaux évoluent avec calme et sérénité afin de vous offrir un moment magique pour votre mariage.
        </p>
      </section>

      {/* CHEVAUX */}
      <section className="max-w-6xl mx-auto space-y-24 pb-24">
        {chevaux.map((cheval, index) => {
          const inverse = index % 2 !== 0;

          return (
            <article
              key={cheval.nom}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
            >
              {/* CARROUSEL */}
              <div className={inverse ? "order-2 md:order-2" : "order-2 md:order-1"}>
                <Swiper
                  modules={[Autoplay, Navigation, EffectFade]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  effect="fade"
                  navigation={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  {cheval.images.map((image, imageIndex) => (
                    <SwiperSlide key={image}>
                      <img
                        src={image}
                        alt={`${cheval.nom} photo ${imageIndex + 1}`}
                        className="w-full h-[330px] md:h-[520px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* TEXTE */}
              <div className={inverse ? "order-1 md:order-1" : "order-1 md:order-2"}>
                {/* PORTRAIT */}
                <div className="mb-8 flex justify-center md:justify-start">
                  <div className="relative w-44 h-44 md:w-60 md:h-60">
                    {/* HALO FLOU */}
                    <div className="absolute inset-0 rounded-full bg-[#C6A27E]/50 blur-3xl scale-125" />

                    {/* CONTENEUR IMAGE */}
                    <div
  className={`relative w-full h-full ${
    ["Quimero", "Flash"].includes(cheval.nom)
      ? "scale-x-[1]"
      : "scale-x-[-1]"
  }`}
>
                      <img
                        src={cheval.portrait}
                        alt={`Portrait de ${cheval.nom}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* NOM */}
                <p className="uppercase tracking-[0.25em] text-yellow-700 text-2xl mb-4">
                  {cheval.nom}
                </p>

                {/* DESCRIPTION */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {cheval.description}
                </p>
              </div>
            </article>
          );
        })}
      </section>

      {/* TEXTE FIN */}
<section className="max-w-4xl mx-auto text-center pb-24 px-6">
  <p className="text-base md:text-lg text-[#6E4B3A] leading-relaxed italic">
    Si vous n'avez pas trouvé votre perle, alors elle se trouve sûrement dans
    nos écuries.
    <br />
    <br />
    N'hésitez pas à nous contacter : les chevaux présentés sur cette page ne
    sont qu’un échantillon de notre cavalerie.
  </p>
</section>
    </main>
  );
}