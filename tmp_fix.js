const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const componentsCode = `
const PresentationContent = () => (
  <div className="space-y-12">
    <div className="grid items-stretch gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex flex-col justify-between space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl">Une histoire d’héritage vivant</h2>
          <div className="mt-6 grid-card overflow-hidden lg:hidden">
            <ClickableImage 
              src="/description_picture.jpg" 
              alt="Intérieur du Méditerranéen" 
              containerClassName="relative h-[550px] w-full" 
            />
          </div>
          <p className="mt-6">
            Le Méditerranéen. Une adresse d’exception à Oran, pensée pour les fines bouches en quête d’une
            expérience gastronomique unique. Dans un décor à couper le souffle, notre maison — digne héritière du
            mythique Méditerranéen — vous invite à un voyage culinaire inoubliable.
          </p>
          <p className="mt-4">
            Nous servons avec passion ce que notre belle Méditerranée offre de plus noble : des produits d’une
            fraîcheur irréprochable, travaillés avec soin, goût et raffinement. Chaque création est sublimée par un
            zeste d’héritage culinaire algérien, révélant la richesse et l’élégance de nos traditions.
          </p>
          <p className="mt-4">
            Installé dans une somptueuse bâtisse oranaise, Le Méditerranéen se veut plus qu’un restaurant : une
            célébration de la gastronomie algérienne, qui pour nous n’est pas seulement un art, mais un héritage
            vivant. Le partager avec vous est notre plus grand honneur.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-2xl bg-white/80 p-6 shadow-card">
            <h3 className="text-sm uppercase tracking-[0.25em] text-ocean">Capacité</h3>
            <p className="mt-2 text-2xl font-serif">90 couverts</p>
            <span className="text-xs text-graphite/70">Deux salons privés inclus</span>
          </div>
          <div className="rounded-2xl bg-white/80 p-6 shadow-card">
            <h3 className="text-sm uppercase tracking-[0.25em] text-ocean">Expérience</h3>
            <p className="mt-2 text-2xl font-serif">Cuisine signature</p>
            <span className="text-xs text-graphite/70">Cheffe de brigade formée à travers la Méditerranée</span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block grid-card overflow-hidden">
        <ClickableImage 
          src="/description_picture.jpg" 
          alt="Intérieur du Méditerranéen" 
          containerClassName="relative h-full min-h-[400px]" 
        />
      </div>
    </div>

    <ImageGallery images={[
      { src: "/IMG_6384.jpg", alt: "Ambiance Méditerranéenne" },
      { src: "/IMG_6385.jpg", alt: "Détail décor" },
      { src: "/IMG_6386.jpg", alt: "Lumière d'ambiance" }
    ]} />
  </div>
);

const ExperienceContent = () => (
  <>
    <div className="max-w-3xl mb-12">
      <span className="text-xs uppercase tracking-[0.35em] text-ocean">Expérience sur mesure</span>
      <h2 className="mt-4 text-3xl md:text-4xl">
        Plus qu’un dîner, un véritable voyage orchestré par la maison
      </h2>
    </div>
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
      <div className="grid-card overflow-hidden">
        <ClickableImage 
          src="/bateau.jpg" 
          alt="Bateau Le Méditerranéen" 
          containerClassName="relative aspect-[4/5]" 
        />
      </div>
      <div className="grid gap-6">
        {experiencePillars.map((pillar) => (
          <div key={pillar.title} className="grid-card flex flex-col justify-between p-6">
            <div>
              <h3 className="text-xl font-serif text-ocean">{pillar.title}</h3>
              <p className="mt-4 text-sm md:text-base text-graphite/80">{pillar.description}</p>
            </div>
            <div className="mt-6 h-1 w-16 rounded-full bg-coral/70" />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default function Home() {`;

// Replace export default
content = content.replace('export default function Home() {', componentsCode);

const mobileInjection = `
                </div>
              </div>
            </div>

            {/* Mobile presentation & experience injections */}
            <div className="lg:hidden flex flex-col gap-12 w-full pt-4">
              <div id="presentation-mobile">
                <PresentationContent />
              </div>
              <div id="experience-mobile">
                <ExperienceContent />
              </div>
            </div>

            <div className="space-y-6">`;

content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<div className="space-y-6">/s, mobileInjection);

const oldSectionsRegex = /\{\/\* Presentation section describing the restaurant's heritage \*\/\}\s*<section id="presentation">.*?\{\/\* Signature specialties section highlighting the paella \*\/\}/s;

const desktopSections = `{/* Presentation section describing the restaurant's heritage */}
        <section id="presentation" className="hidden lg:block pt-10">
          <div className="container-wide">
            <PresentationContent />
          </div>
        </section>

        {/* Experience pillars explaining our service philosophy */}
        <section id="experience" className="hidden lg:block pt-10">
          <div className="container-wide">
            <ExperienceContent />
          </div>
        </section>

        {/* Signature specialties section highlighting the paella */}`;

content = content.replace(oldSectionsRegex, desktopSections);

fs.writeFileSync('src/app/page.tsx', content);
console.log("Replaced successfully!");
