import { useState } from "react";
import axios from "../utils/axios"; // Pastikan untuk menginstal axios dengan npm install axios
import "../style/login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Mengirim data login ke backend
      const response = await axios.post("/login", {
        username: username,
        password: password,
      });
      // Jika login berhasil, Anda dapat menyimpan token ke local storage atau mengambil tindakan lain yang diperlukan
      const token = response.data.token;

      if (token !== undefined) {
        localStorage.setItem(`username`, token);
        navigate("/akun");
      } else {
        setError("Login gagal. Silakan periksa username dan kata sandi Anda.");
      }

      // Redirect atau lakukan tindakan lain sesuai kebutuhan
    } catch (err) {
      // Jika login gagal, tampilkan pesan kesalahan
      setError("Login gagal. Silakan periksa username dan kata sandi Anda.");
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
            {error && (
              <div className="error-message small-text">
                <p>{error}</p>
              </div>
            )}
            <button type="submit" className="btn btn-login btn-blue mb-4">
              Login
            </button>
          </div>
        </form>

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
