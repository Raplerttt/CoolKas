import AboutUs from "../components/aboutUs";
import Navbar from "../components/navbarComponent";
import { Footer, AppFooter } from "../components/footer";

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
