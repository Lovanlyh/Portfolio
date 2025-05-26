import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      degree: "BTS SIO Option SLAM",
      school: "Lycée La Martinière Duchère",
      period: "2022 - 2024",
      description: "Formation en développement d'applications, bases de données, et services réseaux."
    },
    {
      degree: "Baccalauréat Général",
      school: "Lycée Saint-Exupéry",
      period: "2019 - 2022",
      description: "Spécialités Mathématiques et Numérique et Sciences Informatiques."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="section-title">Formation</h2>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-full">
                <FaGraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                <p className="text-lg font-medium">{edu.school}</p>
                <p className="text-sm text-gray-400 mt-1">{edu.period}</p>
                <p className="mt-3 text-gray-300">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 