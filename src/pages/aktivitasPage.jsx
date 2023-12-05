import Aktivitas from "../components/aktivitasComponent";
import Navbar from "../components/navbarComponent";

function AktivitasPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Aktivitas</h1>
        <Aktivitas />
      </div>
    </div>
  );
}

export default AktivitasPage;
