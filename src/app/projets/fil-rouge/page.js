'use client'
import { FaBook, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function FilRougeDoc() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-primary">Projet fil rouge</h1>
      
      <div className="flex gap-4 my-6">
        <a
          href="https://github.com/lovanlyh/fil-rouge"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          <span>Voir sur GitHub</span>
        </a>
        <a
          href="https://fil-rouge-demo.fr"
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
          Application de gestion complète développée dans le cadre du BTS SIO, couvrant l'ensemble du cycle
          de développement, de l'analyse des besoins jusqu'au déploiement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>PHP :</strong> Langage principal pour le backend
          </li>
          <li>
            <strong>MySQL :</strong> Base de données relationnelle
          </li>
          <li>
            <strong>JavaScript :</strong> Interactivité côté client
          </li>
          <li>
            <strong>Bootstrap :</strong> Framework CSS pour l'interface utilisateur
          </li>
          <li>
            <strong>Git :</strong> Gestion de versions
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Fonctionnalités principales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Authentification et gestion des utilisateurs</li>
          <li>CRUD complet sur les différentes entités</li>
          <li>Interface responsive et moderne</li>
          <li>Gestion des droits d'accès</li>
          <li>Génération de rapports</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Défis et solutions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Architecture</h3>
            <p>
              Mise en place d'une architecture MVC pour une meilleure organisation
              du code et une maintenance facilitée.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
            <p>
              Implémentation des meilleures pratiques de sécurité : validation des
              entrées, protection contre les injections SQL, XSS, etc.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Compétences développées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Analyse et conception d'applications</li>
          <li>Développement full-stack</li>
          <li>Gestion de projet</li>
          <li>Sécurité des applications web</li>
          <li>Travail en équipe et versioning</li>
        </ul>
      </section>
    </article>
  )
} 