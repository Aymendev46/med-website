import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Check, MapPin, Phone } from "lucide-react";

const amenities = [
  "Deux salles entièrement modulables (20 et 40 convives)",
  "Équipement audiovisuel premium (mur LED, sonorisation, micros HF)",
  "Menu business sur-mesure signé par le Chef Omar H.",
  "Brigade dédiée, accueil voiturier et conciergerie",
  "Possibilité de traduction simultanée et captation vidéo",
];

const phoneNumber = "+213 541 00 11 22";
const phoneHref = "tel:+213541001122";

export default function AnnexPage() {
  return (
    <div className="relative isolate min-h-screen" id="annexe">
      <section className="relative overflow-hidden pb-24 pt-28">
        <div className="absolute inset-0">
          <Image
            src="/interior.jpg"
            alt="Salle de conférence"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-midnight/80" />
        </div>
        <div className="container-wide relative z-10 text-white">
          <Link href="/" className="inline-flex items-center text-sm uppercase tracking-[0.35em] text-champagne/80">
            Retour à l’accueil
          </Link>
          <div className="mt-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl leading-tight font-serif">
              L’annexe du Méditerranéen - Vos dîners conférences sur mesure
            </h1>
            <p className="mt-6 text-lg text-champagne/90">
              Deux salles de conférence élégantes pour les entreprises et maisons souhaitant conjuguer prise de parole
              et gastronomie. Notre équipe imagine des scénographies mémorables, du cocktail d’accueil aux accords mets & vins.
            </p>
            <a
              href={phoneHref}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-coral px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white hover:bg-coral/90"
            >
              <Phone size={18} />
              Réserver la date
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.35em] text-ocean">Votre événement</span>
            <h2 className="text-3xl md:text-4xl">
              Deux salles, deux ambiances pour accueillir vos dîners conférences
            </h2>
            <p>
              « La Vigie » (40 couverts) offre une scène surélevée idéale pour les lancements et présentations produit.
              « L’Atlantide » (20 couverts) se prête aux conseils d’administration et rencontres confidentielles.
              Toutes deux bénéficient de la cuisine gastronomique du Chef Omar H. et d’une équipe dédiée.
            </p>
            <ul className="space-y-3 text-sm text-graphite/85">
              {amenities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-coral" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            <div className="grid-card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src="/hero.jpg" alt="Cocktail d’accueil" fill className="object-cover" />
              </div>
              <div className="p-6 text-sm text-graphite/70">
                <strong className="font-serif text-ocean">Cocktail de bienvenue</strong>
                <p className="mt-2">Ateliers mixologie, bouchées chaudes et accords champagnes.</p>
              </div>
            </div>
            <div className="grid-card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src="/paella.jpg" alt="Paella royale" fill className="object-cover" />
              </div>
              <div className="p-6 text-sm text-graphite/70">
                <strong className="font-serif text-ocean">Signature culinaire</strong>
                <p className="mt-2">La paella royale, préparée en live devant vos invités par la brigade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/70">
        <div className="container-wide grid gap-8 md:grid-cols-2">
          <div className="grid-card p-8">
            <span className="text-xs uppercase tracking-[0.35em] text-ocean">Services inclus</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Un accompagnement clé en main</h2>
            <p className="mt-4 text-graphite/80">
              Une équipe événementielle dédiée assure la coordination : brief initial, repérage technique, déroulé minute
              et présence le jour J. Nous orchestrons également vos moments artistiques (musique live, projections, discours).
            </p>
            <div className="mt-6 grid gap-4 text-sm text-graphite/80">
              <div className="rounded-2xl bg-white/80 p-4 shadow-card">
                <strong className="font-serif text-ocean">Logistique</strong>
                <p className="mt-1">Valet parking, signalétique personnalisée, hôtesses trilingues.</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-card">
                <strong className="font-serif text-ocean">Technique</strong>
                <p className="mt-1">Mur LED 4K, captation multi-caméras, diffusion streaming sur demande.</p>
              </div>
            </div>
          </div>
          <div className="grid-card p-8">
            <span className="text-xs uppercase tracking-[0.35em] text-ocean">Réserver</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Privatisez votre date</h2>
            <p className="mt-4 text-graphite/80">
              Contactez notre concierge événementiel pour construire votre proposition.
              Un devis sur-mesure vous est envoyé en 24h.
            </p>
            <div className="mt-6 space-y-4 text-sm text-graphite/80">
              <div className="flex items-center gap-3">
                <Phone className="text-coral" size={18} />
                <a href={phoneHref} className="font-semibold text-ocean hover:text-midnight">
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <CalendarCheck className="text-coral" size={18} />
                <span>Mardi - Dimanche - 12h00 - 23h00 - Lundi sur privatisation</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-coral" size={18} />
                <span>Boulevard de l’Aurès, Oran</span>
              </div>
            </div>
            <Link
              href="mailto:evenements@lemediterraneen.dz"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-graphite px-5 py-3 text-sm font-semibold text-sand hover:bg-ocean"
            >
              Demander un devis détaillé
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


