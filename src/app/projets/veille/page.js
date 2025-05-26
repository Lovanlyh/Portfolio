'use client'
import Link from 'next/link'
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa'

export default function VeilleDoc() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-primary">Veille Technologique</h1>

      <section className="mb-8">
        <div className="space-y-4">
          <div className="card p-6 flex flex-col relative">
            <div className="flex items-center gap-4 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-lg">1</span>
              <h3 className="text-xl font-semibold m-0 text-primary">L'Intelligence Artificielle dans le Développement</h3>
            </div>
            <div className="text-sm text-gray-400 mb-2">Mars 2024</div>
            <p className="mb-4">
              Analyse de l'impact des outils d'IA comme GitHub Copilot et ChatGPT sur le développement logiciel. Comment ces technologies transforment les pratiques de programmation et augmentent la productivité des développeurs. Étude des cas d'utilisation concrets et des limites actuelles de ces technologies.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://github.blog/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium hover:bg-primary/30 transition-colors">GitHub Blog</a>
              <a href="https://openai.com/blog/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium hover:bg-primary/30 transition-colors">OpenAI</a>
              <a href="https://devops.com/ai-in-devops/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium hover:bg-primary/30 transition-colors">DevOps.com</a>
            </div>
            <div className="flex justify-end mt-6">
              <Link href="/projets/veille/ia" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium no-underline">
                <FaBook className="w-5 h-5" />
                Voir la fiche
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="space-y-4">
          <div className="card p-6 flex flex-col relative">
            <div className="flex items-center gap-4 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-lg">2</span>
              <h3 className="text-xl font-semibold m-0 text-primary">Les Frameworks JavaScript en 2024</h3>
            </div>
            <div className="text-sm text-gray-400 mb-2">Janvier 2024</div>
            <p className="mb-4">
              Comparaison des frameworks modernes (React, Vue, Angular) et analyse des nouvelles tendances comme Astro et Qwik. Impact sur le développement web et critères de choix pour les projets. Évaluation des performances, de la facilité d'utilisation et de l'écosystème de chaque framework.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://stateofjs.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium hover:bg-primary/30 transition-colors">State of JS</a>
              <a href="https://dev.to/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium hover:bg-primary/30 transition-colors">Dev.to</a>
              <a href="https://medium.com/tag/javascript" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium hover:bg-primary/30 transition-colors">Medium</a>
            </div>
            <div className="flex justify-end mt-6">
              <Link href="/projets/veille/frameworks" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium no-underline">
                <FaBook className="w-5 h-5" />
                Voir la fiche
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Cybersécurité</h2>
        <div className="space-y-4">
          <Link href="/projets/veille/cybersecurite" className="block no-underline">
            <div className="card p-6 cursor-pointer hover:bg-primary/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Tendances en sécurité informatique</h3>
              <p className="mb-4">
                Les dernières menaces et solutions en matière de cybersécurité.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.cert.ssi.gouv.fr/alerte/CERTFR-2024-ALE-001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/30 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>CERT-FR - Alertes de sécurité</span>
                </a>
                <a
                  href="https://www.anssi.fr/fr/actualites/les-10-menaces-prioritaires-de-lanssi-pour-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/30 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>ANSSI - Menaces prioritaires 2024</span>
                </a>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Cloud Computing</h2>
        <div className="space-y-4">
          <Link href="/projets/veille/cloud" className="block no-underline">
            <div className="card p-6 cursor-pointer hover:bg-primary/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Évolution des services cloud</h3>
              <p className="mb-4">
                Les dernières innovations et tendances dans le cloud computing.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.zdnet.com/article/cloud-computing-trends-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/30 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>ZDNet - Tendances Cloud 2024</span>
                </a>
                <a
                  href="https://www.infoq.com/articles/cloud-native-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/30 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>InfoQ - Cloud Native en 2024</span>
                </a>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Développement Web</h2>
        <div className="space-y-4">
          <Link href="/projets/veille/frameworks" className="block no-underline">
            <div className="card p-6 cursor-pointer hover:bg-primary/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Frameworks et outils modernes</h3>
              <p className="mb-4">
                Les dernières technologies et bonnes pratiques en développement web.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://nextjs.org/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/30 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Next.js Blog - Dernières mises à jour</span>
                </a>
                <a
                  href="https://react.dev/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/30 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>React Blog - Nouvelles fonctionnalités</span>
                </a>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </article>
  )
} 