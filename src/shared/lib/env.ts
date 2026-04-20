const missingEnvMessage =
  'As variáveis da TMDB não foram configuradas. Copie .env.example para .env e preencha o token.';

/**
 * Retorna uma variável de ambiente obrigatória.
 */
export function getRequiredEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name];

  if (!value) {
    throw new Error(missingEnvMessage);
  }

  return value;
}
