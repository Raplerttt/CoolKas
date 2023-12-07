import ContactUs from "../components/contactUsComponent";
import Navbar from "../components/navbarComponent";
import { Footer, AppFooter } from "../components/footer";

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
