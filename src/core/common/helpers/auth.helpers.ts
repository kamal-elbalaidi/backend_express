import bcrypt from "bcrypt";

export const salt_and_hash_password = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const verify_password = async (password: string | null, hashed_password: string | null): Promise<boolean> => {
  if (!password || !hashed_password) return false;
  return bcrypt.compare(password, hashed_password);
};

export const get_jwt_expiry_time = (env_lifespan_in_seconds?: string): number | undefined => {
  return env_lifespan_in_seconds && !isNaN(Number(env_lifespan_in_seconds))
    ? parseInt(env_lifespan_in_seconds)
    : undefined;
};

export const is_token_expired = (exp?: number): boolean => {
  if (typeof exp !== "number") return true;
  return exp < Math.floor(Date.now() / 1000);
};
