import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import TreatmentCard from '../components/treatments/TreatmentCard';
import FaqAccordion from '../components/faq/FaqAccordion';

const Treatments: React.FC = () => {
  const treatments = [
    {
      id: "pequenas-cirurgias",
      title: "Pequenas Cirurgias",
      description: "Reduza linhas finas e rugas com nossos tratamentos precisos de Botox, administrados por dermatologistas certificados para uma aparência natural e renovada.",
      image: "/images/tratamentos/Pequenas-cirurgias.png"
    },
    {
      id: "ultrassom",
      title: "Ultrassom Micro e Macrofocado",
      description: "Restaure o volume e melhore os contornos faciais com preenchedores premium de ácido hialurônico, adaptados à sua estrutura facial única e objetivos estéticos.",
      image: "/images/tratamentos/Ultrassom.png",
    },
    {
      id: "botox",
      title: "Tratamento com Botox",
      description: "Revele uma pele mais brilhante e suave com nossos peelings químicos personalizados que combatem hiperpigmentação, acne, linhas finas e textura irregular.",
      image: "/images/tratamentos/Botox.png"
    },
    {
      id: "estimulantes",
      title: "Bioestimulantes de Colágeno",
      description: "Tratamentos abrangentes para acne combinando produtos de grau médico, procedimentos e orientações de estilo de vida para uma pele limpa e saudável.",
      image: "/images/tratamentos/Bioestimulante-de-colageno.png"
    },
    {
      id: "fillers",
      title: "Preenchimento com ácido hialurônico",
      description: "O preenchimento com ácido hialurônico é um procedimento versátil que pode ser usado para restaurar volume, suavizar linhas e rugas, e melhorar os contornos faciais.",
      image: "/images/tratamentos/preenchimento.png"
    },
    {
      id: "biostimulants",
      title: "Bioestimulantes Injetáveis",
      description: "Os bioestimulantes são substâncias que estimulam a produção natural de colágeno, melhorando a qualidade e textura da pele de forma gradual e natural.",
      image: "/images/tratamentos/injetaveis.png"
    },
    {
      id: "lasers",
      title: "Tratamentos a Laser",
      description: "Planos de tratamento antienvelhecimento personalizados utilizando uma combinação de cuidados preventivos, tratamentos tópicos e procedimentos não invasivos.",
      image: "/images/tratamentos/Laser.png"
    },
    {
      id: "fios-pdo",
      title: "Fios PDO",
      description: "Estimule a produção de colágeno e melhore a textura da pele com microagulhamento de grau médico, eficaz para cicatrizes, estrias e rejuvenescimento geral.",
      image: "/images/tratamentos/PDO.png"
    },
    {
      id: "esvaziadores",
      title: "Esvaziadores de Gordura",
      description: "Terapia de luz direcionada para tratar condições inflamatórias da pele como psoríase, eczema e vitiligo de maneira suave e não invasiva.",
      image: "/images/tratamentos/esvaziadores.png"
    },
    {
      id: "mesoterapia-capilar",
      title: "Mesoterapia Capilar",
      description: "Tratamento eficaz para vasinhos e pequenas varizes usando soluções injetáveis para colapsar e desvanecer veias visíveis.",
      image: "/images/tratamentos/Capilar.png"
    },
    {
      id: "microagulhamento",
      title: "Microagulhamento",
      description: "Tratamento eficaz para vasinhos e pequenas varizes usando soluções injetáveis para colapsar e desvanecer veias visíveis.",
      image: "/images/tratamentos/Microagulhamento.png"
    }
  ];

  const faqs = [
    {
      question: "Como saber qual tratamento é adequado para mim?",
      answer: "Durante sua consulta inicial, nossos dermatologistas avaliarão sua condição de pele, discutirão suas preocupações e objetivos, e recomendarão os tratamentos mais adequados com base em suas necessidades específicas. Consideramos fatores como tipo de pele, histórico médico e resultados desejados para criar um plano de tratamento personalizado."
    },
    {
      question: "Com que frequência devo fazer tratamentos como Botox ou preenchedores?",
      answer: "A frequência dos tratamentos varia por indivíduo e tipo de tratamento. Normalmente, os resultados do Botox duram 3-4 meses, enquanto os preenchedores dérmicos podem durar de 6 a 18 meses, dependendo do produto utilizado e da área tratada. Durante sua consulta, criaremos um cronograma de manutenção personalizado para suas necessidades."
    },
    {
      question: "Esses tratamentos são dolorosos?",
      answer: "A maioria dos tratamentos envolve desconforto mínimo. Para tratamentos injetáveis como Botox e preenchedores, usamos agulhas ultrafinas e podemos aplicar creme anestésico tópico antes. Para tratamentos como peelings químicos ou terapia a laser, você pode sentir uma sensação de aquecimento ou formigamento leve, mas raramente dor significativa. Seu conforto é nossa prioridade."
    },
    {
      question: "Qual é o tempo de recuperação associado a esses procedimentos?",
      answer: "O tempo de recuperação varia conforme o tratamento. Botox e preenchedores geralmente não têm tempo de inatividade além de possíveis pequenos hematomas. Peelings químicos podem causar vermelhidão e descamação por 5-7 dias, dependendo da intensidade. Os tratamentos a laser variam bastante, desde nenhum tempo de inatividade até vários dias de vermelhidão. Discutiremos o tempo de recuperação esperado antes do seu tratamento."
    },
    {
      question: "Quanto tempo leva para ver resultados do meu tratamento?",
      answer: "Os prazos de resultado variam por tratamento. O Botox normalmente mostra resultados em 3-7 dias, atingindo efeito completo em 2 semanas. Preenchedores proporcionam volume imediato, mas os resultados finais aparecem após o inchaço diminuir. Peelings químicos e tratamentos a laser podem exigir múltiplas sessões, com melhoria gradual ao longo de semanas a meses."
    },
    {
      question: "Esses tratamentos são seguros para todos os tipos de pele?",
      answer: "Muitos tratamentos podem ser adaptados para diferentes tipos de pele, mas certas terapias a laser podem não ser adequadas para tons de pele mais escuros. Durante sua consulta, avaliamos cuidadosamente seu tipo de pele usando a escala de Fitzpatrick para recomendar tratamentos seguros e eficazes com risco mínimo de complicações como hiperpigmentação."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossos Tratamentos" 
          subtitle="Descubra nossa ampla gama de tratamentos dermatológicos e estéticos projetados para atender às suas preocupações únicas com a pele." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={treatment.id}
              id={treatment.id}
              title={treatment.title}
              description={treatment.description}
              image={treatment.image || ''}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <SectionTitle 
            title="Perguntas Frequentes" 
            subtitle="Encontre respostas para perguntas comuns sobre nossos tratamentos e procedimentos." 
          />
          
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </div>
  );
};

export default Treatments;