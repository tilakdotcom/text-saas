export const getEnv = (key: string, dafaultKey?: string): string => {
  const env = process.env[key] || dafaultKey;

  if (!env) {
    throw new Error(`Environment variable ${key} is not defined.`);
  }

  return env;
};

export const CLIENT_URI = getEnv(
  "NEXT_PUBLIC_CLIENT_URI",
  "http://localhost:3000"
);
