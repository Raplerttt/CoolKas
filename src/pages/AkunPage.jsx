import Navbar from "../components/NavbarComponent";
import Account from "../components/Account";
import { Footer, AppFooter } from "../components/Footer";
function AccountPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Akun</h1>
        <Account />
      </div>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default AccountPage;
