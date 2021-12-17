//pega o token e o secret e confere a autorização. utilizado no login pra gerar um token
const jwt = require('jsonwebtoken');

exports.checkAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Acesso negado"});


    const secret = process.env.SECRET;
//decoded - metodo jwt q verifica a validação. codifica e decodifica
    jwt.verify(token, secret, (err, decoded) => {
      if(err) {
        return res.status(400).json({message: "Token inválido"})
      }
      req.userId = decoded.id;
    });
    
    next();
}
