import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="section-title text-center">À propos de moi</h2>
      <div className="card p-8 bg-card-background shadow-lg rounded-lg">
        <p className="text-base sm:text-lg mb-4 leading-relaxed">
          Je suis <span className="font-bold text-primary">Hugo Prost-Pineau</span>, actuellement en formation 
          <span className="font-semibold text-primary"> BTS SIO option SLAM</span> à l'EFREI PARIS.
        </p>
        <p className="text-base sm:text-lg mb-4 leading-relaxed">
        Étant présent en entreprise, je m'efforce d'apprendre le maximum de compétences pour pouvoir être 
        utile à cette dernière. Mon objectif est de devenir un développeur compétent et de contribuer à des projets innovants 
          qui améliorent la vie des utilisateurs. Je suis particulièrement intéressé par les technologies 
          web modernes et l'expérience utilisateur.
        </p>
      </div>
    </div>
  )
} 