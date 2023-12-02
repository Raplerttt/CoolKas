  const Belanja = () => {
    return (
        <div class="container">
      <h1>Aktivitas</h1>
      <div class="kotak_login">
        <form action="">
          <div class="btn">
            <button class="btn-belanja">Belanja</button>
            <button class="btn-masak">Masak</button>
          </div>
          <input
            class="input-form"
            type="text"
            placeholder="Keterangan Aktivitas"
            name="username"
            required
          />
          <select class="input-form" name="Jenis Makanan">
            <option value="" disabled selected hidden>Jenis Makanan</option>
            <option value="">Mie</option>
          </select>
          <input
            class="input-form"
            type="password"
            placeholder="Nama Bahan"
            name="pass"
            required
          />
          <input
            class="input-form"
            type="password"
            placeholder="Tanggal digunakan"
            name="pass"
            required
          />
          <input
            class="input-form"
            type="password"
            placeholder="jumlah"
            name="pass"
            required
          />
          <input
            class="input-form"
            type="password"
            placeholder="Lokasi Penyiympanan"
            name="pass"
            required
          />
          <button type="submit" class="btn-submit">Tambahkan</button>
        </form>
      </div>
    </div>
    );
 };

 export default Belanja;