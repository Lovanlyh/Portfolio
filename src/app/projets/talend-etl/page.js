'use client'
import { FaBook, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function TalendETLDoc() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-primary">Gestion de BDD grâce à Talend</h1>
      
      <div className="flex gap-4 my-6">
        <a
          href="https://github.com/lovanlyh/talend-etl"
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
          Projet de mise en place d'un système ETL (Extract, Transform, Load) utilisant Talend Open Studio
          pour automatiser l'intégration et la transformation des données entre différentes sources.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Talend Open Studio :</strong> Outil ETL principal pour la gestion des flux de données
          </li>
          <li>
            <strong>MySQL :</strong> Système de gestion de base de données source et cible
          </li>
          <li>
            <strong>SQL :</strong> Langage de requêtage pour la manipulation des données
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Fonctionnalités principales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Extraction automatisée des données depuis diverses sources</li>
          <li>Transformation et nettoyage des données</li>
          <li>Chargement des données dans la base cible</li>
          <li>Journalisation des opérations ETL</li>
          <li>Gestion des erreurs et des exceptions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Défis et solutions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Intégration des données</h3>
            <p>
              Mise en place de processus robustes pour gérer les différents formats de données
              et assurer leur cohérence lors de l'intégration.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p>
              Optimisation des jobs Talend pour traiter efficacement de grands volumes de données
              tout en maintenant des performances acceptables.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Compétences développées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maîtrise des processus ETL</li>
          <li>Conception de flux de données complexes</li>
          <li>Optimisation des performances de traitement</li>
          <li>Gestion de la qualité des données</li>
          <li>Administration de bases de données</li>
        </ul>
      </section>
    </article>
  )
} 