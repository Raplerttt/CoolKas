import ContactUs from "../components/contactUsComponent";
import Navbar from "../components/navbarComponent";

function ContactUsPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Hubungi Kami</h1>
        <ContactUs />
      </div>
    </div>
  );
}

export default ContactUsPage;
