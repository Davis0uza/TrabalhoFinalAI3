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
  
  exports.loginUsuario = (req, res) => {
    const { email, password } = req.body;
    try {
      const usuarioAutenticado = {
        id: 1, 
        email,
        token: "fake-jwt-token", 
      };
  
      res.status(200).json({
        message: "Login efetuado com sucesso",
        data: usuarioAutenticado,
      });
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
  