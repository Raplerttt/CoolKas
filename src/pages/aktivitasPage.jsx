import Aktivitas from "../components/aktivitasComponent";
import Navbar from "../components/navbarComponent";
import { Footer, AppFooter } from "../components/footer";
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
