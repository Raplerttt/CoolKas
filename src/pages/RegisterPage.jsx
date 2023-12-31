import React, { useState } from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";

const Register = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!namaLengkap || !username || !email || !password) {
      setError("Please fill in all the fields.");
      return;
    }

    try {
      const response = await axios.post("/register", {
        nama_lengkap: namaLengkap, // Update the property name
        username: username,
        email: email,
        password: password,
      });

      if (response && response.data && response.data.success) {
        // Redirect to the login page or perform other actions as needed
        navigate("/login");
      } else {
        console.error("Invalid response format");
        setError("Gagal Registrasi. Username atau email telah dipakai");
      }
    } catch (error) {
      console.error("Error during registration:", error);

      if (error.response && error.response.data) {
        setError("Registration failed. " + error.response.data.message);
      } else {
        setError("Registration failed. Please try again later.");
      }
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
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
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
            {error && (
              <div className="error-message small-text">
                <p>{error}</p>
              </div>
            )}
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
