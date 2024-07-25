const Berita = require("../models/BeritaModels");

/*
    Endpoint untuk menambahkan berita baru
    Method: POST
    URL: /api/berita/
    Body: judul, deskripsi
*/
exports.createBerita = async (req, res) => {
  const { judul, deskripsi } = req.body;

  const berita = new Berita({
    judul,
    deskripsi
  });

  berita
    .save()
    .then((berita) => {
      res.status(201).json({
        message: "Berita berhasil ditambahkan",
        data: berita
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

/*
    Endpoint untuk mendapatkan semua berita
    Method: GET
    URL: /api/berita/
*/
exports.getAllBerita = async (req, res) => {
  Berita.find()
    .then((berita) => {
      if(berita.length === 0) {
        return res.status(200).json({
          message: "Belum ada berita"
        });
      };
      
      res.status(200).json({
        data: berita
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

/*
    Endpoint untuk mendapatkan berita berdasarkan ID
    Method: GET
    URL: /api/berita/:id
*/
exports.getBeritaById = async (req, res) => {
  const { id } = req.params;

  Berita.findById(id)
    .then((berita) => {
      res.status(200).json({
        data: berita
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

/*
    Endpoint untuk mengupdate berita berdasarkan ID
    Method: PUT
    URL: /api/berita/:id
    Body: judul, deskripsi
*/
exports.updateBerita = async (req, res) => {
  const { id } = req.params;
  const { judul, deskripsi } = req.body;

  Berita.findByIdAndUpdate(id, { judul, deskripsi })
    .then((berita) => {
      res.status(200).json({
        message: "Berita berhasil diupdate",
        data: berita
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
}

/*
    Endpoint untuk menghapus berita berdasarkan ID
    Method: DELETE
    URL: /api/berita/:id
*/
exports.deleteBerita = async (req, res) => {
  const { id } = req.params;

  Berita.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({
        message: "Berita berhasil dihapus"
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};
