import { FaGithub, FaLinkedin } from 'react-icons/fa'

// Utilisation d'icônes simples sans dépendance externe
export default function Footer() {
  return (
    <footer className="bg-card-background py-10 mt-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 - Informations personnelles */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-primary mb-3">Hugo Prost-Pineau</h2>
            <p className="text-sm mb-2">Étudiant en BTS SIO - Option SLAM</p>
            <p className="text-sm mb-4">EFREI Paris</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/lovanlyh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hugo-prostpineau/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Colonne 2 - Contact */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <div className="mb-3">
              <a 
                href="mailto:hugoprostp@gmail.com" 
                className="text-sm hover:text-primary transition-colors flex items-center justify-center md:justify-start"
              >
                <span className="inline-block w-6 text-primary mr-2">✉️</span>
                hugoprostp@gmail.com
              </a>
            </div>
            <div>
              <a 
                href="tel:+33786356091" 
                className="text-sm hover:text-primary transition-colors flex items-center justify-center md:justify-start"
              >
                <span className="inline-block w-6 text-primary mr-2">📱</span>
                07 86 35 60 91
              </a>
            </div>
          </div>
          
          {/* Colonne 3 - Liens */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-primary">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-primary transition-colors">À propos</a>
              </li>
              <li>
                <a href="#skills" className="text-sm hover:text-primary transition-colors">Compétences</a>
              </li>
              <li>
                <a href="#projects" className="text-sm hover:text-primary transition-colors">Projets</a>
              </li>
              <li>
                <a href="#bts-sio" className="text-sm hover:text-primary transition-colors">BTS SIO</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs">© {new Date().getFullYear()} Hugo Prost-Pineau. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
} 