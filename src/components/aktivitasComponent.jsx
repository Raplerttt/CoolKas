import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "bootstrap-datepicker";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "../style/belanja.css";
import { useNavigate, useLocation } from "react-router-dom";
import { kelola } from "../utils/api";

const Aktivitas = () => {
  const location = useLocation();
  const { bahan } = location.state;
  const navigate = useNavigate();
  const [id_jenis_bahan, setId_jenis_bahan] = useState(1);
  const [id_user, setId_user] = useState();
  const [id_bahan, setId_bahan] = useState();
  const [jumlah, setJumlah] = useState(0);
  const [jumlah_bahan, setJumlah_bahan] = useState(0);
  const [satuan, setSatuan] = useState("pcs");
  const [lokasi_penyimpanan, setLokasi_penyimpanan] = useState("");
  const [nama_bahan, setNama_bahan] = useState("");
  const [keterangan_aktivitas, setKeterangan_aktivitas] = useState("Belanja");
  const tanggalAktivitas = useRef(null);
  const tanggalKadaluarsa = useRef(null);
  const [tanggalKadaluwarsa, setTanggalKadaluwarsa] = useState("");

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
    setNama_bahan(bahan.nama_bahan);
    setId_jenis_bahan(bahan.id_jenis_bahan);
    setId_user(bahan.id_user);
    setId_bahan(bahan.id);
    setSatuan(bahan.satuan);
    setLokasi_penyimpanan(bahan.lokasi_penyimpanan);
    setJumlah(bahan.jumlah);
    // console.log(bahan.tanggal_expired);
    if (bahan.tanggal_expired) {
      const formattedDate = new Date(bahan.tanggal_expired)
        .toISOString()
        .split("T")[0];
      setTanggalKadaluwarsa(formattedDate);
    }
  }, [bahan]);

  const handleJenisBahanChange = (e) => {
    setId_jenis_bahan(e.target.value);
  };

  const handleSatuanChange = (e) => {
    setSatuan(e.target.value);
  };

  const handleKelola = async (e) => {
    e.preventDefault();

    try {
      const selectedTanggalKadaluarsa =
        tanggalKadaluarsa.current.value !== "" // Cek apakah datepicker diisi
          ? tanggalKadaluarsa.current.value
          : tanggalKadaluwarsa;

      // Logika untuk menghitung nilai jumlah berdasarkan keterangan aktivitas
      let updatedJumlah = jumlah; // Default: tidak ada perubahan
      if (keterangan_aktivitas === "Masak") {
        // Jika keterangan aktivitas adalah "Masak"
        updatedJumlah = jumlah - jumlah_bahan;
      } else if (keterangan_aktivitas === "Belanja") {
        // Jika keterangan aktivitas adalah "Belanja"
        updatedJumlah = jumlah + jumlah_bahan;
      }

      const response = await kelola(
        id_bahan,
        id_jenis_bahan,
        id_user,
        updatedJumlah,
        jumlah_bahan,
        selectedTanggalKadaluarsa,
        satuan,
        lokasi_penyimpanan,
        nama_bahan,
        keterangan_aktivitas,
        tanggalAktivitas.current.value
      );

      console.log(response.data);

      navigate(`/penyimpanan`);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <div className="kotak_login">
        <form onSubmit={handleKelola}>
          <select
            className="input-form"
            name="Keterangan Aktivitas"
            value={keterangan_aktivitas}
            onChange={(e) => setKeterangan_aktivitas(e.target.value)}
          >
            <option value="" disabled defaultValue>
              Keterangan Aktivitas
            </option>
            <option value="Belanja">Belanja</option>
            <option value="Masak">Masak</option>
          </select>
          <select
            className="input-form"
            name="Jenis Makanan"
            value={id_jenis_bahan}
            onChange={handleJenisBahanChange}
          >
            <option value="" disabled defaultValue>
              Jenis Makanan
            </option>
            <option value="1">Kacang - Kacangan</option>
            <option value="2">Telur & Bahan Harian</option>
            <option value="3">Buah - Buahan</option>
            <option value="4">Sayur - Sayuran</option>
            <option value="5">Daging & Unggas</option>
            <option value="6">Bumbu Dapur</option>
            <option value="7">Tepung & Olahannya</option>
            <option value="8">Saos & Kecap</option>
            <option value="9">Makanan Kaleng</option>
          </select>
          <input
            className="input-form"
            type="text"
            placeholder="Nama Bahan"
            name="nama"
            value={nama_bahan}
            onChange={(e) => setNama_bahan(e.target.value)}
            required
          />

          <input
            ref={tanggalAktivitas}
            className="input-form datepicker"
            type="text"
            placeholder="Tanggal Aktivitas"
            name="tanggal-Aktivitas"
            required
          />

          <div className="select">
            <input
              className="input-left select-jumlah"
              type="number"
              placeholder="jumlah digunakan/ditambah"
              name="jumlah-bahan"
              required
              value={jumlah_bahan === 0 ? "" : jumlah_bahan}
              onChange={(e) =>
                setJumlah_bahan(
                  e.target.value === "" ? 0 : Number(e.target.value)
                )
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
          <input
            ref={tanggalKadaluarsa}
            className="input-form datepicker"
            type="text"
            value={tanggalKadaluwarsa}
            placeholder="Tanggal Kadaluarsa"
            name="tanggal-kadaluarsa"
            required
            onChange={(e) => setTanggalKadaluwarsa(e.target.value)}
          />
          <br />
          <button type="submit" className="btn-submit">
            Kelola
          </button>
        </form>
      </div>
      <button className="btn-back" onClick={() => navigate(`/penyimpanan`)}>
        {"<"}
      </button>
    </div>
  );
};

export default Aktivitas;
