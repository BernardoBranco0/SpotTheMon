var pool = require("./connection");


module.exports.getByName = async (name) => {
  try {
      const cliente = await pool.query('SELECT * FROM Cliente WHERE C_Name = ?', name);
      return cliente;
  }
  catch (err) {
      console.log('An error has occured while trying to SELECT FROM Clientes.\n Dumping Stack.\n', err.stack);
      return err.message;
  }
};