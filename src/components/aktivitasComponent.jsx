import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "bootstrap-datepicker";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "../style/belanja.css";
import { useNavigate } from "react-router-dom";

const Aktivitas = () => {
  const navigate = useNavigate();
  const tanggalAktivitas = useRef(null);
  const tanggalExpired = useRef(null);

  useEffect(() => {
    $(tanggalAktivitas.current).datepicker({
      format: "yyyy-mm-dd",
      autoclose: true,
      todayHighlight: true,
    });
    $(tanggalExpired.current).datepicker({
      format: "yyyy-mm-dd",
      autoclose: true,
      todayHighlight: true,
    });
  }, []);

  return (
    <div>
      <div className="kotak_login">
        <form action="">
          <select className="input-form" name="Keterangan Aktivitas">
            <option value="" disabled defaultValue hidden>
              Keterangan Aktivitas
            </option>
            <option value="Belanja">Belanja</option>
            <option value="Masak">Masak</option>
          </select>
          <select className="input-form" name="Jenis Makanan">
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
          <input
            ref={tanggalExpired}
            className="input-form datepicker"
            type="text"
            placeholder="Tanggal Kadaluarsa"
            name="tanggal-kadaluarsa"
            required
          />
          <input
            className="input-form"
            type="number"
            placeholder="jumlah"
            name="jumlah"
            required
          />

          <input
            className="input-form"
            type="text"
            placeholder="Lokasi Penyimpanan"
            name="lokasi"
            required
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
