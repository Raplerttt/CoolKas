import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "bootstrap-datepicker";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "../style/belanja.css";
const Aktivitas = () => {
  const tanggalAktivitas = useRef(null);
  useEffect(() => {
    $(tanggalAktivitas.current).datepicker({
      format: "yyyy-mm-dd",
      autoclose: true,
      todayHighlight: true,
    });
  }, []);
  return (
    <div>
      <div className="kotak_login">
        <form action="">
          <select className="input-form" name="Jenis Makanan">
            <option value="" disabled selected hidden>
              Keterangan Aktivitas
            </option>
            <option value="">Belanja</option>
            <option value="">Masak</option>
          </select>
          <select className="input-form" name="Jenis Makanan">
            <option value="" disabled selected hidden>
              Jenis Makanan
            </option>
            <option value="">Mie</option>
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
    </div>
  );
};

export default Aktivitas;
