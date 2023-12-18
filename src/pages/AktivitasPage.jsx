import Aktivitas from "../components/AktivitasComponent";
import Navbar from "../components/NavbarComponent";
import { Footer, AppFooter } from "../components/Footer";
function AktivitasPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Aktivitas</h1>
        <Aktivitas />
      </div>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default AktivitasPage;
