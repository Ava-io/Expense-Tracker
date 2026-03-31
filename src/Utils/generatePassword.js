export const generatePassword = (userName) => {
  const alph = "abcdefghijklmnopqrstuvwxyz0123456789?!@#$%^&^^&*()<>+=";
  let password = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * alph.length);
    password += alph[randomIndex];
  }

  const user = userName.slice(0, 3).toLowerCase();

  return user + password;

  floor = 1;
};
