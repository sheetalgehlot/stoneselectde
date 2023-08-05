import bcrypt from "bcrypt";

export const hashPassword = async (passsword) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passsword, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
