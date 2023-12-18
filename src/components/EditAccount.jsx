import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios';
import "../style/akun.css";

const EditAccount = () => {
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Event handler for form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Event handler for cancelling the edit
  const handleBatal = () => {
    navigate("/akun");
  };

  // Event handler for submitting the edited account information
  const handleSubmit = async () => {
    try {
      // Sending the edited account information to the backend
      const response = await axios.put("/edit-akun", {
        namaLengkap: formData.namaLengkap,
        email: formData.email,
        newPassword: formData.password,
      }, {
        headers: {
          "x-access-token": localStorage.getItem("username"),
        },
      });

      // If the update is successful, navigate to the account page
      if (response.data.success) {
        navigate("/akun");
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="kotak_form">
      <div className="wrap">
        <img
          className="akun-img"
          src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          alt=""
        />
      </div>
      <form className="form">
        <input
          type="text"
          className="input-form"
          placeholder="Nama Lengkap"
          name="namaLengkap"
          value={formData.namaLengkap}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="input-form"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="input-form"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="input-form"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="input-form"
          placeholder="Konfirmasi Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <div className="btn akun-btn">
          <button className="btn-submit" type="button" onClick={handleBatal}>
            Batal
          </button>
          <button className="btn-submit" type="button" onClick={handleSubmit}>
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
