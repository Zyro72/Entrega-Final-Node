import jwt from "jsonwebtoken";
/*import dotenv from"dotenv";
dotenv.config();*/

const defaultUser = {
  id: 1,
  email:"user@email.com",
  password:"Pass123",
};
export const login = async (req, res) => {
  
  const { email, password } =  req.body;

  const user = { id: 1, email };

  if (email === defaultUser.email && password === defaultUser.password) {
    const payload = { id: user.id };
    const expiration = { expiresIn: "1h" };
    
    const token = jwt.sign(payload,process.env.JWT_SECRET, expiration);
    
    res.json({ token });
  } else {
    res.sendStatus(401).json({error: 'Verifique sus credenciales ....'})
  }
};
