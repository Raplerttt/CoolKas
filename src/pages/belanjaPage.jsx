import Belanja from "../components/belanjaComponent";
import Navbar from "../components/navbarComponent";

function BelanjaPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Belanja Bahan Baru</h1>
        <Belanja />
      </div>
    </div>
  );
}

export default BelanjaPage;
