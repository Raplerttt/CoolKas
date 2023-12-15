// user/userController.js

const express = require("express");
const penyimpananService = require("./penyimpananService");

const router = express.Router();

// Endpoint untuk medapatkan seluruh modul
router.get("/jenisBahan/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId || userId.trim().length === 0) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const result = await penyimpananService.getJenisBahan(userId);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint untuk register
router.post("/belanja", async (req, res) => {
  try {
    const {
      id_jenis_bahan,
      id_user,
      jumlah,
      jumlah_bahan,
      tanggal_expired,
      satuan,
      lokasi_penyimpanan,
      nama_bahan,
      keterangan_aktivitas,
      tanggal_aktivitas,
    } = req.body;

    // Basic input validation
    if (
      !id_jenis_bahan ||
      !id_user ||
      !jumlah ||
      !tanggal_expired ||
      !satuan ||
      !lokasi_penyimpanan ||
      !keterangan_aktivitas ||
      !tanggal_aktivitas ||
      !nama_bahan
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const bahan = {
      id_jenis_bahan,
      id_user,
      jumlah,
      tanggal_expired,
      satuan,
      lokasi_penyimpanan,
      nama_bahan,
    };
    const resultBahan = await penyimpananService.createBahan(bahan);
    const id_bahan = resultBahan.bahanId;

    const aktivitas = {
      keterangan_aktivitas,
      jumlah_bahan,
      tanggal_aktivitas,
      id_user,
      id_bahan,
    };
    const resultAktivitas = await penyimpananService.createAktivitas(aktivitas);
    res.status(201).json({
      aktivitasId: resultAktivitas.aktivitasId,
      message: "Belanja successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/logAktivitas/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId || userId.trim().length === 0) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const result = await penyimpananService.getLogAktivitas(userId);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/listBahan/:jenisId/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const jenisId = req.params.jenisId;

    if (!userId || userId.trim().length === 0) {
      return res.status(400).json({ error: "User ID  is required" });
    } else if (!jenisId || jenisId.trim().length === 0) {
      return res.status(400).json({ error: "Jenis Bahan ID  is required" });
    }

    const result = await penyimpananService.getBahan(userId, jenisId);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/deleteBahan/:bahanId", async (req, res) => {
  try {
    const bahanId = req.params.bahanId;

    if (!bahanId || bahanId.trim().length === 0) {
      return res.status(400).json({ error: "User ID  is required" });
    }

    const result = await penyimpananService.deleteBahan(bahanId);

    if (result.success) {
      res.status(200).json({ message: "Bahan deleted successfully" });
    } else {
      res.status(404).json({ error: "Bahan not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint untuk register
router.put("/kelola/:bahanId", async (req, res) => {
  try {
    const {
      id_jenis_bahan,
      id_user,
      jumlah,
      jumlah_bahan,
      tanggal_expired,
      satuan,
      lokasi_penyimpanan,
      nama_bahan,
      keterangan_aktivitas,
      tanggal_aktivitas,
    } = req.body;

    const id_bahan = req.params.bahanId;

    // Basic input validation
    if (
      !id_jenis_bahan ||
      !id_user ||
      !jumlah ||
      !jumlah_bahan ||
      !tanggal_expired ||
      !satuan ||
      !lokasi_penyimpanan ||
      !keterangan_aktivitas ||
      !tanggal_aktivitas ||
      !nama_bahan ||
      !id_bahan
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const bahan = {
      id_jenis_bahan,
      id_user,
      jumlah,
      tanggal_expired,
      satuan,
      lokasi_penyimpanan,
      nama_bahan,
    };
    const resultBahan = await penyimpananService.updateBahan(id_bahan, bahan);

    const aktivitas = {
      keterangan_aktivitas,
      jumlah_bahan,
      tanggal_aktivitas,
      id_user,
      id_bahan,
    };
    const resultAktivitas = await penyimpananService.createAktivitas(aktivitas);
    res.status(201).json({
      aktivitasId: resultAktivitas.aktivitasId,
      message: "Aktivitas successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
