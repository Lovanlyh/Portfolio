'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import BtsSio from '../components/sections/BtsSio'
import Veille from '../components/sections/Veille'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import TableauSynthese from '../components/sections/TableauSynthese'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasCheckedConnection, setHasCheckedConnection] = useState(false)

  useEffect(() => {
    const checkConnection = () => {
      // Si le navigateur ne supporte pas l'API Connection
      if (!('connection' in navigator)) {
        setIsLoading(false)
        setHasCheckedConnection(true)
        return
      }

      // @ts-ignore
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

      if (connection) {
        const isSlowConnection = 
          connection.effectiveType === 'slow-2g' ||
          connection.effectiveType === '2g' ||
          connection.downlink < 0.5 || // Moins de 0.5 Mbps
          connection.rtt > 650 // Latence > 650ms

        setIsLoading(isSlowConnection)
      } else {
        setIsLoading(false)
      }
      
      setHasCheckedConnection(true)
    }

    // Vérifier la connexion immédiatement
    checkConnection()

    // Désactiver le loader après 3 secondes maximum
    const timeout = setTimeout(() => {
      setIsLoading(false)
      setHasCheckedConnection(true)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  // Ne rien afficher tant que nous n'avons pas vérifié la connexion
  if (!hasCheckedConnection) {
    return null
  }

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

          <section id="about" className="section-container">
            <About />
          </section>

          <section id="skills" className="section-container">
            <Skills />
          </section>

          <section id="projects" className="section-container">
            <Projects />
          </section>

          <section id="bts-sio" className="section-container">
            <BtsSio />
          </section>

          <section id="tableau-synthese" className="section-container">
            <TableauSynthese />
          </section>

          <section id="veille" className="section-container">
            <Veille />
          </section>
          
          <Footer />
        </div>
      )}
    </AnimatePresence>
  )
} 