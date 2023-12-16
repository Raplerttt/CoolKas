const express = require("express");
const modulService = require("./modulService");

const router = express.Router();

// Endpoint untuk medapatkan seluruh modul
router.get("/moduls", async (req, res) => {
  try {
    const result = await modulService.getAllModuls();

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint untuk mendapatkan modul berdasarkan id
router.get("/moduls/:modulId", async (req, res) => {
  try {
    const modulId = req.params.modulId;

    if (!modulId || modulId.trim().length === 0) {
      return res.status(400).json({ error: "Modul ID is required" });
    }

    const result = await modulService.getModulById(modulId);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
