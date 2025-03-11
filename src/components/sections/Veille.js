export default function Veille() {
  const articles = [
    {
      number: 1,
      title: "L'Intelligence Artificielle dans le Développement",
      date: "Mars 2024",
      description: "Analyse de l'impact des outils d'IA comme GitHub Copilot et ChatGPT sur le développement logiciel. Comment ces technologies transforment les pratiques de programmation et augmentent la productivité des développeurs. Étude des cas d'utilisation concrets et des limites actuelles de ces technologies.",
      sources: ["GitHub Blog", "OpenAI", "DevOps.com"]
    },
    {
      number: 2,
      title: "Les Frameworks JavaScript en 2024",
      date: "Janvier 2024",
      description: "Comparaison des frameworks modernes (React, Vue, Angular) et analyse des nouvelles tendances comme Astro et Qwik. Impact sur le développement web et critères de choix pour les projets. Évaluation des performances, de la facilité d'utilisation et de l'écosystème de chaque framework.",
      sources: ["State of JS", "Dev.to", "Medium"]
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="section-title">Veille Technologique</h2>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={index} className="card p-6 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
              {article.number}
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-primary">{article.title}</h2>
              <p className="text-xs text-gray-500 mb-3">{article.date}</p>
              <p className="text-sm sm:text-base mb-4">{article.description}</p>
              <div className="flex flex-wrap gap-2">
                {article.sources.map((source, idx) => (
                  <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 