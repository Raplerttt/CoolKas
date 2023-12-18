import React, { useEffect, useState } from "react";
import OlahBahanItem from "./OlahBahanItemComponent";
import { getModuls } from "../utils/api";
import "../style/olahBahan.css";
function OlahBahanList() {
  const [moduls, setModuls] = useState([]);
  useEffect(() => {
    // Fungsi untuk mendapatkan data meals
    const fetchModuls = async () => {
      try {
        const result = await getModuls();
        setModuls(result);
      } catch (error) {
        console.error("Error fetching modul:", error);
      }
    };

    // Panggil fungsi fetchModuls saat komponen dimuat pertama kali
    fetchModuls();
  }, []);

  return (
    <div className="row">
      {moduls.map((modul) => (
        <OlahBahanItem key={modul.id} id={modul.id} {...modul} />
      ))}
    </div>
  );
}

export default OlahBahanList;
