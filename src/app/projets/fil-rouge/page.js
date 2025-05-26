'use client'
import { FaBook, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function FilRougeDoc() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-primary">Projet fil rouge</h1>
      
      <div className="flex flex-wrap gap-4 my-6">
        <a
          href="https://github.com/Lovanlyh/Client_leger_E6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          <span>Client Léger</span>
        </a>
        <a
          href="https://github.com/Lovanlyh/Client_lourd_E6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          <span>Client Lourd</span>
        </a>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
        <p>
          Développement d'un réseau social inspiré de Twitter, réalisé dans le cadre du BTS SIO. 
          Le projet comprend deux versions : un client web léger (Next.js) et un client lourd (Java), permettant aux utilisateurs de partager des messages courts, 
          interagir avec d'autres utilisateurs et gérer leur profil.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Next.js :</strong> Framework React pour le client léger
          </li>
          <li>
            <strong>Java :</strong> Langage principal pour le client lourd
          </li>
          <li>
            <strong>MySQL :</strong> Base de données relationnelle
          </li>
          <li>
            <strong>Spring Boot :</strong> Framework backend pour l'API REST
          </li>
          <li>
            <strong>Git :</strong> Gestion de versions
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Fonctionnalités principales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Création et gestion de compte utilisateur</li>
          <li>Publication de messages courts </li>
          <li>Système de suivi (followers/following)</li>
          <li>Interactions (likes, retweets, commentaires)</li>
          <li>Feed personnalisé basé sur les abonnements</li>
          <li>Recherche d'utilisateurs et de messages</li>
          <li>Notifications en temps réel</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Défis et solutions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Architecture</h3>
            <p>
              Mise en place d'une architecture microservices pour gérer la scalabilité et 
              la maintenance du système. Séparation claire entre le frontend et le backend 
              pour permettre le développement parallèle des deux clients.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p>
              Optimisation des requêtes de base de données et mise en place d'un système 
              de cache pour améliorer les temps de réponse. Implémentation de la pagination 
              pour le chargement des messages.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
            <p>
              Implémentation de l'authentification JWT, validation des entrées utilisateur, 
              et protection contre les attaques courantes (XSS, CSRF, injection SQL).
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Compétences développées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Développement full-stack avec Next.js et Java</li>
          <li>Conception et implémentation d'API REST</li>
          <li>Gestion de base de données relationnelle</li>
          <li>Mise en place d'une architecture microservices</li>
          <li>Développement d'interfaces utilisateur réactives</li>
          <li>Sécurité des applications web</li>
          <li>Travail en équipe avec Git</li>
        </ul>
      </section>
    </article>
  )
} 