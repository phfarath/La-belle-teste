-- SQL adicional para completar a estrutura do banco de dados

-- Tabela de contatos (para o formulário de contato)
CREATE TABLE IF NOT EXISTS public.contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS na tabela de contatos
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de contatos
CREATE POLICY "Qualquer pessoa pode criar um contato." 
ON public.contacts FOR INSERT 
WITH CHECK (true);

-- Inserir alguns tratamentos de exemplo
INSERT INTO public.treatments (slug, title, description) VALUES
('botox', 'Botox', 'Tratamento para redução de rugas e linhas de expressão utilizando toxina botulínica.'),
('preenchimento', 'Preenchimento com Ácido Hialurônico', 'Restauração de volume facial e hidratação da pele com ácido hialurônico.'),
('laser-facial', 'Laser Facial', 'Tratamentos a laser para rejuvenescimento, remoção de manchas e melhora da textura da pele.'),
('limpeza-pele', 'Limpeza de Pele', 'Limpeza profunda para remoção de cravos, espinhas e células mortas.'),
('peeling-quimico', 'Peeling Químico', 'Renovação celular através de ácidos para melhorar a textura e aparência da pele.'),
('microagulhamento', 'Microagulhamento', 'Estimulação da produção de colágeno para redução de cicatrizes e rugas.'),
('harmonizacao-facial', 'Harmonização Facial', 'Conjunto de procedimentos para equilibrar as proporções do rosto.'),
('tratamento-acne', 'Tratamento de Acne', 'Protocolos específicos para controle e tratamento da acne em diferentes graus.');

-- Inserir alguns médicos de exemplo
INSERT INTO public.doctors (name, specialty, credentials, bio) VALUES
('Dra. Maria Silva', 'Dermatologia', 'CRM 12345-SP', 'Especialista em dermatologia clínica e estética com mais de 15 anos de experiência.'),
('Dr. João Santos', 'Dermatologia Estética', 'CRM 67890-SP', 'Focado em procedimentos estéticos e harmonização facial, com certificação internacional.'),
('Dra. Ana Costa', 'Dermatologia Pediátrica', 'CRM 11111-SP', 'Especialista em dermatologia infantil e tratamentos específicos para crianças e adolescentes.');

-- Comentários sobre o uso
-- 
-- Para usar este banco de dados:
-- 1. Execute primeiro o script principal (database_schema.sql)
-- 2. Execute este script adicional para inserir dados de exemplo
-- 3. Configure as chaves do Supabase no arquivo .env.local
-- 4. O sistema estará pronto para uso
--
-- Funcionalidades implementadas:
-- ✓ Sistema de autenticação com perfis de usuário
-- ✓ Agendamentos salvos no banco de dados
-- ✓ Formulário de contato funcional
-- ✓ Estrutura para prontuários médicos
-- ✓ Sistema de sugestões personalizadas
-- ✓ Blog posts (estrutura pronta)
-- ✓ Catálogo de tratamentos
-- ✓ Cadastro de médicos
-- ✓ Políticas de segurança (RLS) configuradas
