'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import BtsSio from '@/components/sections/BtsSio'
import Veille from '@/components/sections/Veille'
import Loader from '@/components/Loader'
import Footer from '@/components/Footer'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fonction pour vérifier la qualité de la connexion
    const checkConnection = () => {
      if (!window.navigator) {
        setIsLoading(false)
        return
      }

      // Vérifier si le contenu est déjà en cache
      if (window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0]
        if (navigation && navigation.transferSize === 0) {
          setIsLoading(false)
          return
        }
      }

      // Vérifier la connexion
      if ('connection' in navigator) {
        // @ts-ignore
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
        if (connection) {
          const isSlowConnection = connection.downlink < 1.5 || // Moins de 1.5 Mbps
                                 connection.rtt > 500 || // Latence > 500ms
                                 connection.effectiveType === 'slow-2g' ||
                                 connection.effectiveType === '2g'
          setIsLoading(isSlowConnection)
        } else {
          setIsLoading(false)
        }
      } else {
        setIsLoading(false)
      }
    }

    // Vérifier la connexion au chargement
    checkConnection()

    // Écouter les changements de connexion
    if ('connection' in navigator) {
      // @ts-ignore
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
      if (connection) {
        connection.addEventListener('change', checkConnection)
        return () => connection.removeEventListener('change', checkConnection)
      }
    }

    // Fallback : désactiver le loader après 5 secondes si aucune détection n'a fonctionné
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(fallbackTimer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <Loader key="loader" />
      ) : (
        <div className="w-full">
          {/* Hero Section avec marge réduite */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-[80vh] flex items-center justify-center p-4 sm:p-8 mt-16"
          >
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">Hugo Prost-Pineau</h1>
              <p className="text-xl sm:text-2xl mb-6">Étudiant en BTS SIO - Option SLAM</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/lovanlyh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  <FaGithub className="h-8 w-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hugo-prostpineau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  <FaLinkedin className="h-8 w-8" />
                </a>
              </div>
            </div>
          </motion.section>

          <section id="about" className="min-h-screen flex items-center py-16 px-4 sm:px-8">
            <About />
          </section>

          <section id="skills" className="min-h-screen flex items-center py-16 px-4 sm:px-8">
            <Skills />
          </section>

          <section id="projects" className="min-h-screen flex items-center py-16 px-4 sm:px-8">
            <Projects />
          </section>

          <section id="bts-sio" className="min-h-screen flex items-center py-16 px-4 sm:px-8">
            <BtsSio />
          </section>

          <section id="veille" className="min-h-screen flex items-center py-16 px-4 sm:px-8">
            <Veille />
          </section>
          
          <Footer />
        </div>
      )}
    </AnimatePresence>
  )
} 