import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import BlogCard from '../components/blog/BlogCard';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Entendendo os Benefícios dos Peelings Químicos para Diferentes Tipos de Pele",
      summary: "Os peelings químicos podem tratar várias preocupações com a pele, desde acne até envelhecimento. Descubra qual tipo de peeling é mais adequado para suas necessidades específicas e como se preparar para o tratamento.",
      image: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "15 de Maio de 2023",
      author: "Dra. Roberta Pontes"
    },
    {
      title: "A Ciência por Trás do Tratamento Eficaz da Acne: Abordagens Mais Recentes",
      summary: "Descubra os avanços mais recentes no tratamento da acne, desde medicamentos tópicos até intervenções procedimentais, e como os dermatologistas criam planos de tratamento personalizados.",
      image: "https://images.pexels.com/photos/7446583/pexels-photo-7446583.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "28 de Abril de 2023",
      author: "Dr. Carlos Mendes"
    },
    {
      title: "Envelhecendo com Graça: Abordagens Não Cirúrgicas para Rejuvenescimento Facial",
      summary: "Explore como terapias combinadas usando Botox, preenchimentos e dispositivos baseados em energia podem proporcionar resultados naturais para o rejuvenescimento facial sem cirurgia.",
      image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "10 de Abril de 2023",
      author: "Dr. André Santos"
    },
    {
      title: "Proteção Solar Além do Protetor: Estratégias Completas",
      summary: "Embora o protetor solar seja essencial, a verdadeira proteção solar envolve múltiplas estratégias. Saiba mais sobre roupas protetoras, antioxidantes e outras medidas para proteger sua pele.",
      image: "https://images.pexels.com/photos/3881179/pexels-photo-3881179.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "22 de Março de 2023",
      author: "Dra. Juliana Costa"
    },
    {
      title: "Soluções para Queda de Cabelo: De Medicamentos a Procedimentos Avançados",
      summary: "A queda de cabelo afeta milhões de pessoas. Explore o espectro completo de opções de tratamento, desde medicamentos tópicos até terapia PRP e técnicas de transplante.",
      image: "https://images.pexels.com/photos/3993331/pexels-photo-3993331.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "5 de Março de 2023",
      author: "Dr. Ricardo Almeida"
    },
    {
      title: "Ingredientes de Cuidados com a Pele Desmistificados: O Que Realmente Funciona?",
      summary: "Com inúmeros produtos fazendo promessas ousadas, aprenda quais ingredientes têm evidências científicas que comprovam sua eficácia e como construir uma rotina eficaz.",
      image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "18 de Fevereiro de 2023",
      author: "Dra. Fernanda Lima"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Blog de Dermatologia" 
          subtitle="Mantenha-se informado com as últimas novidades, pesquisas e conselhos de nossos dermatologistas especialistas." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              summary={post.summary}
              image={post.image}
              date={post.date}
              author={post.author}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-primary-50 dark:bg-gray-700 rounded-lg shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-primary-700 dark:text-white">
              Inscreva-se em Nossa Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Receba as últimas novidades em dermatologia, ofertas exclusivas e dicas de cuidados com a pele diretamente na sua caixa de entrada.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu endereço de email"
                className="flex-1 p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="py-3 px-6 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white rounded-md transition-colors font-medium whitespace-nowrap"
              >
                Inscreva-se
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;