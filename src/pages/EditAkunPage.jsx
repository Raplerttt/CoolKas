import Navbar from "../components/NavbarComponent";
import EditAccount from "../components/EditAccount";
import { Footer, AppFooter } from "../components/Footer";

function EditAccountPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Edit Akun</h1>
        <EditAccount />
      </div>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default EditAccountPage;
