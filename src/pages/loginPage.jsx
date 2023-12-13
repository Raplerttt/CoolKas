import React, { useState } from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Ganti URL dengan endpoint login yang sesuai di backend Anda
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      // Di sini Anda dapat menanggapi respons dari backend sesuai kebutuhan aplikasi Anda
      console.log("Login successful:", response.data);

      navigate(`/Dashboard`);
    } catch (error) {
      setError("Username atau password tidak sesuai");
      window.alert("Username atau password tidak sesuai");
      // Tindakan lain yang ingin Anda lakukan jika login gagal
    }
  };

  return (
    <div className="body-login">
      <div className="form-wrapper form-login rounded-4">
        <h2 className="form-title-login">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group-login">
            <div className="form-group">
              <label htmlFor="username" className="required label-login">
                <span className="icon">&#128100;</span> Username
              </label>
              <input
                className="input-login"
                type="text"
                id="username"
                placeholder="Username Anda"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
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
                placeholder="Password Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="btn-group-login">
            <button type="submit" className="btn btn-login btn-blue mb-4">
              Login
            </button>
          </div>
        </form>
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        <div className="btn-group-login">
          <p className="small-text">
            Belum punya akun?
            <a href="/register" className="form-link">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
