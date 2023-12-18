import Navbar from "../components/NavbarComponent";
import OlahBahanList from "../components/OlahBahanListComponent";
// import "../style/page.css";
// import "../style/olahBahan.css";
import { Footer, AppFooter } from "../components/Footer";

function ModulOlahBahanPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Modul Olah Bahan</h1>
        <OlahBahanList />
      </div>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default ModulOlahBahanPage;
