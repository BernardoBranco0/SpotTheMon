var pool = require("./connection");




module.exports.create = async (image) => {
  try {
      let res = await pool.query('INSERT INTO Imagens (Img_id, URL, I_descricao, G_id, M_id) values(?,?,?,?,?) ', [image.Img_id, image.URL, image.I_descricao, image.G_id, image.M_id]);
      return res;
  }
  catch (err) {
      console.log('An errror has occured while trying to INSERT into aaa.\n Dumping Stack.\n', err.stack);
      return err.message;
  }
};

