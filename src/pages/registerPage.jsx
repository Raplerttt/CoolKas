import React, { useState } from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [nama_lengkap, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Kirim data pendaftaran ke backend
      const response = await axios.post("http://localhost:3001/register", {
        nama_lengkap,
        username,
        email,
        password,
        // Tambahkan field lainnya sesuai kebutuhan
      });

      console.log(response.data); // Cetak response dari server jika perlu

      // Setelah pendaftaran berhasil, navigasi ke halaman login
      navigate(`/login`);
    } catch (error) {
      console.error("Registration failed:", error);
      // Tangani kesalahan atau tampilkan pesan ke pengguna jika diperlukan
    }
  };

  return (
    <div className="body-login">
      <div className="form-wrapper form-login">
        <h2 className="form-title-login">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group-login">
            <div className="form-group">
              <label htmlFor="nama" className="required label-login">
                <span className="icon">&#128100;</span> Nama Lengkap
              </label>
              <input
                className="input-login"
                type="text"
                id="nama"
                placeholder="Nama Lengkap Anda"
                required
                value={nama_lengkap}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username" className="required label-login">
                <span className="icon">&#64;</span> Username
              </label>
              <input
                className="input-login"
                type="text"
                id="username"
                placeholder="Username Anda"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="required label-login">
                <span className="icon">&#128231;</span> Email
              </label>
              <input
                className="input-login"
                type="email"
                id="email"
                placeholder="Email Anda"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="required label-login">
                <span className="icon">&#128274;</span> Kata Sandi
              </label>
              <input
                className="input-login"
                type="password"
                id="password"
                placeholder="Buat Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="btn-group-login">
            <button type="submit" className="btn btn-regis btn-blue mb-4">
              Register
            </button>
          </div>
        </form>
        <div className="btn-group-login">
          <p className="small-text">
            Sudah punya akun?
            <a href="/login" className="form-link">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
