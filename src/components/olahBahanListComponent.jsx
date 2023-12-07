import OlahBahanItem from "./olahBahanItemComponent";
import { getData } from "../utils/data";
import "../style/olahBahan.css";
function OlahBahanList() {
  const moduls = getData();

  return (
    <div className="row">
      {moduls.map((modul) => (
        <OlahBahanItem key={modul.id} id={modul.id} {...modul} />
      ))}
    </div>
  );
}

export default OlahBahanList;
