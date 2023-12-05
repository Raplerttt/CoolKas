import OlahBahanItem from "./olahBahanItemComponent";
import { getData } from "../utils/data";

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
