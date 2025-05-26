import { FaFileExcel } from 'react-icons/fa'

export default function TableauSynthese() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="section-title">Tableau de Synthèse</h2>
      
      <div className="card p-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-gray-300 max-w-2xl">
            Retrouvez l'ensemble de mes compétences et expériences dans ce tableau de synthèse détaillé.
          </p>
          <a
            href="/Tableau_de_synthèse.xlsx"
            download
            className="btn flex items-center gap-2 mt-4"
          >
            <FaFileExcel className="w-5 h-5" />
            Télécharger le tableau de synthèse
          </a>
        </div>
      </div>
    </div>
  )
} 