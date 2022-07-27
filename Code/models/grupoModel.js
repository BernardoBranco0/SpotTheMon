var pool = require("./connection");


  

  module.exports.getByMember = async (id) => {
    try {
      let res = await pool.query("SELECT * FROM Grupo g , Membros m, Cliente c WHERE g.G_id = m.G_id AND g.owner_id = c.C_id AND m.C_id = ?", id);
      return res;
    } catch (err) {
      console.log(
        "An errror has occured while trying to SELECT FROM Cliente.\n Dumping Stack.\n",
        err.stack
      );
      return err.message;
    }
  };


  module.exports.getByNotMember = async (id) => {
    try {
      let res = await pool.query("SELECT * FROM Grupo g , Membros m, Cliente c WHERE g.G_id = m.G_id  AND m.M_id = c.C_id and c.C_id <> ?", id);
      return res;
    } catch (err) {
      console.log(
        "An errror has occured while trying to SELECT FROM Cliente.\n Dumping Stack.\n",
        err.stack
      );
      return err.message;
    }
  };

  module.exports.getByImage = async (id) => {
    try {
      let res = await pool.query("Select C_name, I_descricao, URL FROM Imagens i, Membros m, Cliente c WHERE i.M_id = m.M_id and m.C_id = c.C_id and i.G_id = ?", id);
      return res;
    } catch (err) {
      console.log(
        "An errror has occured while trying to SELECT FROM Cliente.\n Dumping Stack.\n",
        err.stack
      );
      return err.message;
    }
  };


  module.exports.create = async (membro) => {
    try {
        let res = await pool.query('INSERT INTO Membros (M_id, C_id, G_id) values(?,?,?) ', [membro.M_id, membro.C_id, membro.G_id]);
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to INSERT into bbb.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
  };