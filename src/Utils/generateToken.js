import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateJwtToken = (userId) => {
  const secret = process.env.JWT_SECRET;

  const payload = {
    user: {
      id: userId,
    },
  };

  return jwt.sign(payload, secret, { expiresIn: "24h" });
};
