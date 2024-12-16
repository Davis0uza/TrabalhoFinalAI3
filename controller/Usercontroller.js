
exports.registrarUsuario = (req, res) => {
    const { username, email, password } = req.body; 
    try {
      const novoUsuario = {
        id: Math.floor(Math.random() * 1000), 
        username,
        email,
        password, 
      };
  
      res.status(201).json({
        message: "Usuário registrado com sucesso",
        data: novoUsuario,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao registrar o usuário", error });
    }
  };
  
  const jwt = require('jsonwebtoken');

exports.loginUsuario = (req, res) => {
    const { email, password } = req.body;

    try {
        // Simulação de validação do usuário (credenciais simples)
        if (email === "admin@example.com" && password === "1234") {
            // Payload para o token
            const payload = {
                email,
                role: "admin" // Você pode adicionar mais informações aqui
            };

            // Gerar o token JWT
            const token = jwt.sign(payload, process.env.JWT_SECRET || "sua_chave_secreta", { expiresIn: "1h" });

            res.status(200).json({
                message: "Login efetuado com sucesso",
                token
            });
        } else {
            res.status(401).json({ message: "Credenciais inválidas" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao efetuar login", error });
    }
};

  
  exports.recuperarSenha = (req, res) => {
    const { email } = req.body; 
    try {
      res.status(200).json({
        message: `Instruções para recuperar a senha foram enviadas para o email: ${email}`,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao recuperar a senha", error });
    }
  };
  