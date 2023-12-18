import React from "react";
import "../style/login.css";
const ForgetPassPage = () => {
  return (
    <body>
      <div className="form-wrapper">
        <h2 className="form-title">Forgot Password</h2>
        <form action="#" method="POST">
          <div className="form-group">
            <label for="email" className="required">
              <span className="icon">&#9993;</span>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              required
            />
          </div>

          <button type="submit" className="btn btn-blue mb-4">
            Reset Password
          </button>
          <div className="form-text">
            <p>
              Remember your password?{" "}
              <a href="login.html" className="form-link">
                Login
              </a>
            </p>
          </div>
          <div className="home-icon">
            &#127968;
            <a href="/Dashboard" className="form-link">
              <h2>Home</h2>
            </a>
          </div>
        </form>
      </div>
    </body>
  );
};

export default ForgetPassPage;
