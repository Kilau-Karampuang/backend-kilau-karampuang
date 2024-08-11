const DeskripsiDusun = require("../models/DeskripsiDusunModels");

/*
    Endpoint untuk menambahkan deskripsi dusun baru
    Method: POST
    URL: /api/deskripsi-dusun/
    Body: dusun, deskripsi
*/
exports.createDeskripsiDusun = async (req, res) => {
  const { dusun, deskripsi } = req.body;

  const deskripsiDusun = new DeskripsiDusun({
    dusun,
    deskripsi
  });

  deskripsiDusun
    .save()
    .then((deskripsiDusun) => {
      res.status(201).json({
        message: "Deskripsi dusun berhasil ditambahkan",
        data: deskripsiDusun
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

/*
    Endpoint untuk mendapatkan semua deskripsi dusun
    Method: GET
    URL: /api/deskripsi-dusun/
*/
exports.getAllDeskripsiDusun = async (req, res) => {
  DeskripsiDusun.find()
    .then((deskripsiDusun) => {
      if(deskripsiDusun.length === 0) {
        return res.status(200).json({
          message: "Belum ada deskripsi dusun"
        });
      };
      
      res.status(200).json({
        data: deskripsiDusun
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

/*
    Endpoint untuk mendapatkan deskripsi dusun berdasarkan ID
    Method: GET
    URL: /api/deskripsi-dusun/:id
*/
exports.getDeskripsiDusunById = async (req, res) => {
  const { id } = req.params;

  DeskripsiDusun.findById(id)
    .then((deskripsiDusun) => {
      res.status(200).json({
        data: deskripsiDusun
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

/*
    Endpoint untuk mengupdate deskripsi dusun berdasarkan ID
    Method: PUT
    URL: /api/deskripsi-dusun/:id
    Body: dusun, deskripsi
*/
exports.updateDeskripsiDusun = async (req, res) => {
  const { id } = req.params;
  const { dusun, deskripsi } = req.body;

  DeskripsiDusun.findByIdAndUpdate(id, { dusun, deskripsi }, { new: true })
    .then((deskripsiDusun) => {
      res.status(200).json({
        message: "Deskripsi dusun berhasil diupdate",
        data: deskripsiDusun
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
}

/*
    Endpoint untuk menghapus deskripsi dusun berdasarkan ID
    Method: DELETE
    URL: /api/deskripsi-dusun/:id
*/
exports.deleteDeskripsiDusun = async (req, res) => {
  const { id } = req.params;

  DeskripsiDusun.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({
        message: "Deskripsi dusun berhasil dihapus"
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};
