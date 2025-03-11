'use client'
import { FaBook, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function TwitchDBDoc() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-primary">Clone BDD Twitch</h1>
      
      <div className="flex gap-4 my-6">
        <a
          href="https://github.com/lovanlyh/twitch-db"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          <span>Voir sur GitHub</span>
        </a>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
        <p>
          Projet de modélisation d'une base de données inspirée de Twitch, comprenant une analyse
          complète et la création des modèles conceptuels, logiques et physiques de données.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>MySQL :</strong> Système de gestion de base de données
          </li>
          <li>
            <strong>UML :</strong> Modélisation des diagrammes de classes
          </li>
          <li>
            <strong>Merise :</strong> Méthodologie de conception
          </li>
          <li>
            <strong>SQL :</strong> Création et manipulation de la base de données
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Fonctionnalités modélisées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Gestion des utilisateurs et des chaînes</li>
          <li>Système de streaming et VOD</li>
          <li>Gestion des abonnements et des dons</li>
          <li>Système de chat et de modération</li>
          <li>Statistiques et analytics</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Défis et solutions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Complexité des relations</h3>
            <p>
              Gestion des relations complexes entre les différentes entités tout en
              maintenant la cohérence et les performances de la base de données.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Optimisation</h3>
            <p>
              Conception d'une structure optimisée pour gérer efficacement de grands
              volumes de données et de transactions simultanées.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Compétences développées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Modélisation de bases de données complexes</li>
          <li>Analyse et conception de systèmes</li>
          <li>Optimisation des performances</li>
          <li>Gestion des contraintes d'intégrité</li>
          <li>Documentation technique</li>
        </ul>
      </section>
    </article>
  )
} 