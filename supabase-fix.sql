-- SCRIPT DE CORREÇÃO PARA O SUPABASE
-- Execute este SQL no SQL Editor do Supabase para corrigir os problemas

-- 1. Primeiro, vamos dropar e recriar a função de trigger corrigida
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

-- 2. Recriar a função handle_new_user corrigida
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email)
  VALUES (
    new.id, 
    COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', new.email),
    new.email
  );
  RETURN new;
EXCEPTION
  WHEN others THEN
    -- Se der erro, ainda retorna o new para não quebrar o cadastro
    RAISE LOG 'Erro ao criar perfil para usuário %: %', new.id, SQLERRM;
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Recriar o trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 4. Verificar se a tabela profiles tem a estrutura correta
-- Se necessário, adicione as colunas que faltam:
DO $$
BEGIN
  -- Adiciona a coluna 'name' se não existir
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'name') THEN
    ALTER TABLE public.profiles ADD COLUMN name TEXT;
  END IF;
  
  -- Garante que a coluna email existe
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'email') THEN
    ALTER TABLE public.profiles ADD COLUMN email TEXT;
  END IF;
END $$;

-- 5. Atualizar as políticas RLS para garantir que funcionem corretamente
DROP POLICY IF EXISTS "Usuários podem ver todos os perfis públicos." ON public.profiles;
DROP POLICY IF EXISTS "Usuários podem atualizar seu próprio perfil." ON public.profiles;
DROP POLICY IF EXISTS "Usuários podem inserir seu próprio perfil." ON public.profiles;

-- Políticas mais específicas e seguras
CREATE POLICY "Usuários podem ver perfis públicos"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Usuários podem atualizar seu próprio perfil"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Sistema pode inserir perfis"
  ON public.profiles FOR INSERT
  WITH CHECK (true);

-- 6. Garantir que as tabelas tenham as permissões corretas
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.profiles TO anon, authenticated;
GRANT ALL ON public.appointments TO anon, authenticated;
GRANT SELECT ON public.treatments TO anon, authenticated;
GRANT SELECT ON public.doctors TO anon, authenticated;
GRANT SELECT ON public.blog_posts TO anon, authenticated;
