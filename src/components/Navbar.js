'use client'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projets' },
    { href: '#bts-sio', label: 'BTS SIO' },
    { href: '#veille', label: 'Veille' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Gestion de l'apparence de la navbar
      setIsScrolled(window.scrollY > 50)

      // Détection de la section active
      const sections = navLinks.map(link => link.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navbar backdrop-blur-md border-b border-accent-color/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" 
               onClick={(e) => scrollToSection(e, '#')}
               className="text-primary font-bold text-xl hover:opacity-80 transition-opacity">
              Portfolio
            </a>
            <div className="flex items-center ml-4 space-x-3">
              <a
                href="https://github.com/votre-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Menu pour mobile */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>

          {/* Menu pour desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary bg-primary/10'
                    : 'hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card-background border-t border-accent-color/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary bg-primary/10'
                      : 'hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 