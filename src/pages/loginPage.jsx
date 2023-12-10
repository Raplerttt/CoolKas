import React from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <body className="body-login">
      <div className="form-wrapper form-login rounded-4">
        <h2 className="form-title-login">Login</h2>
        <form action="#" method="POST">
          <div className="form-group-login">
            <div className="form-group">
              <label for="username" className="required label-login">
                <span className="icon">&#128100;</span> Username
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
              <label for="password" className="required label-login">
                <span className="icon">&#128274;</span> Kata Sandi
              </label>
              <input
                className="input-login"
                type="password"
                id="password"
                placeholder="Password Anda"
                required
              />
            </div>
          </div>

          <div className="btn-group-login">
            <button
              type="submit"
              className="btn btn-login btn-blue mb-4"
              onClick={() => navigate(`/`)}
            >
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
    </body>
  );
};

export default LoginPage;
