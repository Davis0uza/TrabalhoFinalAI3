exports.consultaReservasPorSala = (req, res) => {
    const { room_id, date } = req.query; 
    try {
      const reservas = [
        { id: 1, room_id, date, start_time: '10:00', end_time: '12:00' }
      ];
  
      res.status(200).json({
        message: "Reservas consultadas com sucesso",
        data: reservas,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao consultar reservas por sala", error });
    }
  };
  
  exports.consultaReservasPorUsuario = (req, res) => {
    const { user_id, start_date, end_date } = req.query; 
    try {
      const reservas = [
        { id: 1, user_id, date: start_date, start_time: '10:00', end_time: '12:00' }
      ];
  
      res.status(200).json({
        message: "Reservas do usuário consultadas com sucesso",
        data: reservas,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao consultar reservas por usuário", error });
    }
  };
  
  exports.criarReserva = (req, res) => {
    const { room_id, user_id, date, start_time, end_time, description } = req.body;
    try {
      const novaReserva = {
        id: 1,
        room_id,
        user_id,
        date,
        start_time,
        end_time,
        description,
      };
  
      res.status(201).json({
        message: "Reserva criada com sucesso",
        data: novaReserva,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar reserva", error });
    }
  };
  
  exports.editarReserva = (req, res) => {
    const { reservation_id, room_id, date, start_time, end_time, description } = req.body;
    try {
      const reservaAtualizada = {
        id: reservation_id,
        room_id,
        date,
        start_time,
        end_time,
        description,
      };
  
      res.status(200).json({
        message: "Reserva editada com sucesso",
        data: reservaAtualizada,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao editar reserva", error });
    }
  };
  
  exports.cancelarReserva = (req, res) => {
    const { reservation_id } = req.body;
    try {
      res.status(200).json({
        message: "Reserva cancelada com sucesso",
        reservation_id,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao cancelar reserva", error });
    }
  };
  