import React, { useState } from 'react';

const AkunForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    occupation: '',
  });

  const [passwordStrength, setPasswordStrength] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Evaluasi kekuatan password
    evaluatePasswordStrength(value);
  };

  const evaluatePasswordStrength = (password) => {
    // Implementasi evaluasi kekuatan password
    // Contoh sederhana: Anggap password yang lebih dari 8 karakter sebagai "Strong"
    const strength = password.length > 8 ? 'Strong' : 'Weak';
    setPasswordStrength(strength);
  };

  const handleEdit = () => {
    // Implementasi fungsi edit
    console.log('Edit Akun');
  };

  const handleSubmit = () => {
    // Implementasi fungsi submit
    console.log('Submit Akun', formData);
  };

  return (
    <div className="kotak_form">
      <div className="wrap">
        <img
          src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          alt=""
        />
      </div>
      <form className="form">
        <input
          type="text"
          className="input-form"
          placeholder="Nama Lengkap"
          name="fullName"
          value={formData.fullName}
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
        {/* Indikator Kekuatan Password */}
        <div>Password Strength: {passwordStrength}</div>
        <input
          type="password"
          className="input-form"
          placeholder="Konfirmasi Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="input-form"
          placeholder="Pekerjaan"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        />
        <div className="btn">
          <button className="btn-submit" type="button" onClick={handleEdit}>
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

export default editAccount;
