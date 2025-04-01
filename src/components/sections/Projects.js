import { FaGithub, FaExternalLinkAlt, FaBook } from 'react-icons/fa'
import Link from 'next/link'

export default function Projects() {
  const schoolProjects = [
    {
      title: "Portfolio",
      shortDescription: "Portfolio personnel présentant mes compétences et projets, développé avec Next.js et Tailwind CSS.",
      duration: "Mars 2024",
      role: "Développeur Full-Stack",
      technologies: [
        { name: "Next.js", icon: "devicon-nextjs-original" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" }
      ],
      github: "https://github.com/lovanlyh/portfolio",
      demo: "https://portfolio-hugo-prostpineau.vercel.app/",
      docPath: "/projets/portfolio"
    },
    {
      title: "Projet fil rouge",
      shortDescription: "Application de gestion complète couvrant l'analyse, la conception et le développement.",
      duration: "Projet scolaire - 1 semestre",
      role: "Développeur Full Stack",
      technologies: [
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" }
      ],
      docPath: "/projets/fil-rouge"
    },
    {
      title: "Clone BDD Twitch",
      shortDescription: "Modélisation complète d'une base de données inspirée de Twitch avec MCD, MLD, MPD.",
      duration: "Projet scolaire - 5 semaines",
      role: "Concepteur de Base de Données",
      technologies: [
        { name: "SQL", icon: "devicon-mysql-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "UML", icon: "devicon-markdown-original" },
        { name: "Merise", icon: "devicon-markdown-original" }
      ],
      docPath: "/projets/twitch-db"
    },
    {
      title: "Météo APP",
      shortDescription: "Application météo avec géolocalisation et prévisions utilisant l'API OpenWeatherMap.",
      duration: "Projet personnel - 3 semaines",
      role: "Développeur Frontend",
      technologies: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-original" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
        { name: "API REST", icon: "devicon-nodejs-plain colored" }
      ],
      docPath: "/projets/meteo-app"
    },
  ]

  const professionalProjects = [
    {
      title: "Configuration et déploiement de téléphones via Intune",
      shortDescription: "Solution de gestion de flotte mobile avec Microsoft Intune, incluant la sécurité et le déploiement automatisé.",
      duration: "Stage - 6 semaines",
      role: "Administrateur Systèmes",
      technologies: [
        { name: "Microsoft Intune", icon: "devicon-azure-plain colored" },
        { name: "Azure AD", icon: "devicon-azure-plain colored" },
        { name: "MDM", icon: "devicon-azure-plain colored" },
        { name: "PowerShell", icon: "devicon-powershell-plain colored" }
      ],
      docPath: "/projets/intune-deployment"
    },
    {
      title: "Gestion de BDD grâce à Talend",
      shortDescription: "Système ETL avec Talend pour l'automatisation de l'intégration et la transformation de données.",
      duration: "Projet scolaire - 4 semaines",
      role: "Développeur ETL",
      technologies: [
        { name: "Talend Open Studio", icon: "devicon-java-plain colored" },
        { name: "SQL", icon: "devicon-mysql-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "ETL", icon: "devicon-apache-plain colored" }
      ],
      docPath: "/projets/talend-etl"
    },
  ]

  const ProjectCard = ({ project }) => (
    <div className="card p-6 flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
        <p className="text-sm mb-4">{project.shortDescription}</p>
        
        <div className="mb-4">
          <p className="text-sm"><span className="font-medium">Période :</span> {project.duration}</p>
          <p className="text-sm"><span className="font-medium">Rôle :</span> {project.role}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs flex items-center gap-2"
            >
              <i className={tech.icon} style={{ fontSize: '1.2em' }}></i>
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-4 pt-4 border-t border-accent-color/10">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Démo</span>
          </a>
        )}
        <Link
          href={project.docPath}
          className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors ml-auto"
        >
          <FaBook className="w-4 h-4" />
          <span>Documentation</span>
        </Link>
      </div>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
      <h2 className="section-title">Mes Projets</h2>

      <div className="mb-24">
        <h3 className="text-2xl font-semibold mb-8 text-primary">Projets Scolaires</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schoolProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-8 text-primary">Projets Professionnels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
} 