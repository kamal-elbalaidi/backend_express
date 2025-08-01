export const is_email_valid = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const is_password_valid = (password: string): boolean => {
  if (password.length < 8) return false;
  return /[a-zA-Z]/.test(password) && /\d/.test(password);
};
