import Navbar from "../components/NavbarComponent";
import DetailOlahBahan from "../components/DetailOlahBahanComponent";
import { useParams } from "react-router-dom";
import { Footer, AppFooter } from "../components/Footer";
function DetailOlahBahanPage() {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Modul Olah Bahan</h1>
      </div>
      <DetailOlahBahan id={id} />
      <Footer />
      <AppFooter />
    </div>
  );
}

export default DetailOlahBahanPage;
