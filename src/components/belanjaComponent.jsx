import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
const Belanja = () => {
  const tanggalAwalRef = useRef(null);
  const tanggalAkhirRef = useRef(null);
  useEffect(() => {
    $(tanggalAwalRef.current).datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      todayHighlight: true
    });
    $(tanggalAkhirRef.current).datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      todayHighlight: true
    });
  }, []);
  return (
    <div>
      <div className="kotak_login">
        <form action="">
          <input
            type="hidden"
            className="input-form"
            placeholder="Keterangan Aktivitas"
            name="keterangan"
            value="belanja"
            required
          />
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
            ref={tanggalAwalRef}
            className="input-form datepicker"
            type="text"
            placeholder="Tanggal pembelian"
            name="tanggal-pembelian"
            required
          />
          <input
            ref={tanggalAkhirRef}
            className="input-form datepicker"
            type="text"
            placeholder="Tanggal kadaluarsa"
            name="tanggal-kadaluarsa"
            required
          />
          <div className="select">
          <input
            className="input-left"
            type="number"
            placeholder="jumlah"
            name="jumlah-bahan"
            required
          />
          <select className="input-right" name="type-makanan">
            <option value="">
              Pcs
            </option>
            <option value="">Kg</option>
            <option value="">Buah</option>
            <option value="">Liter</option>
          </select>
          </div>
          <input
            className="input-form"
            type="text"
            placeholder="Lokasi Penyimpanan"
            name="lokasi"
            required
          />
          <button type="submit" className="btn-submit">
            Tambahkan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Belanja;
