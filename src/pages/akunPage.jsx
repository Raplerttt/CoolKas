import Navbar from "../components/navbarComponent";
import Account from "../components/account";
import { Footer, AppFooter } from "../components/footer";
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
