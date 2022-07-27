var pool = require("./connection");

module.exports.select = async () => {
  try {
    let res = await pool.query("SELECT * FROM Monumento");
    return res;
  } catch (err) {
    console.log(
      "An errror has occured while trying to SELECT FROM Monumento.\n Dumping Stack.\n",
      err.stack
    );
    return err.message;
  }
};



module.exports.getByMon = async (id) => {
  try {
    let res = await pool.query("SELECT * FROM Monumento where id_monumento = ?", id);
    return res;
  } catch (err) {
    console.log(
      "An errror has occured while trying to SELECT FROM monumentos.\n Dumping Stack.\n",
      err.stack
    );
    return err.message;
  }
};



module.exports.create = async (mon) => {
  try {
      let res = await pool.query('INSERT INTO Monumento (Nome, M_lat, M_long, image, M_desc, ano_construcao, freguesia, id_monumento) values(?,?,?,?,?,?,?,?) ', [mon.Nome, mon.M_lat, mon.M_long, mon.image, mon.M_desc, mon.ano_construcao, mon.freguesia, mon.id_monumento]);
      return res;
  }
  catch (err) {
      console.log('An errror has occured while trying to INSERT into aaa.\n Dumping Stack.\n', err.stack);
      return err.message;
  }
};

