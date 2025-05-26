'use client'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function ProjectLayout({ children }) {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/#projects">
          <motion.div
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 cursor-pointer"
            whileHover={{ x: -5 }}
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Retour aux projets</span>
          </motion.div>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
} 