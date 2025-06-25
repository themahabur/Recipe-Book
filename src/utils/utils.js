

export const isValidPassword = (password) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const isLongEnough = password.length >= 6;

  if (!hasUppercase) {
     return "❌ Must have an uppercase letter"
  }

  if (!hasLowercase) {
    return "❌ Must have a lowercase letter"
  }

  if (!isLongEnough) {
    return "❌ Password must be at least 6 characters long"
  }

  return hasUppercase && hasLowercase && isLongEnough;
};
