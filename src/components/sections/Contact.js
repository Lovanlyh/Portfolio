import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="section-title">Contact</h2>
      
      <div className="card p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Contactez-moi</h3>
            <p className="text-lg text-gray-300 mb-6">
              N'hésitez pas à me contacter pour toute question ou opportunité professionnelle.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary w-5 h-5" />
                <span>hugo.prostpineau@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary w-5 h-5" />
                <span>06 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary w-5 h-5" />
                <span>Lyon, France</span>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Nom</label>
                <input type="text" id="name" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full p-2 bg-gray-800 border border-gray-700 rounded"></textarea>
              </div>
              <button type="submit" className="btn mt-2">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 