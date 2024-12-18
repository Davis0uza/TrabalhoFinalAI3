const Sala = require('../models/Sala'); // Importa o modelo Sala

exports.criarSala = async (req, res) => {
    const { room_name, capacity, equipment } = req.body;

    try {
        // Cria uma nova sala no banco de dados
        const novaSala = new Sala({
            room_name,
            capacity,
            equipment
        });

        // Salva a sala no MongoDB
        const salaSalva = await novaSala.save();

        res.status(201).json({
            message: "Sala criada com sucesso",
            data: salaSalva
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao criar a sala",
            error: error.message
        });
    }
};

  
exports.editarSala = async (req, res) => {
  const { room_id, room_name, capacity, equipment } = req.body;

  try {
      const salaAtualizada = await Sala.findByIdAndUpdate(
          room_id, // ID da sala
          { room_name, capacity, equipment }, // Novos dados
          { new: true } // Retorna a sala atualizada
      );

      if (!salaAtualizada) {
          return res.status(404).json({ message: "Sala não encontrada" });
      }

      res.status(200).json({
          message: "Sala editada com sucesso",
          data: salaAtualizada
      });
  } catch (error) {
      res.status(500).json({ message: "Erro ao editar a sala", error: error.message });
  }
};

  
exports.removerSala = async (req, res) => {
  const { room_id } = req.body;

  try {
      const salaRemovida = await Sala.findByIdAndDelete(room_id);

      if (!salaRemovida) {
          return res.status(404).json({ message: "Sala não encontrada" });
      }

      res.status(200).json({
          message: `Sala com ID ${room_id} removida com sucesso`
      });
  } catch (error) {
      res.status(500).json({ message: "Erro ao remover a sala", error: error.message });
  }
};

exports.listarTodasSalas = async (req, res) => {
  try {
      // Buscar todas as salas no banco de dados
      const salas = await Sala.find();

      if (!salas || salas.length === 0) {
          return res.status(404).json({ message: "Nenhuma sala encontrada" });
      }

      res.status(200).json({
          message: "Salas listadas com sucesso",
          data: salas
      });
  } catch (error) {
      res.status(500).json({
          message: "Erro ao listar as salas",
          error: error.message
      });
  }
};


  