import React from "react";
import "../style/login.css";
const Register = () => {
  return (
    <body class="body-login">
      <div class="form-wrapper form-login">
        <h2 class="form-title">Create your account</h2>
        <form action="#">
          <div class="form-group">
            <label for="username" class="required">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="example123"
              required
            />
          </div>
          <div class="form-group">
            <label for="email" class="required">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="password" class="required">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              required
            />
          </div>
          <div class="form-group">
            <label for="password" class="required">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Type your password again"
              required
            />
          </div>
          <div class="form-text">
            <button type="submit" class="btn btn-blue mb-4">
              Create Account
            </button>
            <p>
              Already have an account?{" "}
              <a href="login.html" class="form-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Register;
