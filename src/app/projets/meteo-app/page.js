'use client'
import { FaBook, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function MeteoAppDoc() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-primary">Météo APP</h1>
      
      <div className="flex gap-4 my-6">
        <a
          href="https://github.com/lovanlyh/meteo-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          <span>Voir sur GitHub</span>
        </a>
        <a
          href="https://meteo-app-demo.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <FaExternalLinkAlt className="w-4 h-4" />
          <span>Voir la démo</span>
        </a>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
        <p>
          Application météo moderne développée avec React et Next.js, utilisant l'API OpenWeatherMap
          pour fournir des prévisions météorologiques précises et une expérience utilisateur optimale.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>React :</strong> Bibliothèque frontend pour l'interface utilisateur
          </li>
          <li>
            <strong>Next.js :</strong> Framework React pour le SSR et l'optimisation
          </li>
          <li>
            <strong>Tailwind CSS :</strong> Styling et design responsive
          </li>
          <li>
            <strong>OpenWeatherMap API :</strong> Données météorologiques en temps réel
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Fonctionnalités principales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Géolocalisation automatique</li>
          <li>Prévisions météo sur 5 jours</li>
          <li>Recherche de villes</li>
          <li>Affichage des conditions météorologiques en temps réel</li>
          <li>Interface responsive et intuitive</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Défis et solutions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p>
              Optimisation des requêtes API et mise en cache des données pour
              une expérience utilisateur fluide.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">UX Design</h3>
            <p>
              Création d'une interface intuitive et responsive adaptée à tous
              les appareils et conditions d'utilisation.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Compétences développées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Développement frontend moderne</li>
          <li>Intégration d'APIs REST</li>
          <li>Gestion d'état avec React</li>
          <li>Design responsive</li>
          <li>Optimisation des performances</li>
        </ul>
      </section>
    </article>
  )
} 