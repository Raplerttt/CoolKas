import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/akun.css";
import axios from "../utils/axios";

const Account = () => {
  const navigate = useNavigate();

  const [accountInfo, setAccountInfo] = useState({
    namaLengkap: "",
    email: "",
    username: "",
  });

  useEffect(() => {
    console.log("Effect runs!");
    // Mendapatkan token dari localStorage
    const token = localStorage.getItem(`username`);
    console.log("Token:", token);

    if (token) {
      console.log("masuk");
      axios
        .get("/akun", {
          headers: {
            "x-access-token": token,
          },
        })
        .then((response) => {
          const accountInfo = response.data; // Update this line
          console.log("Account Info:", accountInfo);
          setAccountInfo(accountInfo);
          localStorage.setItem(`ssdi_`, accountInfo.id);
        })
        .catch((error) => {
          console.error("Error fetching account info:", error);
          navigate("/login");
        });
    } else {
      console.log("gamasuk");
      console.log("No token found, redirecting to login");
      navigate("/login");
    }
  }, [navigate]);

  // Fungsi untuk menghandle logout
  const handleLogout = () => {
    // Menghapus token dari session storage
    localStorage.removeItem(`ssdi_`);
    localStorage.removeItem(`username`);

    // Redirect ke halaman login
    navigate("/login");
  };

  // Fungsi untuk menghandle edit akun
  const handleEdit = () => {
    // Implementasi edit akun sesuai kebutuhan, misalnya menavigasi ke halaman edit akun
    navigate("/editAkun");
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
      <table className="table akun-table table-responsive">
        <tbody>
          <tr>
            <td className="heads">Nama Lengkap:</td>
            <td className="tails">{accountInfo.namaLengkap}</td>
          </tr>
          <tr>
            <td className="heads">Email:</td>
            <td className="tails">{accountInfo.email}</td>
          </tr>
          <tr>
            <td className="heads">Username:</td>
            <td className="tails">{accountInfo.username}</td>
          </tr>
        </tbody>
      </table>
      <div className="btn akun-btn">
        <button className="btn-submit" type="button" onClick={handleEdit}>
          Edit Akun
        </button>
        <button className="btn-submit" type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
