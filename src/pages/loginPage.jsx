import React from "react";
import "../style/login.css";
const LoginPage = () => {
  return (
    <body>
      <div class="form-wrapper">
        <h2 class="form-title">Login</h2>
        <form action="#" method="POST">
          <div class="form-group">
            <label for="username" class="required">
              <span class="icon">&#128100;</span>
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Your username"
              required
            />
          </div>

          <div class="form-group">
            <label for="password" class="required">
              <span class="icon">&#128274;</span>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              required
            />
          </div>

          <div class="form-text">
            <a href="forget-password.html" class="form-link">
              Forgot password?
            </a>
            <button type="submit" class="btn btn-blue mb-4">
              Login
            </button>

            <p>
              Don't have an account?{" "}
              <a href="register.html" class="form-link">
                Create account
              </a>
            </p>
          </div>
          <div class="home-icon">
            &#127968;
            <a href="#" class="form-link">
              <h2>Home</h2>
            </a>
          </div>
        </form>
      </div>
    </body>
  );
};

export default LoginPage;
