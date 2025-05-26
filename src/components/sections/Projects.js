import { FaGithub, FaExternalLinkAlt, FaBook } from 'react-icons/fa'
import Link from 'next/link'

export default function Projects() {
  const schoolProjects = [
    {
      title: "Portfolio",
      shortDescription: "Portfolio professionnel développé dans le cadre de l'épreuve E5 du BTS SIO. Présentation structurée des compétences techniques et professionnelles, des projets réalisés et des expériences en entreprise. Démonstration des compétences en développement web moderne et en communication professionnelle.",
      duration: "Janvier 2025 <-> Mai 2025",
      role: "Développeur Full-Stack",
      technologies: [
        { name: "Next.js", icon: "devicon-nextjs-original" },
        { name: "React", icon: "devicon-react-original" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" }
      ],
      github: "https://github.com/lovanlyh/portfolio",
      demo: "https://portfolio-hugo-prostpineau.vercel.app/",
      docPath: "/projets/portfolio"
    },
    {
      title: "Projet fil rouge",
      shortDescription: "Projet de développement d'application de gestion dans le cadre du BTS SIO, démontrant les compétences en analyse, conception et développement. Réalisation d'une application web (Next.js) et d'une application de bureau (Java), mettant en œuvre les compétences techniques et méthodologiques acquises.",
      duration: "Décembre 2024 <-> Mai 2025",
      role: "Développeur Full Stack",
      technologies: [
        { name: "PHP", icon: "devicon-php-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
        { name: "Git", icon: "devicon-git-plain" }
      ],
      github: [
        { url: "https://github.com/Lovanlyh/Client_leger_E6", label: "Client Léger" },
        { url: "https://github.com/Lovanlyh/Client_lourd_E6", label: "Client Lourd" }
      ],
      docPath: "/projets/fil-rouge"
    },
    {
      title: "Clone BDD Twitch",
      shortDescription: "Projet de modélisation de base de données réalisé dans le cadre du BTS SIO, démontrant les compétences en conception et administration de bases de données. Application des méthodes Merise (MCD, MLD, MPD) et mise en œuvre des compétences en SQL et en gestion de données.",
      duration: "Novembre 2024 <-> Décembre 2024",
      role: "Concepteur de Base de Données",
      technologies: [
        { name: "SQL", icon: "devicon-mysql-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "UML", icon: "devicon-markdown-original" },
        { name: "Merise", icon: "devicon-markdown-original" }
      ],
      docPath: "/projets/twitch-db"
    },
    {
      title: "Météo APP",
      shortDescription: "Application météo développée dans le cadre du BTS SIO, démontrant les compétences en développement web et en intégration d'API. Mise en œuvre des technologies modernes (Next.js, React) et des bonnes pratiques de développement (responsive design, gestion d'état, appel d'API).",
      duration: "Septembre 2024 <-> Novembre 2024",
      role: "Développeur Frontend",
      technologies: [
        { name: "React", icon: "devicon-react-original" },
        { name: "Next.js", icon: "devicon-nextjs-original" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
        { name: "API REST", icon: "devicon-nodejs-plain" }
      ],
      github: "https://github.com/Lovanlyh/La-Meteo-de-Hugo",
      demo: "https://la-meteo-de-hugo.vercel.app/",
      docPath: "/projets/meteo-app"
    },
  ]

  const professionalProjects = [
    {
      title: "Configuration et déploiement de téléphones via Intune",
      shortDescription: "Projet professionnel réalisé chez BIR dans le cadre du BTS SIO, démontrant les compétences en administration système et en sécurité informatique. Mise en place d'une solution de gestion de flotte mobile avec Microsoft Intune, incluant la configuration des politiques de sécurité et le déploiement automatisé.",
      duration: "Février 2024 <-> Juillet 2025",
      role: "Administrateur Systèmes",
      technologies: [
        { name: "Microsoft Intune", icon: "devicon-azure-plain" },
        { name: "Azure AD", icon: "devicon-azure-plain" },
        { name: "MDM", icon: "devicon-azure-plain" },
        { name: "PowerShell", icon: "devicon-powershell-plain" }
      ],
      docPath: "/projets/intune-deployment"
    },
    {
      title: "Gestion de BDD grâce à Talend",
      shortDescription: "Projet ETL réalisé dans le cadre du BTS SIO, démontrant les compétences en intégration et transformation de données. Utilisation de Talend pour l'automatisation des processus ETL et la synchronisation des données entre différentes sources, mettant en œuvre les compétences en développement et en gestion de données.",
      duration: "Décembre 2024 <-> Avril 2025",
      role: "Développeur ETL",
      technologies: [
        { name: "Talend Open Studio", icon: "devicon-java-plain" },
        { name: "SQL", icon: "devicon-mysql-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "ETL", icon: "devicon-apache-plain" }
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

      <div className="flex flex-wrap gap-2 mt-auto">
        {Array.isArray(project.github) ? (
          project.github.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              <span>{repo.label}</span>
            </a>
          ))
        ) : project.github && (
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