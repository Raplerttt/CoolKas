import ContactUs from "../components/ContactUsComponent";
import Navbar from "../components/NavbarComponent";
import { Footer, AppFooter } from "../components/Footer";

function ContactUsPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Hubungi Kami</h1>
        <ContactUs />
      </div>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default ContactUsPage;
