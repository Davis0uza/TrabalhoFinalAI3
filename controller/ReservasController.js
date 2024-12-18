const Reserva = require('../models/Reserva'); // Importa o modelo Reserva

exports.consultaReservasPorSala = async (req, res) => {
  const { room_id, date } = req.query; // Obtém os parâmetros da URL

  try {
      // Construir o filtro para a consulta
      const filtro = {};
      if (room_id) filtro.room_id = room_id;
      if (date) filtro.date = date;

      // Buscar reservas no banco de dados com base no filtro
      const reservas = await Reserva.find(filtro);

      // Verificar se existem reservas
      if (!reservas || reservas.length === 0) {
          return res.status(404).json({ message: "Nenhuma reserva encontrada para os critérios fornecidos" });
      }

      res.status(200).json({
          message: "Reservas consultadas com sucesso",
          data: reservas,
      });
  } catch (error) {
      res.status(500).json({
          message: "Erro ao consultar reservas por sala",
          error: error.message,
      });
  }
};

  
exports.consultaReservasPorUsuario = async (req, res) => {
  const { user_id, start_date, end_date } = req.query;

  try {
      const filtro = { user_id };

      if (start_date && end_date) {
          filtro.date = { $gte: start_date, $lte: end_date };
      }

      const reservas = await Reserva.find(filtro);

      if (!reservas || reservas.length === 0) {
          return res.status(404).json({ message: "Nenhuma reserva encontrada para o usuário" });
      }

      res.status(200).json({
          message: "Reservas do usuário consultadas com sucesso",
          data: reservas
      });
  } catch (error) {
      res.status(500).json({ message: "Erro ao consultar reservas por usuário", error: error.message });
  }
};


  

exports.criarReserva = async (req, res) => {
    const { room_id, user_id, date, start_time, end_time, description } = req.body;

    try {
        // Cria a reserva no MongoDB
        const novaReserva = new Reserva({
            room_id,
            user_id,
            date,
            start_time,
            end_time,
            description
        });

        // Salva no banco
        const reservaSalva = await novaReserva.save();

        res.status(201).json({
            message: "Reserva criada com sucesso",
            data: reservaSalva
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao criar a reserva",
            error: error.message
        });
    }
};

  
exports.editarReserva = async (req, res) => {
  const { reservation_id, room_id, date, start_time, end_time, description } = req.body;

  try {
      // Atualizar a reserva no banco de dados
      const reservaAtualizada = await Reserva.findByIdAndUpdate(
          reservation_id, // ID da reserva a ser atualizada
          { room_id, date, start_time, end_time, description }, // Novos dados
          { new: true } // Retorna o documento atualizado
      );

      if (!reservaAtualizada) {
          return res.status(404).json({ message: "Reserva não encontrada" });
      }

      res.status(200).json({
          message: "Reserva editada com sucesso",
          data: reservaAtualizada
      });
  } catch (error) {
      res.status(500).json({
          message: "Erro ao editar a reserva",
          error: error.message
      });
  }
};

  
exports.cancelarReserva = async (req, res) => {
  const { reservation_id } = req.body;

  try {
      const reservaCancelada = await Reserva.findByIdAndDelete(reservation_id);

      if (!reservaCancelada) {
          return res.status(404).json({ message: "Reserva não encontrada" });
      }

      res.status(200).json({
          message: "Reserva cancelada com sucesso"
      });
  } catch (error) {
      res.status(500).json({ message: "Erro ao cancelar a reserva", error: error.message });
  }
};


exports.listarTodasReservas = async (req, res) => {
  try {
      const reservas = await Reserva.find();

      if (!reservas || reservas.length === 0) {
          return res.status(404).json({ message: "Nenhuma reserva encontrada" });
      }

      res.status(200).json({
          message: "Reservas listadas com sucesso",
          data: reservas
      });
  } catch (error) {
      res.status(500).json({ message: "Erro ao listar reservas", error: error.message });
  }
};
