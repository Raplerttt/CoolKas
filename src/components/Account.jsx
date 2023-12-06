import React, { useState } from 'react';

const Account = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    occupation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = () => {
    // Implement edit functionality
    console.log('Edit Akun');
  };

  const handleSubmit = () => {
    // Implement submit functionality
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
            Edit Akun
          </button>
          <button className="btn-submit" type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account;
