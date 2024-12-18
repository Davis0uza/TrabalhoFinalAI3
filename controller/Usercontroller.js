const User = require('../models/User'); // Importa o modelo User
const jwt = require('jsonwebtoken');

exports.registrarUsuario = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Cria um novo usuário
        const novoUsuario = new User({ username, email, password });
        const usuarioSalvo = await novoUsuario.save(); // Salva no MongoDB

        res.status(201).json({
            message: "Usuário registrado com sucesso",
            data: usuarioSalvo,
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: "Email já registrado!" });
        } else {
            res.status(500).json({ message: "Erro ao registrar o usuário", error: error.message });
        }
    }
};


exports.loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
      // Buscar o usuário pelo email
      const usuario = await User.findOne({ email });

      // Verificar se o usuário existe
      if (!usuario) {
          return res.status(401).json({ message: "Credenciais inválidas" });
      }

      // Verificar se a senha corresponde (plaintext)
      if (usuario.password !== password) {
          return res.status(401).json({ message: "Credenciais inválidas" });
      }

      // Gerar o token JWT
      const payload = { id: usuario._id, email: usuario.email };
      const token = jwt.sign(payload, process.env.JWT_SECRET || "sua_chave_secreta", { expiresIn: "1h" });

      res.status(200).json({
          message: "Login efetuado com sucesso",
          token
      });
  } catch (error) {
      res.status(500).json({ message: "Erro ao efetuar login", error: error.message });
  }
};

  
exports.recuperarSenha = async (req, res) => {
  const { email } = req.body;

  try {
      const usuario = await User.findOne({ email });

      if (!usuario) {
          return res.status(404).json({ message: "Usuário não encontrado" });
      }

      // Exemplo de lógica: Enviar um email fictício
      res.status(200).json({
          message: "Instruções de recuperação de senha enviadas para o email fornecido"
      });
  } catch (error) {
      res.status(500).json({ message: "Erro ao tentar recuperar senha", error: error.message });
  }
};


  