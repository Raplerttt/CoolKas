import React from "react";
import "../style/login.css";
const ForgetPassPage = () => {
  return (
    <body>
      <div class="form-wrapper">
        <h2 class="form-title">Forgot Password</h2>
        <form action="#" method="POST">
          <div class="form-group">
            <label for="email" class="required">
              <span class="icon">&#9993;</span>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              required
            />
          </div>

          <button type="submit" class="btn btn-blue mb-4">
            Reset Password
          </button>
          <div class="form-text">
            <p>
              Remember your password?{" "}
              <a href="login.html" class="form-link">
                Login
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

export default ForgetPassPage;
