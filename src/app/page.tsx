import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Présentation", href: "#presentation" },
  { label: "Carte", href: "#specialites" },
  { label: "Expérience", href: "#experience" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

const experiencePillars = [
  {
    title: "Cuisine Signature",
    description:
      "Une carte courte axée sur les trésors de la Méditerranée, sublimés par les épices d’Oran.",
  },
  {
    title: "Service Haute Couture",
    description:
      "Une brigade dédiée à votre confort, rituels de table et attention discrète compris.",
  },
  {
    title: "Cadre Iconique",
    description:
      "Villa oranaise Art déco restaurée, terrasses végétalisées et vue imprenable sur la mer.",
  },
];

const galleryItems = [
  { src: "/interior.jpg", alt: "Salle du restaurant", caption: "L’élégance d’une villa oranaise" },
  { src: "/paella.jpg", alt: "Paella espagnole", caption: "Notre paella royale aux fruits de mer" },
  { src: "/dessert.jpg", alt: "Dessert méditerranéen", caption: "Douceurs inspirées des rivages méditerranéens" },
  { src: "/wine.jpg", alt: "Sélection de vins", caption: "Cave d’exception et accords sur mesure" },
];

const testimonials = [
  {
    name: "Sofia B.",
    rating: 5,
    date: "02/08/2025",
    quote:
      "Une parenthèse parfaite. Produits sublimes, cuisson impeccable et service d’une délicatesse rare.",
  },
  {
    name: "Karim L.",
    rating: 5,
    date: "18/07/2025",
    quote:
      "On retrouve l’âme du Méditerranéen dans chaque assiette. Mention spéciale à la paella et aux sauces.",
  },
];

const phoneNumber = "+213 541 00 11 22";
const phoneHref = "tel:+213541001122";

export default function Home() {
  return (
    <div className="relative isolate" id="accueil">
      <header className="sticky top-0 z-30 border-b border-white/60 bg-sand/90 backdrop-blur-xl">
        <div className="container-wide flex flex-wrap items-center gap-x-6 gap-y-4 py-4">
          <Link href="#accueil" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Le Méditerranéen By OH"
              width={58}
              height={58}
              priority
              className="h-14 w-14"
            />
            <div>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-ocean">
                Le Méditerranéen
              </span>
              <span className="block font-serif text-xl md:text-2xl text-ocean">
                By OH
              </span>
            </div>
          </Link>

          <nav className="order-3 w-full overflow-x-auto whitespace-nowrap text-sm font-medium text-graphite/70 lg:order-2 lg:w-auto lg:overflow-visible lg:whitespace-normal">
            <div className="flex gap-5 lg:items-center">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-ocean">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="order-2 ml-auto flex items-center gap-3 sm:order-3">
            <a
              href={phoneHref}
              className="flex items-center gap-2 rounded-full border border-ocean/40 px-4 py-2 text-sm font-semibold text-ocean transition hover:bg-ocean hover:text-sand"
            >
              <Phone size={16} />
              Réserver
            </a>
            <Link
              href="/annexe"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-graphite px-4 py-2 text-sm font-semibold text-sand hover:bg-ocean"
            >
              Annexe
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="pt-20 lg:pt-24">
          <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.05fr_0.85fr]">
            <div className="grid-card relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/hero.jpg"
                  alt="Cuisine méditerranéenne"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-midnight/60 to-transparent" />
              </div>
              <div className="relative z-10 max-w-xl p-8 text-white md:p-12">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">Restaurant Gastronomique</p>
                <h1 className="mt-6 text-4xl leading-tight md:text-5xl text-white">Le Méditerranéen By OH</h1>
                <p className="mt-6 text-white/85">
                  Une adresse d’exception à Oran, héritière de l’iconique Méditerranéen. Dans un décor somptueux, embarquez
                  pour un voyage culinaire où produits nobles et héritage algérien se rencontrent.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6 text-white/80">
                  <span className="flex items-center gap-2 text-lg font-semibold">
                    <Star className="text-coral" size={20} />
                    4.9/5 - 235 avis
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <MapPin size={18} />
                    Boulevard de l’Aurès, Oran
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <Clock size={18} />
                    Ouvert du mardi au dimanche - 12h - 23h
                  </span>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-md shadow-black/15 hover:bg-coral/90"
                  >
                    <Phone size={18} />
                    Réserver par téléphone
                  </a>
                  <Link
                    href="#specialites"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20"
                  >
                    Découvrir la carte
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid-card p-6">
                <h3 className="text-xl font-serif text-ocean">L’esprit Méditerranéen</h3>
                <p className="mt-4 text-sm md:text-base">
                  Nous servons ce que la Méditerranée offre de plus noble : poissons sauvages, crustacés et légumes de
                  saison, travaillés avec précision et passion.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-ocean/80">
                  <span className="rounded-full bg-ocean/10 px-4 py-2">Produits de pêche du jour</span>
                  <span className="rounded-full bg-ocean/10 px-4 py-2">Cave méditerranéenne</span>
                  <span className="rounded-full bg-ocean/10 px-4 py-2">Service signature</span>
                </div>
              </div>
              <div className="grid-card bg-dot-grid bg-[length:24px_24px] p-6">
                <h3 className="text-xl font-serif text-ocean">Maison historique</h3>
                <p className="mt-4 text-sm md:text-base">
                  Installé dans une bâtisse oranaise iconique, le restaurant rend hommage à une adresse légendaire en
                  offrant une parenthèse feutrée, ponctuée de concerts et dîners privés.
                </p>
                <Link href="#experience" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean">
                  Explorer notre univers
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="presentation">
          <div className="container-wide grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl">Une histoire d’héritage vivant</h2>
              <p>
                Le Méditerranéen By OH. Une adresse d’exception à Oran, pensée pour les fines bouches en quête d’une
                expérience gastronomique unique. Dans un décor à couper le souffle, notre maison — digne héritière du
                mythique Méditerranéen — vous invite à un voyage culinaire inoubliable.
              </p>
              <p>
                Nous servons avec passion ce que notre belle Méditerranée offre de plus noble : des produits d’une
                fraîcheur irréprochable, travaillés avec soin, goût et raffinement. Chaque création est sublimée par un
                zeste d’héritage culinaire algérien, révélant la richesse et l’élégance de nos traditions.
              </p>
              <p>
                Installé dans une somptueuse bâtisse oranaise, Le Méditerranéen By OH se veut plus qu’un restaurant : une
                célébration de la gastronomie algérienne, qui pour nous n’est pas seulement un art, mais un héritage
                vivant. Le partager avec vous est notre plus grand honneur.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-white/80 p-6 shadow-card">
                  <h3 className="text-sm uppercase tracking-[0.25em] text-ocean">Capacité</h3>
                  <p className="mt-2 text-2xl font-serif">90 couverts</p>
                  <span className="text-xs text-graphite/70">Deux salons privés inclus</span>
                </div>
                <div className="rounded-2xl bg-white/80 p-6 shadow-card">
                  <h3 className="text-sm uppercase tracking-[0.25em] text-ocean">Expérience</h3>
                  <p className="mt-2 text-2xl font-serif">Chef Omar H.</p>
                  <span className="text-xs text-graphite/70">30 ans de gastronomie algérienne</span>
                </div>
              </div>
            </div>
            <div className="grid-card overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image src="/interior.jpg" alt="Intérieur du Méditerranéen" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="specialites" className="bg-white/70">
          <div className="container-wide grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.4em] text-ocean">Signature</span>
              <h2 className="text-3xl md:text-4xl">La paella royale espagnole</h2>
              <p>
                Une ode à nos voisins ibériques : riz bomba safrané, langoustines, coques, poulpe grillé et chorizo affiné.
                Chaque service se prépare à la commande pour préserver le croquant du socarrat.
              </p>
              <ul className="grid gap-3 text-sm text-graphite/80">
                <li>• Préparation minute pour 2 à 6 convives</li>
                <li>• Option « Dakhla » avec homard bleu et boutargue</li>
                <li>• Accord mets & vins avec notre sommelier</li>
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-graphite px-5 py-3 text-sm font-semibold text-sand hover:bg-ocean"
              >
                Précommander votre paella
                <CalendarCheck size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid-card overflow-hidden">
                <div className="relative aspect-square">
                  <Image src="/paella.jpg" alt="Paella royale" fill className="object-cover" />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="grid-card overflow-hidden">
                  <div className="relative aspect-[4/5]">
                    <Image src="/dessert.jpg" alt="Dessert au safran" fill className="object-cover" />
                  </div>
                </div>
                <div className="grid-card overflow-hidden">
                  <div className="relative aspect-[4/5]">
                    <Image src="/wine.jpg" alt="Cave méditerranéenne" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.35em] text-ocean">Expérience sur mesure</span>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Plus qu’un dîner, un véritable voyage orchestré par la maison
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
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
        </section>

        <section id="galerie" className="bg-white/60">
          <div className="container-wide">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-ocean">Galerie</span>
                <h2 className="mt-4 text-3xl md:text-4xl">Instants saisis au Méditerranéen</h2>
              </div>
              <Link href="/annexe" className="inline-flex items-center gap-2 text-sm font-semibold text-ocean">
                Voir l’annexe conférences
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {galleryItems.map((item) => (
                <figure key={item.src} className="group grid-card overflow-hidden">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-5 text-sm text-graphite/80">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="avis">
          <div className="container-wide">
            <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.35em] text-ocean">Le dernier avis</span>
                <h2 className="text-3xl md:text-4xl">Ils racontent leur traversée</h2>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ocean/40 px-4 py-2 text-sm font-semibold text-ocean hover:bg-ocean hover:text-sand"
                >
                  Laisser un avis
                </Link>
              </div>
              <div className="grid gap-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="grid-card p-6">
                    <div className="flex items-center gap-3 text-sm font-semibold text-ocean">
                      <span>{testimonial.name}</span>
                      <span className="flex items-center gap-1 text-coral">
                        {Array.from({ length: testimonial.rating }).map((_, index) => (
                          <Star key={`${testimonial.name}-star-${index}`} size={16} fill="currentColor" className="text-coral" />
                        ))}
                      </span>
                      <span className="text-xs text-graphite/60">{testimonial.date}</span>
                    </div>
                    <p className="mt-4 text-sm md:text-base text-graphite/85">“{testimonial.quote}”</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white/70">
          <div className="container-wide grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid-card p-8">
              <span className="text-xs uppercase tracking-[0.35em] text-ocean">Réservation</span>
              <h2 className="mt-4 text-3xl md:text-4xl">Réserver par téléphone</h2>
              <p className="mt-4 text-graphite/80">
                Toute réservation se fait par téléphone afin de vous proposer l’accord parfait entre table, timing et
                exigences culinaires.
              </p>
              <a
                href={phoneHref}
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-ocean px-6 py-4 text-lg font-semibold text-black shadow-lg shadow-ocean/30 hover:bg-midnight"
              >
                <Phone size={20} />
                {phoneNumber}
              </a>
              <div className="mt-6 text-sm text-graphite/70">
                <p>Mardi - Dimanche : 12h00 - 23h00</p>
                <p>Lundi : Privatisation sur demande</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid-card p-6">
                <h3 className="text-xl font-serif text-ocean">Nous retrouver</h3>
                <p className="mt-3 text-sm text-graphite/80">Boulevard de l’Aurès, 31000 Oran, Algérie</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-ocean">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={16} /> Valet parking
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock size={16} /> Dress code élégant
                  </span>
                </div>
              </div>
              <div className="grid-card p-6">
                <h3 className="text-xl font-serif text-ocean">Rester informé</h3>
                <p className="mt-3 text-sm text-graphite/80">
                  Recevez les annonces de menus éphémères, dîners à quatre mains et soirées musicales.
                </p>
                <form className="mt-5 flex flex-wrap gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Votre email"
                    className="min-w-[200px] flex-1 rounded-full border border-ocean/30 bg-white px-4 py-3 text-sm focus:border-ocean focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-coral px-4 py-3 text-sm font-semibold text-white hover:bg-coral/90"
                  >
                    Ok
                  </button>
                </form>
                <div className="mt-4 flex items-center gap-4 text-ocean">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ocean/20 hover:bg-ocean hover:text-sand"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ocean/20 hover:bg-ocean hover:text-sand"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-sand/90">
        <div className="container-wide flex flex-col gap-6 py-8 text-sm text-graphite/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Le Méditerranéen By OH</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/annexe" className="hover:text-ocean">
              Annexe conférences
            </Link>
            <a href={phoneHref} className="hover:text-ocean">
              Réserver
            </a>
            <a href="mailto:contact@lemediterraneen.dz" className="hover:text-ocean">
              contact@lemediterraneen.dz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}



