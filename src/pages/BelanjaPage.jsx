import Belanja from "../components/BelanjaComponent";
import Navbar from "../components/NavbarComponent";
import { Footer, AppFooter } from "../components/Footer";
function BelanjaPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Belanja Bahan Baru</h1>
        <Belanja />
      </div>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default BelanjaPage;
