'use client'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function ProjectLayout({ children }) {
  const router = useRouter()

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
          whileHover={{ x: -5 }}
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Retour aux projets</span>
        </motion.button>
        
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