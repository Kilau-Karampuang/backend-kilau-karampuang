const Tarian = require("../models/TarianModels");

/*
    Endpoint untuk menambahkan tarian baru
    Method: POST
    URL: /api/tarian/
    Body: judul, deskripsi
*/
exports.createTarian = async (req, res) => {
  const { videoId, title } = req.body;

  const tarian = new Tarian({
    videoId,
    title
  });

  tarian
    .save()
    .then((tarian) => {
      res.status(201).json({
        message: "Tarian berhasil ditambahkan",
        data: tarian
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

/*
    Endpoint untuk mendapatkan semua tarian
    Method: GET
    URL: /api/tarian/
*/
exports.getAllTarian = async (req, res) => {
  Tarian.find()
    .then((tarian) => {
      if(tarian.length === 0) {
        return res.status(200).json({
          message: "Belum ada tarian"
        });
      };
      
      res.status(200).json({
        data: tarian
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

/*
    Endpoint untuk mendapatkan tarian berdasarkan ID
    Method: GET
    URL: /api/tarian/:id
*/
exports.getTarianById = async (req, res) => {
  const { id } = req.params;

  Tarian.findById(id)
    .then((tarian) => {
      res.status(200).json({
        data: tarian
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

/*
    Endpoint untuk mengupdate tarian berdasarkan ID
    Method: PUT
    URL: /api/tarian/:id
    Body: videoId, title
*/
exports.updateTarian = async (req, res) => {
  const { id } = req.params;
  const { videoId, title } = req.body;

  Tarian.findByIdAndUpdate(id, { videoId, title  })
    .then((tarian) => {
      res.status(200).json({
        message: "Tarian berhasil diupdate",
        data: tarian
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
}

/*
    Endpoint untuk menghapus tarian berdasarkan ID
    Method: DELETE
    URL: /api/tarian/:id
*/
exports.deleteTarian = async (req, res) => {
  const { id } = req.params;

  Tarian.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({
        message: "Tarian berhasil dihapus"
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};
