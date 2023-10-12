import { PasswordOptions } from './types';

/**
 *  Function to get the strength of a password
 * @param passwordOptions - Object with the password options
 * @returns
 */
export const getPasswordStrength = (passwordOptions: PasswordOptions) => {
  let puntuacion = 0;

  const { passwordLength, useLowerCase, useUpperCase, useNumbers, useSymbols } =
    passwordOptions;

  if (passwordLength >= 8) { puntuacion += 1; }
  if (useLowerCase) { puntuacion += 1; }
  if (useUpperCase) { puntuacion += 1; }
  if (useNumbers) { puntuacion += 1; }
  if (useSymbols) { puntuacion += 1; }

  return puntuacion;
};
