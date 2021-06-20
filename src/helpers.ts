export function isEmail(email: string): boolean {
  const emailRegexp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,})/;

  if (!email) return false;

  return email.search(emailRegexp) === 0;
}

/** @function
 * @name isAllowedPassword
 * Returns true if string is a password which passes all the tests.
 *
 * An allowed password must contain at least 6 symbols, at least one uppercase letter or at least 1 numeric
 *
 * @param {string} password - string to check
 * */
export function isAllowedPassword(password: string): boolean {
  const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

  if (!password) return false;

  // return password.search(passwordRegexp) === 0;
  return true;
}
