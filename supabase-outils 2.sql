-- NA_DASSI : outils pour le gestionnaire. À coller dans « SQL Editor » de Supabase, puis « Run ».
-- Chaque ligne « select ... » se lance seule : colle-la dans une nouvelle requête.

-- 1) Fonction pour réinitialiser le code secret d'une personne (à lancer UNE FOIS pour la créer)
create or replace function public.reset_pin(p_phone text, p_pin text) returns text
language plpgsql security definer set search_path = public, extensions, auth as $$
declare em text := 'p' || right(regexp_replace(p_phone, '\D', '', 'g'), 10) || '@nadassi.app';
begin
  if p_pin !~ '^\d{6}$' then raise exception 'le code doit avoir 6 chiffres'; end if;
  update auth.users set encrypted_password = crypt(p_pin, gen_salt('bf')) where email = em;
  if not found then raise exception 'numero inconnu'; end if;
  return 'ok';
end $$;
revoke all on function public.reset_pin(text, text) from public, anon, authenticated;

-- 2) Utilisation (une ligne à la fois, remplace le numéro) :
-- select reset_pin('0711223344', '123456');          -- nouveau code secret
-- select grant_months('0711223344', 1);              -- activer 1 mois d'abonnement
-- select phone, first_name, last_name, trial_start, sub_end from profiles order by created_at desc;   -- voir les inscrits
