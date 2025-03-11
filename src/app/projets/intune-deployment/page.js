'use client'
import { FaBook, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function IntuneDeploymentDoc() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-primary">Configuration et déploiement de téléphones via Intune</h1>
      
      <div className="flex gap-4 my-6">
        <a
          href="https://github.com/lovanlyh/intune-deployment"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          <span>Voir sur GitHub</span>
        </a>
        <a
          href="https://intune.microsoft.com"
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
          Projet réalisé en stage consistant à mettre en place une solution de gestion de flotte mobile
          avec Microsoft Intune, incluant la configuration, le déploiement et la sécurisation des appareils.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Microsoft Intune :</strong> Solution MDM pour la gestion des appareils mobiles
          </li>
          <li>
            <strong>Azure AD :</strong> Gestion des identités et des accès
          </li>
          <li>
            <strong>PowerShell :</strong> Automatisation des tâches d'administration
          </li>
          <li>
            <strong>Conditional Access :</strong> Politiques de sécurité conditionnelle
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Fonctionnalités principales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Configuration automatisée des appareils mobiles</li>
          <li>Déploiement des applications et des politiques de sécurité</li>
          <li>Gestion des mises à jour et des configurations</li>
          <li>Surveillance et reporting de l'état des appareils</li>
          <li>Protection des données d'entreprise</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Défis et solutions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
            <p>
              Mise en place de politiques de sécurité strictes tout en maintenant
              une expérience utilisateur fluide.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Automatisation</h3>
            <p>
              Développement de scripts PowerShell pour automatiser les tâches
              répétitives de configuration et de déploiement.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Compétences développées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Administration de solutions MDM</li>
          <li>Gestion de la sécurité mobile</li>
          <li>Scripting PowerShell</li>
          <li>Configuration d'Azure AD</li>
          <li>Gestion des politiques de sécurité</li>
        </ul>
      </section>
    </article>
  )
} 