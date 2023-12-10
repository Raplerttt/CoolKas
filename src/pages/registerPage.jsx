import React from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <body className="body-login">
      <div className="form-wrapper form-login">
        <h2 className="form-title-login">Register</h2>
        <form action="#">
          <div className="form-group-login">
            <div className="form-group">
              <label for="nama" className="required label-login">
                <span className="icon">&#128100;</span> Nama Lengkap
              </label>
              <input
                className="input-login"
                type="text"
                id="nama"
                placeholder="Nama Lengkap Anda"
                required
              />
            </div>
            <div className="form-group">
              <label for="username" className="required label-login">
                <span className="icon">&#64;</span> Username
              </label>
              <input
                className="input-login"
                type="text"
                id="username"
                placeholder="Username Anda"
                required
              />
            </div>
            <div className="form-group">
              <label for="email" className="required label-login">
                <span className="icon">&#128231;</span> Email
              </label>
              <input
                className="input-login"
                type="email"
                id="email"
                placeholder="Email Anda"
                required
              />
            </div>
            <div className="form-group">
              <label for="password" className="required label-login">
                <span className="icon">&#128274;</span> Kata Sandi
              </label>
              <input
                className="input-login"
                type="password"
                id="password"
                placeholder="Buat Password"
                required
              />
            </div>
          </div>

          <div className="btn-group-login">
            <button
              type="submit"
              className="btn btn-regis btn-blue mb-4"
              onClick={() => navigate(`/login`)}
            >
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
    </body>
  );
};

export default Register;
