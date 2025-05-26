import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      title: "Technicien Informatique",
      company: "La Gonette",
      period: "Janvier 2023 - Juillet 2023",
      description: "Configuration et gestion des postes de travail, maintenance du réseau, assistance aux utilisateurs."
    },
    {
      title: "Développeur Web (Stage)",
      company: "PME Locale",
      period: "Mai 2022 - Juin 2022",
      description: "Développement d'une application web pour la gestion des stocks, utilisation de React et Node.js."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="section-title">Expérience Professionnelle</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-full">
                <FaBriefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                <p className="text-lg font-medium">{exp.company}</p>
                <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                <p className="mt-3 text-gray-300">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 