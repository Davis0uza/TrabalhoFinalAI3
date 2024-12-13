exports.criarSala = (req, res) => {
    const { room_name, capacity, equipment } = req.body; 
    try {
      const novaSala = {
        id: Math.floor(Math.random() * 1000), 
        room_name,
        capacity,
        equipment,
      };
  
      res.status(201).json({
        message: "Sala criada com sucesso",
        data: novaSala,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar a sala", error });
    }
  };
  
  exports.editarSala = (req, res) => {
    const { room_id, room_name, capacity, equipment } = req.body;
    try {
      const salaAtualizada = {
        id: room_id,
        room_name,
        capacity,
        equipment,
      };
  
      res.status(200).json({
        message: "Sala editada com sucesso",
        data: salaAtualizada,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao editar a sala", error });
    }
  };
  
  exports.removerSala = (req, res) => {
    const { room_id } = req.body; 
    try {
      res.status(200).json({
        message: `Sala com ID ${room_id} removida com sucesso`,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao remover a sala", error });
    }
  };
  