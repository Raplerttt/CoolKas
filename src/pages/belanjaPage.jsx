import Belanja from "../components/belanjaComponent";
import Navbar from "../components/navbarComponent";
import { Footer, AppFooter } from "../components/footer";
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
