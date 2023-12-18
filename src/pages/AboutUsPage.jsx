import AboutUs from "../components/AboutUs";
import Navbar from "../components/NavbarComponent";
import { Footer, AppFooter } from "../components/Footer";

function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Tentang Kami</h1>
        <AboutUs />
      </div>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default AboutUsPage;
