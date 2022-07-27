var pool = require("./connection");

module.exports.select = async () => {
  try {
    let res = await pool.query("SELECT * FROM Cliente");
    return res;
  } catch (err) {
    console.log(
      "An errror has occured while trying to SELECT FROM Clientes.\n Dumping Stack.\n",
      err.stack
    );
    return err.message;
  }
};



module.exports.getByCliente = async (id) => {
  try {
    let res = await pool.query("SELECT * FROM Cliente where C_id = ?", id);
    return res;
  } catch (err) {
    console.log(
      "An errror has occured while trying to SELECT FROM Cliente.\n Dumping Stack.\n",
      err.stack
    );
    return err.message;
  }
};




