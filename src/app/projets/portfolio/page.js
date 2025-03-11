'use client'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function PortfolioDoc() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-primary">Portfolio Personnel</h1>
      
      <div className="flex gap-4 my-6">
        <a
          href="https://github.com/lovanlyh/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          <span>Voir sur GitHub</span>
        </a>
        <a
          href="https://votre-portfolio.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <FaExternalLinkAlt className="w-4 h-4" />
          <span>Voir en ligne</span>
        </a>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
        <p>
          Ce portfolio a été développé pour présenter mes compétences, projets et expériences en tant qu'étudiant 
          en BTS SIO option SLAM. Il sert de vitrine professionnelle et démontre mes capacités en développement web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Next.js :</strong> Framework React pour le rendu côté serveur et une meilleure performance
          </li>
          <li>
            <strong>React :</strong> Bibliothèque JavaScript pour la construction d'interfaces utilisateur
          </li>
          <li>
            <strong>Tailwind CSS :</strong> Framework CSS utilitaire pour un design moderne et responsive
          </li>
          <li>
            <strong>Framer Motion :</strong> Bibliothèque d'animations pour des transitions fluides
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Fonctionnalités principales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Design responsive adapté à tous les appareils</li>
          <li>Mode sombre/clair avec transition fluide</li>
          <li>Animations et transitions pour une meilleure expérience utilisateur</li>
          <li>Sections détaillées pour les compétences, projets et formations</li>
          <li>Intégration avec les réseaux sociaux professionnels</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Défis et solutions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p>
              Utilisation des fonctionnalités de Next.js pour optimiser le chargement des pages et des images. 
              Mise en place du rendu côté serveur pour améliorer le SEO et la vitesse de chargement initial.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p>
              Création d'une interface adaptative avec Tailwind CSS, assurant une expérience utilisateur 
              optimale sur tous les appareils, du mobile au desktop.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Accessibilité</h3>
            <p>
              Implémentation des meilleures pratiques d'accessibilité pour rendre le site utilisable 
              par tous les visiteurs, incluant la navigation au clavier et les lecteurs d'écran.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Compétences développées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Développement frontend avec React et Next.js</li>
          <li>Conception d'interfaces utilisateur modernes</li>
          <li>Optimisation des performances web</li>
          <li>Gestion de projet et versioning avec Git</li>
          <li>Déploiement et hébergement d'applications web</li>
        </ul>
      </section>
    </article>
  )
} 