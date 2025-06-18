import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import DoctorCard from '../components/team/DoctorCard';

const Team: React.FC = () => {
  const doctors = [
    {
      name: "Roberta Pontes",
      specialty: "Dermatologia Clínica",
      credentials: "CRM 123456 / RQE 78910",
      bio: "Dra. Roberta Pontes possui mais de 15 anos de experiência em dermatologia clínica, especializada em tratamento de acne e prevenção de câncer de pele. Concluiu sua residência no Hospital das Clínicas e é membro da Sociedade Brasileira de Dermatologia.",
      image: "/images/Roberta (28) (1).jpg"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Conheça Nossas Especialistas" 
          subtitle="Nossas dermatologistas certificadas combinam anos de experiência com educação contínua para oferecer a você o mais alto padrão de atendimento." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              credentials={doctor.credentials}
              bio={doctor.bio}
              image={doctor.image}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
          <h3 className="text-2xl font-playfair font-semibold mb-4 text-gray-900 dark:text-white">Agende sua Consulta</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para cuidar da saúde e beleza da sua pele com os tratamentos mais avançados e personalizados.
          </p>
          <a
            href="/booking"
            className="inline-block py-2 px-6 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white rounded-md transition-colors font-medium"
          >
            Agende Agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;