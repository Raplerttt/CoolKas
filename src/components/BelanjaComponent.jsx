/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "../style/belanja.css";
import "bootstrap-datepicker";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import { useNavigate } from "react-router-dom";
import { belanja } from "../utils/api";
const Belanja = () => {
  const navigate = useNavigate();
  const [id_jenis_bahan, setId_jenis_bahan] = useState(1);
  const storedUserId = localStorage.getItem(`ssdi_`);
  const id_user = parseInt(storedUserId, 10);
  const [jumlah, setJumlah] = useState(0);
  const [satuan, setSatuan] = useState("pcs");
  const [lokasi_penyimpanan, setLokasi_penyimpanan] = useState("");
  const [nama_bahan, setNama_bahan] = useState("");
  const [keterangan_aktivitas, setKeterangan_aktivitas] = useState("Belanja");
  const tanggalAktivitas = useRef(null);
  const tanggalKadaluarsa = useRef(null);

  useEffect(() => {
    $(tanggalAktivitas.current).datepicker({
      format: "yyyy-mm-dd",
      autoclose: true,
      todayHighlight: true,
    });
    $(tanggalKadaluarsa.current).datepicker({
      format: "yyyy-mm-dd",
      autoclose: true,
      todayHighlight: true,
    });
  }, []);

  const handleJenisBahanChange = (e) => {
    setId_jenis_bahan(e.target.value);
  };

  const handleSatuanChange = (e) => {
    setSatuan(e.target.value);
  };

  const handleBelanja = async (e) => {
    e.preventDefault();

    try {
      // Kirim data pendaftaran ke backend
      const response = await belanja(
        id_jenis_bahan,
        id_user,
        jumlah,
        jumlah,
        tanggalKadaluarsa.current.value,
        satuan,
        lokasi_penyimpanan,
        nama_bahan,
        keterangan_aktivitas,
        tanggalAktivitas.current.value
      );

      // Setelah pendaftaran berhasil, navigasi ke halaman login
      navigate(`/penyimpanan`);
    } catch (error) {
      console.error(error);
      // Tangani kesalahan atau tampilkan pesan ke pengguna jika diperlukan
    }
  };
  return (
    <div>
      <div className="kotak_login">
        <form onSubmit={handleBelanja}>
          <input
            type="hidden"
            className="input-form"
            placeholder="Keterangan Aktivitas"
            name="keterangan"
            value="Belanja"
            required
          />
          <select
            className="input-form"
            name="Jenis Makanan"
            onChange={handleJenisBahanChange}
            value={id_jenis_bahan}
          >
            <option value="" disabled defaultValue>
              Jenis Makanan
            </option>
            <option value={1}>Kacang - Kacangan</option>
            <option value={2}>Telur & Bahan Harian</option>
            <option value={3}>Buah - Buahan</option>
            <option value={4}>Sayur - Sayuran</option>
            <option value={5}>Daging & Unggas</option>
            <option value={6}>Bumbu Dapur</option>
            <option value={7}>Tepung & Olahannya</option>
            <option value={8}>Saos & Kecap</option>
            <option value={9}>Makanan Kaleng</option>
          </select>
          <input
            className="input-form"
            type="text"
            placeholder="Nama Bahan"
            name="nama"
            required
            value={nama_bahan}
            onChange={(e) => setNama_bahan(e.target.value)}
          />
          <input
            ref={tanggalAktivitas}
            className="input-form datepicker"
            type="text"
            placeholder="Tanggal pembelian"
            name="tanggal-pembelian"
            required
          />
          <input
            ref={tanggalKadaluarsa}
            className="input-form datepicker"
            type="text"
            placeholder="Tanggal kadaluwarsa"
            name="tanggal-kadaluarsa"
            required
          />
          <div className="select">
            <input
              className="input-left select-jumlah"
              type="number"
              placeholder="jumlah"
              name="jumlah-bahan"
              required
              value={jumlah === 0 ? "" : jumlah}
              onChange={(e) =>
                setJumlah(e.target.value === "" ? 0 : Number(e.target.value))
              }
            />
            <select
              className="input-right"
              name="type-makanan"
              onChange={handleSatuanChange}
              value={satuan}
            >
              <option value="" disabled defaultValue>
                Satuan
              </option>
              <option value="pcs">Pcs</option>
              <option value="kg">Kg</option>
              <option value="buah">Buah</option>
              <option value="liter">Liter</option>
            </select>
          </div>
          <input
            className="input-form"
            type="text"
            placeholder="Lokasi Penyimpanan"
            name="lokasi"
            required
            value={lokasi_penyimpanan}
            onChange={(e) => setLokasi_penyimpanan(e.target.value)}
          />
          <br />
          <button type="submit" className="btn-submit">
            Tambahkan
          </button>
        </form>
      </div>
      <button className="btn-back" onClick={() => navigate(`/penyimpanan`)}>
        {"<"}
      </button>
    </div>
  );
};

export default Belanja;
