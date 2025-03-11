export default function BtsSio() {
  const sections = [
    {
      title: "Le BTS SIO",
      content: "Le Brevet de Technicien Supérieur Services Informatiques aux Organisations est un diplôme reconnu qui forme des professionnels de l'informatique. Cette formation sur deux ans permet d'acquérir des compétences techniques et méthodologiques essentielles dans le domaine du numérique."
    },
    {
      title: "Option SLAM",
      content: "L'option Solutions Logicielles et Applications Métiers forme des spécialistes du développement. Elle permet d'acquérir les compétences nécessaires pour concevoir, développer et maintenir des solutions applicatives. Les étudiants apprennent la programmation, la gestion de bases de données et le développement web."
    },
    {
      title: "Compétences Développées",
      content: "Durant cette formation, j'ai développé des compétences en :\n- Programmation orientée objet\n- Développement web (front-end et back-end)\n- Gestion de bases de données\n- Cybersécurité\n- Gestion de projet\n- Communication professionnelle"
    },
    {
      title: "Débouchés",
      content: "Le BTS SIO ouvre de nombreuses portes : développeur d'applications, analyste programmeur, administrateur de bases de données, ou encore chef de projet junior. Il permet également une poursuite d'études en licence professionnelle ou école d'ingénieur."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
      <h2 className="section-title">BTS SIO</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="card p-4 bg-card-background shadow-lg rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-primary">{section.title}</h2>
            <p className="text-sm sm:text-base whitespace-pre-line">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 