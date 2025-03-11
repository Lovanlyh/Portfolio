import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss,
  SiPhp,
  SiPostgresql,
  SiGit,
  SiTalend
} from 'react-icons/si'
import Image from 'next/image'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { 
          name: "HTML", 
          icon: "devicon-html5-plain",
          url: "https://developer.mozilla.org/fr/docs/Web/HTML"
        },
        { 
          name: "CSS", 
          icon: "devicon-css3-plain",
          url: "https://developer.mozilla.org/fr/docs/Web/CSS"
        },
        { 
          name: "JavaScript", 
          icon: "devicon-javascript-plain",
          url: "https://developer.mozilla.org/fr/docs/Web/JavaScript"
        },
        { 
          name: "React", 
          icon: "devicon-react-plain",
          url: "https://react.dev/"
        },
        { 
          name: "Next.js", 
          icon: "devicon-nextjs-plain",
          url: "https://nextjs.org/docs"
        },
        { 
          name: "Tailwind", 
          icon: "devicon-tailwindcss-plain",
          url: "https://tailwindcss.com/docs"
        }
      ]
    },
    {
      title: "Backend",
      skills: [
        { 
          name: "PHP", 
          icon: "devicon-php-plain",
          url: "https://www.php.net/docs.php"
        },
        { 
          name: "MySQL", 
          icon: "devicon-mysql-plain",
          url: "https://sql.sh/"
        },
        { 
          name: "PostgreSQL", 
          icon: "devicon-postgresql-plain",
          url: "https://www.postgresql.org/docs/"
        },
        { 
          name: "Node.js", 
          icon: "devicon-nodejs-plain",
          url: "https://nodejs.org/docs/latest/api/"
        }
      ]
    },
    {
      title: "Outils",
      skills: [
        { 
          name: "Git", 
          icon: "devicon-git-plain",
          url: "https://git-scm.com/doc"
        },
        {
          name: "VS Code",
          icon: "devicon-vscode-plain",
          url: "https://code.visualstudio.com/docs"
        },
        {
          name: "Nagios",
          icon: "devicon-ubuntu-plain",
          url: "https://www.nagios.org/documentation/"
        },
        {
          name: "Talend",
          icon: "devicon-java-plain",
          url: "https://www.talend.com/resources/documentation/"
        }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="section-title">Mes Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="card p-6">
            <h3 className="text-xl font-semibold mb-6 text-primary text-center">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <a
                  key={skillIndex}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <i className={`${skill.icon} text-primary text-3xl group-hover:scale-110 transition-transform`}></i>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 