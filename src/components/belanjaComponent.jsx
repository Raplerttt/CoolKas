import React from "react";

const Belanja = () => {
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
            className="input-form"
            type="date"
            placeholder="Tanggal digunakan"
            name="tanggal"
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
          <button type="submit" className="btn-submit">
            Tambahkan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Belanja;
