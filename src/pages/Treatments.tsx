import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import TreatmentCard from '../components/treatments/TreatmentCard';
import FaqAccordion from '../components/faq/FaqAccordion';

const Treatments: React.FC = () => {
  const treatments = [
    {
      id: "surgeries",
      title: "Pequenas Cirurgias",
      description: "Realizamos o diagnóstico e retirada de lesoes cutaneas no consultório e tambem em ambientes hospitalares quando necessario. Nevos (pintas), verrugas, lipomas, cistos epidermicos, xantelasmas sao algumas das lesoes que fazemos a remoção.",
      image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "ultrasound",
      title: "Ultrassom Micro e Macro Focado",
      description: "O ultrassom microfocado ganhou espaço no combate a flacidez e gordura na face e no corpo devido a sua versatilidade e eficacia. Praticamente indolor essa tecnologia permite sua realização sem precisar sem afastar do trabalho, academia ou lazer.",
      image: "https://images.pexels.com/photos/7446583/pexels-photo-7446583.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "botox",
      title: "Toxina Botulínica",
      description: "A toxina botulínica amplamente utilizada para tratamento de rugas estaticas e dinâmicas na face e pescoço faz parte de nossas opções para rejuvenescimento. Também realizamos ela para tratamento de suor excessivo em regiao axilar e palmo plantar.",
      image: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "fillers",
      title: "Preenchimento com ácido hialurônico",
      description: "O preenchimento com ácido hialurônico é um procedimento versátil que pode ser usado para restaurar volume, suavizar linhas e rugas, e melhorar os contornos faciais.",
      image: "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "biostimulants",
      title: "Bioestimulantes Injetáveis", 
      description: "Os bioestimulantes são substâncias que estimulam a produção natural de colágeno, melhorando a qualidade e textura da pele de forma gradual e natural.",
      image: "https://images.pexels.com/photos/7446583/pexels-photo-7446583.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "lasers",
      title: "Lasers",
      description: "É uma tecnologia versátil , usada para tratar manchas da pele, da face, colo e mãos, tratar rosácea e telangiectasias da face, ainda gera estímulo de colágeno superficial da pele levando ao aumento do viço e brilho. As sessões são mensais e varia quanto a indicação e de acordo com cada paciente. Também pode ser usado para epilação dos pelos de qualquer parte do corpo e em todos os fototipos.",
      image: "https://images.pexels.com/photos/7446603/pexels-photo-7446603.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "pdo",
      title: "Fios PDO",
      description: "Os fios de PDO são produzidos com material biocombustível com o organismo, portanto, 100% absorvíveis. Faz sustentação da pele e tecidos de gordura, tendo um efeito lifting sem cirurgia. Minimamente invasivo, melhora a textura da pele, diminui a flacidez e promove o rejuvenescimento.",
      image: "https://images.pexels.com/photos/7446622/pexels-photo-7446622.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "fat-drainers",
      title: "Esvaziadores de Gordura",
      description: "Também conhecido como emptiers, são enzimas, aplicadas por via subcutânea, usadas para auxiliar na redução de gordura localizada em pequenas áreas corporais, como gordura do 'sutiã', flancos, periumbical, bochechas e papadas. Sessões são mensais e o protocolo é personalizado, após avaliação completa e individual, considerando as queixas e objetivos de cada paciente.",
      image: "https://images.pexels.com/photos/3865560/pexels-photo-3865560.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "hair-mesotherapy",
      title: "Mesoterapia Capilar",
      description: "É um procedimento onde aplicamos diretamente no couro cabeludo, substâncias estéreis de acordo com a necessidade de cada paciente, a fim de estimular os folículos a produzirem novos fios. Feito na mesma sessão, antes da aplicação, um capacete de LED, onde tem duração de 15 minutos, que é eficaz no tratamento da queda de cabelo e estimula a circulação sanguínea, o que melhora a absorção dos medicamentos. As sessões são quinzenais ou mensais.",
      image: "https://images.pexels.com/photos/7446606/pexels-photo-7446606.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "microneedling",
      title: "Microagulhamento",
      description: "É um procedimento seguro, quando bem indicado e realizado. A melhora observada com o tratamento decorre da produção de pequenos orifícios na pele , o que estimula a produção de colágeno e a renovação celular.",
      image: "https://images.pexels.com/photos/7446606/pexels-photo-7446606.jpeg?auto=compress&cs=tinysrgb&w=600"
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
              image={treatment.image}
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